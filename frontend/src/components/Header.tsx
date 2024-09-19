'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image'; // Import Image from next/image

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 p-4 transition-colors duration-300 ${
        isHomePage
          ? scrolled
            ? 'bg-white text-black'
            : 'bg-transparent text-white'
          : 'bg-white text-black'
      } ${className}`}
    >
      <div className="container mx-auto h-16 flex items-center justify-between">
        <h1 className="text-xl flex items-center">
          <Link href="/">
            <span className="">Portfolio</span>
            <span className="font-bold">JangMunYong</span>
          </Link>
        </h1>
        <nav className="flex-grow px-[20rem] lg:px-[15rem] md:px-[5rem]">
          <ul className="flex justify-around space-x-4">
            <li className="flex-1 text-center">
              <Link href="/resume">Resume</Link>
            </li>
            <li className="flex-1 text-center">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="flex-1 text-center">
              <Link href="/activities">Activities</Link>
            </li>
            <li className="flex-1 text-center">
              <Link href="/guestbook">Guestbook</Link>
            </li>
          </ul>
        </nav>
        <div>
          <a
            href="https://github.com/moonyah"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-1 text-lg ${
              isHomePage ? (scrolled ? 'scrolled' : '') : 'scrolled'
            }`}
          >
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={20} // Set width according to your needs
              height={20} // Set height according to your needs
              className="icon"
            />
            <span className="mt-1 pl-[1px]">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
