import { FiSearch } from "react-icons/fi";
import { MdOutlineMenu as GiHamburgerMenu } from "react-icons/md";
import { useHref } from "react-router-dom";
import { ActiveLink } from "../lib";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavItems = [
  { _id: "-nav-item-1", name: "Home", href: "/" },
  { _id: "-nav-item-2", name: "Sports", href: "/sports" },
  { _id: "-nav-item-3", name: "Entertainment", href: "/entertainment" },
  { _id: "-nav-item-4", name: "Life", href: "/life" },
  { _id: "-nav-item-5", name: "Money", href: "/money" },
  { _id: "-nav-item-6", name: "Tech", href: "/tech" },
  { _id: "-nav-item-7", name: "Travel", href: "/travel" },
];

export default function Header() {
  let path = useHref();
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleMenuToggle(e) {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
    document.querySelector("body").classList.toggle("no-scroll");
  }

  return (
    <header className="">
      <div className="flex p-[50px] gap-[20px] items-center relative">
        <div
          className={`top-[160px] absolute w-full min-h-screen pt-[0.2px] z-[999] transition-all bg-gray-100 
          duration-300 ${
            toggleMenu ? "left-0 opacity-100" : "-left-[100%] opacity-0"
          }`}
        >
          {NavItems.map((item) => (
            <Link
              key={item._id}
              to={item.href}
              className="block w-9/12 text-center mx-auto py-4 mb-1 uppercase italic font-bold border-b border-[#a2a2a2]"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/"
            className="block w-9/12 text-center mx-auto py-4 mb-1 uppercase italic font-bold border-b border-[#a2a2a2]"
          >
            Subscribe
          </Link>
          <Link
            to="/"
            className="block w-9/12 text-center mx-auto py-4 mb-1 uppercase italic font-bold"
          >
            Sign In
          </Link>
        </div>
        <div className="text-[50px] cursor-pointer flex-1">
          <div onClick={(e) => handleMenuToggle(e)}>
            <GiHamburgerMenu />
          </div>
        </div>
        <div className="flex-1 relative group hidden lg:block">
          <figure className="absolute -left-10 -top-1.5 text-[30px]">
            <button>
              <FiSearch />
            </button>
          </figure>
          <input
            className="w-full outline-none bg-transparent"
            aria-label="Search"
            type="text"
            placeholder="SEARCH..."
          />
        </div>
        <div className="text-3xl font-bold lg:text-6xl italic flex-[3] text-end lg:text-start">
          LOREM IPSUM
        </div>
        <div className="hidden lg:flex flex-1 lg:flex-[2] items-center justify-end">
          <button className="mr-8 uppercase">Sign in</button>
          <div className="button-styling-before">
            <div className="button-styling">Subscribe Now</div>
            {/* <div className='button-styling-back'>Subscribe Now</div> */}
          </div>
        </div>
      </div>
      <nav className="hidden lg:flex justify-center gap-6 border-b-black uppercase text-sm">
        {NavItems.map(({ _id, name, href }) => (
          <ActiveLink
            href={href}
            key={_id}
            classname="block transition-all duration-200 pb-2 border-b-4"
            isActive={path === href}
          >
            {name}
          </ActiveLink>
        ))}
      </nav>
      <div className="w-full h-[1px] bg-black -translate-y-[2.5px]" />
    </header>
  );
}
