import { useEffect, useState } from "react";
import { HiSun, HiXMark } from "react-icons/hi2";

const MobileMenu = ({
  links,
  isOpen,
  setIsOpen,
  toggleMenu,
}: {
  links: any;
  isOpen: boolean;
  setIsOpen: any;
  toggleMenu: any;
}) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white dark:bg-black flex flex-col justify-center items-center z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <nav className="max-container relative h-full">
        <ul className="flex flex-col justify-center items-center h-full text-slate-600 tracking-tighter gap-4">
          {links.map((link: any) => (
            <li key={link.id}>
              <a
                onClick={() => setIsOpen(false)}
                href={`#${link.label}`}
                className="hover:text-rose-500 transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="border border-slate-600 pl-6"></li>
          <li>
            <HiSun onClick={handleThemeSwitch} className="cursor-pointer text-2xl hover:text-rose-500 transition-all" />
          </li>
          <li>
            <a href="/Sohaib_Zahid_CV.pdf" className="btn btn-blue">
              Resume
            </a>
          </li>
        </ul>
        <HiXMark
          onClick={toggleMenu}
          className="absolute top-8 right-2  text-2xl text-slate-400 cursor-pointer block"
        />
      </nav>
    </div>
  );
};

export default MobileMenu;
