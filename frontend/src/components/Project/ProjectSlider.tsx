import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProjectSliderProps {
  onProjectClick: (id: number) => void;
  projects: number[]; // 프로젝트 아이디 배열
  selectedProject: number | null;
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({
  onProjectClick,
  projects,
  selectedProject,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoverDirection, setHoverDirection] = useState<
    "next" | "prev" | "none"
  >("none");
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    if (selectedProject !== null && sliderRef.current) {
      const index = projects.indexOf(selectedProject);
      if (index !== -1) {
        sliderRef.current.slickGoTo(index); // 선택된 프로젝트로 슬라이드 이동
        setActiveSlide(index);
      }
    }
  }, [selectedProject, projects]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    afterChange: (current: number) => onProjectClick(projects[current]),
  };

  const handleSlideClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index); // 클릭한 슬라이드로 이동
    }
    onProjectClick(projects[index]);
  };

  const handleSlideAreaClick = (direction: "next" | "prev") => {
    if (sliderRef.current) {
      if (direction === "next") {
        sliderRef.current.slickNext(); // 다음 슬라이드로 이동
      } else {
        sliderRef.current.slickPrev(); // 이전 슬라이드로 이동
      }
    }
  };

  return (
    <div
      className="relative h-[42rem]"
      onMouseEnter={() => setHoverDirection("none")}
      onMouseLeave={() => setHoverDirection("none")}
    >
      <Slider ref={sliderRef} {...settings} className="top-[4rem]">
        {projects.map((id, index) => (
          <div
            key={id}
            className={`w-full h-[36rem] transition-all duration-500 cursor-pointer ${
              index === activeSlide ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => handleSlideClick(index)}
          >
            <img
              src={`/images/image${id}.jpg`}
              alt={`Project ${id}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </Slider>
      {/* 왼쪽 클릭 영역 */}
      <div
        className={`absolute left-0 top-[4rem] bottom-[2rem] w-1/2 cursor-pointer ${
          hoverDirection === "prev"
            ? "bg-black bg-opacity-50"
            : "bg-transparent"
        } flex items-center justify-center transition-opacity duration-300`}
        onClick={() => handleSlideAreaClick("prev")}
        onMouseEnter={() => setHoverDirection("prev")}
        onMouseLeave={() => setHoverDirection("none")}
      >
        <span
          className={`text-white text-4xl ${
            hoverDirection === "prev" ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          PREV
        </span>
      </div>
      {/* 오른쪽 클릭 영역 */}
      <div
        className={`absolute right-0 top-[4rem] bottom-[2rem] w-1/2 cursor-pointer ${
          hoverDirection === "next"
            ? "bg-black bg-opacity-50"
            : "bg-transparent"
        } flex items-center justify-center transition-opacity duration-300`}
        onClick={() => handleSlideAreaClick("next")}
        onMouseEnter={() => setHoverDirection("next")}
        onMouseLeave={() => setHoverDirection("none")}
      >
        <span
          className={`text-white text-4xl ${
            hoverDirection === "next" ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          NEXT
        </span>
      </div>
    </div>
  );
};

export default ProjectSlider;
