// src/components/ScrollNav.tsx
import { Link } from "react-scroll";

const ScrollNav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4">
      <ul className="flex justify-around">
        <li>
          <Link to="section1" smooth={true} duration={500}>
            Section 1
          </Link>
        </li>
        <li>
          <Link to="section2" smooth={true} duration={500}>
            Section 2
          </Link>
        </li>
        <li>
          <Link to="section3" smooth={true} duration={500}>
            Section 3
          </Link>
        </li>
        <li>
          <Link to="section4" smooth={true} duration={500}>
            Section 4
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ScrollNav;
