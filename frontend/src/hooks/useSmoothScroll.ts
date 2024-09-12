"use client";
import { easeInOutQuad } from "@/utils/easing";
import { useEffect, useState } from "react";

const useSmoothScroll = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [sectionHeight, setSectionHeight] = useState(window.innerHeight);

  const smoothScrollTo = (targetSection: number) => {
    const start = window.scrollY;
    const end = targetSection * sectionHeight;
    const duration = 1000; // 애니메이션 지속 시간 (ms)
    const startTime = performance.now();

    const scrollStep = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const scrollPosition = start + (end - start) * easeInOutQuad(progress);

      window.scrollTo(0, scrollPosition);

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      } else {
        setScrolling(false);
        setCurrentSection(targetSection);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrolling) return;

      const delta = e.deltaY;
      const targetSection =
        delta > 0
          ? Math.min(currentSection + 1, 3)
          : Math.max(currentSection - 1, 0);

      if (targetSection !== currentSection) {
        setScrolling(true);
        smoothScrollTo(targetSection);
      }
    };

    window.addEventListener("wheel", handleWheel);
    const updateSectionHeight = () => setSectionHeight(window.innerHeight);
    window.addEventListener("resize", updateSectionHeight);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", updateSectionHeight);
    };
  }, [currentSection, scrolling, sectionHeight]);

  return {
    currentSection,
    scrollToSection: (index: number) => smoothScrollTo(index),
  };
};

export default useSmoothScroll;
