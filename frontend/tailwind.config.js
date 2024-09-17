/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#262627",
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"], // 기본 폰트를 Pretendard로 설정
        pixel: ['"Press Start 2P"', "cursive"], // 픽셀 폰트 추가
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
};
