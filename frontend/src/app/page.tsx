'use client';
import React, { useState, useEffect, useRef } from 'react';
import Section from '../components/Section'; // Section 컴포넌트 경로 확인
import ScrollIndicator from '../components/ScrollIndicator';
import useSmoothScroll from 'use-scroll-animation'; // useSmoothScroll 훅
import Link from 'next/link';
import Button from '@/components/Button';
import SectionLinks from '@/components/LinkCards';

const Home: React.FC = () => {
  const { currentSection, scrollToSection } = useSmoothScroll();
  const content = "Hi. I'm Munyong, \n front-end developer.";
  const [displayedText, setDisplayedText] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false); // 애니메이션 여부 상태

  // useRef를 사용하여 i와 typingInterval을 관리
  const iRef = useRef(0);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function typing() {
      const i = iRef.current;
      if (i < content.length) {
        const txt = content[i];
        setDisplayedText((prev) => prev + (txt === '\n' ? '<br/>' : txt));
        iRef.current++;
      } else {
        clearInterval(typingIntervalRef.current!);
        setTimeout(() => {
          setDisplayedText('');
          iRef.current = 0;
          typingIntervalRef.current = setInterval(typing, 200);
        }, 2000);
      }
    }

    typingIntervalRef.current = setInterval(typing, 200);

    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section3 = document.getElementById('section3');
      if (section3) {
        const rect = section3.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <ScrollIndicator
        currentSection={currentSection}
        scrollToSection={scrollToSection}
      />

      <Section id="section1" background="black" className="relative h-screen">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white p-8 rounded">
          <Button onClick={() => scrollToSection(1)}>↓</Button>
        </div>
      </Section>

      <Section
        id="section2"
        background="linear-gradient(to bottom, white, white" // #D6F6A4 연초록
      >
        <div className="relative flex flex-col items-center justify-center h-screen">
          <div
            className="font-pixel text-center text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black"
            style={{
              lineHeight: '1.3',
              overflow: 'visible',
            }}
            dangerouslySetInnerHTML={{ __html: displayedText }}
          ></div>

          <Link
            href="/resume"
            className="absolute bottom-[200px] flex items-center justify-center px-6 py-3 text-gray-500 hover:text-black transition duration-300"
          >
            <Button>
              <span>더보기</span>
              <span className="ml-2 transform translate-y-[-2px]">→</span>
            </Button>
          </Link>
        </div>
      </Section>

      <Section
        id="section3"
        className="relative h-screen"
        background="linear-gradient(to bottom, white, #FBD5D5)" // #F2FE8A 연한 노랑  #FBD5D5 연한 분홍
      >
        <div className="absolute bottom-10 right-8 text-white p-8 rounded z-10">
          <Button onClick={() => scrollToSection(0)}>Scroll to Top ↑</Button>
        </div>
        <SectionLinks hasAnimated={hasAnimated} />
      </Section>
    </div>
  );
};

export default Home;
