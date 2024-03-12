// "use client";
import { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import { cn } from "../components/ui/cn";
import { Link } from "react-router-dom";
import { Img } from "./Img";
import { Avatar } from "./Avatar";
// import Link from "next/link";

function Navbar({ className }: { className?: String }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-6xl mx-auto z-50 ",
        className
      )}
    >
      <nav className="">
        <Menu setActive={setActive}>
          <div className="flex flex-auto items-center space-x-3 rtl:space-x-reverse">
            <Link to="/">
              <Img src="/logo.png" className="h-12" alt="VerSionVaultHub" />
            </Link>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-customColor">
              VerSionVaultHub
            </span>
          </div>
          <div className="flex flex-auto items-center">
            <Link to="/" className="ml-0">
              <MenuItem setActive={setActive} active={active} item="Home" />
            </Link>
            <Link to="/documents" className="ml-4">
              <MenuItem
                setActive={setActive}
                active={active}
                item="Documents"
              />
            </Link>
            <span className="ml-4">
              <MenuItem setActive={setActive} active={active} item="Contact Me">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink to="/courses">Web Development</HoveredLink>
                  <HoveredLink to="/interface-design">
                    Interface Design
                  </HoveredLink>
                  <HoveredLink to="/seo">
                    Search Engine Optimization
                  </HoveredLink>
                  <HoveredLink to="/branding">Branding</HoveredLink>
                </div>
              </MenuItem>
            </span>
          </div>
          <div className="flex items-center flex-auto	">
            <span className="ml-4">
              {/* <Avatar /> */}
              <MenuItem
                setActive={setActive}
                active={active}
                // item="l"
                imageSrc="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              >
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink to="/myprofile">My Profile</HoveredLink>
                  <HoveredLink to="/interface-design">
                    Update Account
                  </HoveredLink>
                  <HoveredLink to="/seo">Logout &rarr;</HoveredLink>
                </div>
              </MenuItem>
            </span>
          </div>{" "}
        </Menu>
      </nav>
    </div>
  );
}
export default Navbar;
