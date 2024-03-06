import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Services", path: "/services" },
    { id: 5, name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <nav className="bg-purple-400 ">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {open === true ? (
            <Bars3Icon className="h-6 w-6 text-blue-500" />
          ) : (
            <XMarkIcon className="h-6 w-6 text-blue-500" />
          )}
        </span>
      </div>
      <ul className={`md:flex align-items-center  py-2 md:static bg-purple-400 pl-8 pb-4 absolute duration-500 ${open? "top-26" : "-top-36"}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
