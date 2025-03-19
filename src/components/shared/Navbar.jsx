import { BsMenuApp, BsMenuButton } from "react-icons/bs";
import Logo from "./Logo";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];
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
        <BiMenu size={32} className="cursor-pointer"></BiMenu>
      </div>
    </nav>
  );
};

export default Navbar;
