import React, { useEffect, useState } from "react";

import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  const style = {
    black: `backdrop-blur-lg bg-gradient-to-r from-transparent to-[#121e33] py-0`,
  };
  return (
    <div
      className={`flex items-center justify-center w-full px-10 md:px-[5rem] py-2 fixed right-0 left-0 
    z-30 top-0 transparent text-white h-[80px] ${
      scroll && style.black
    } transition-all `}
    >
      <div className="flex items-center justify-between w-full h-full py-4">
        <div className="logo text-2xl cursor-pointer">POLAR ONE.</div>
        <ul className="hidden  md:flex gap-5 flex-1 justify-end uppercase">
          {["home", "testimonials", "services", "contact"].map(
            (item, index) => (
              <a href={`#${item}`}>
                <li key={index}>{item}</li>
              </a>
            )
          )}
        </ul>

        <div className="mobile__menu">
          <p className="text-lg md:hidden " onClick={() => setOpen(true)}>
            <AiOutlineBars size={26} />
          </p>
          {open && (
            <div
              className="flex-col h-[300px] rounded-bl-lg rounded-br-lg
            top-0 w-[100vw] justify-center right-0 left-0 bg-[#101f36] absolute transition-all "
            >
              <p
                className="fixed right-8 top-5 text-xl"
                onClick={() => setOpen(false)}
              >
                <AiOutlineClose size={27} />
              </p>
              <ul
                className="md:hidden flex items-center gap-4 flex-col h-[300px] rounded-bl-2xl rounded-br-2xl
                          justify-center "
              >
                {["home", "testimonials", "services", "contact"].map(
                  (item, index) => (
                    <a
                      onClick={() => setOpen(false)}
                      key={index}
                      href={`#${item}`}
                    >
                      <li className="text-lg uppercase">{item}</li>
                    </a>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
