import { BsMenuApp, BsMenuButton } from "react-icons/bs";
import Logo from "./Logo";
import { BiCross, BiMenu } from "react-icons/bi";
import { useState } from "react";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="px-4 flex justify-between items-center py-3 border-b-2 border-base-300 bg-yellow-50">
      <Logo></Logo>
      <div className="large-opt">
        <ul className="lg:flex hidden gap-4">
          {routes.map((route) => (
            <li key={route.path}>
              <a href={route.path}>{route.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mobile-opt block lg:hidden">
        <BiMenu
          onClick={() => setIsMenuOpen(true)}
          size={32}
          className={`cursor-pointer ${isMenuOpen ? "hidden" : "block"}`}
        ></BiMenu>
        <ImCross
          onClick={() => setIsMenuOpen(false)}
          size={24}
          className={`cursor-pointer ${isMenuOpen ? "block" : "hidden"}`}
        ></ImCross>
        <ul
          className={`space-y-3 absolute left-0 bg-yellow-50 w-full p-4 ${
            isMenuOpen ? "top-16" : "-top-[9999px]"
          } `}
        >
          {routes.map((route) => (
            <li className="border-b-2 border-base-300" key={route.path}>
              <a href={route.path}>{route.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
