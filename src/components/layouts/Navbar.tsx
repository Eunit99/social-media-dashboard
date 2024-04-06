import { useState } from "react";
import { navLinks } from "../../constants";
import { HOME } from "../../routes";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles";





const Navbar = () => {
  const [active, setActive] = useState(HOME);
  const [toggle, setToggle] = useState<boolean>(false);;

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>

        <nav className="w-full flex py-6 justify-between items-center navbar">
          <p
            className="text-white"
          >
            <Link href={HOME}>EUNIT</Link>
          </p>

          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link href={nav.id}>{nav.title}</Link>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">

            <Image
              src={toggle ? `/icons/close.svg` : `/icons/menu.svg`}
              width={32}
              height={32}
              className="w-[28px] h-[28px] object-contain"
              alt="menu"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${!toggle ? "hidden" : "flex"
                } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                      } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <Link
                      href={`#${nav.id}`}>{nav.title}</Link>

                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;