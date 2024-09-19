import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative z-20 bg-black text-white text-center p-4">
      <div className="container mx-auto">
        <p className="mb-2">© 2024 JangMunYong. All rights reserved.</p>
        <div className="mb-2">
          <a
            href="mailto:dltk456@naver.com"
            className="hover:underline font-light"
          >
            Contact Me
          </a>
          |
          <a href="/resume" className="hover:underline font-light">
            Resume
          </a>
        </div>
        <div className="flex justify-center space-x-4 mb-2">
          <a
            href="https://www.linkedin.com/in/%EB%AC%B8%EC%9A%A9-%EC%9E%A5-a81142293/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://github.com/moonyah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </a>
        </div>
        <div className="text-sm text-gray-400">
          <p>Developed with Next.js & TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
