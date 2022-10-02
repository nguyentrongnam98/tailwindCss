import React from "react";
import { BiHomeAlt, BiMoviePlay, BiInfoCircle } from "react-icons/bi";
import NavItem from "./NavItem";
const items = [
  {
    label: "Home",
    icon: <BiHomeAlt size={"1.875rem"} />,
    active: true,
  },
  {
    label: "Movie",
    icon: <BiMoviePlay size={"1.875rem"} />,
    active: false,
  },
  {
    label: "About",
    icon: <BiInfoCircle size={"1.875rem"} />,
    active: false,
  },
];
export default function Navbar() {
  const NavItemContainer = () => {
    return (
      <>
        {items.map((item, index) => (
          <NavItem item={item} key={index} />
        ))}
      </>
    );
  };
  return (
    <nav className="col-span-1 bg-cyan-200">
      <div className="mx-4 justify-between items-center">
        <h4 className="uppercase font-bold text-primary py-4 border-b text-right border-primary">
          Phimmoi.net
        </h4>
      </div>
      <ul className="mx-4 my-2 ">{NavItemContainer()}</ul>
    </nav>
  );
}
