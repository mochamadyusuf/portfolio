import NavbarItem from "../Navbar/NavbarItem";
import NavbarMedia from "../Navbar/NavbarMedia";
import HamburgerMenu from "./HamburgerMenu";

export default function NavbarMobile() {
  return (
    <div className="dropdown w-full lg:hidden">
      <HamburgerMenu />
      <div
        className="menu menu-lg dropdown-content z-[1] shadow-lg bg-white -mt-12 -ml-2 p-3 min-h-screen md:w-3/4 md:pt-12"
        tabIndex={0}
      >
        <NavbarItem className="font-semibold md:font-bold text-rose-700" />
        <NavbarMedia className="flex mt-3" />
      </div>
    </div>
  );
}
