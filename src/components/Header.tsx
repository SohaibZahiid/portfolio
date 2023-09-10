import { HiSun, HiBars3 } from "react-icons/hi2";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

const menu = [
  { id: 1, label: "About" },
  { id: 2, label: "Work" },
  { id: 3, label: "Contact" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")!) || "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", JSON.stringify("light"));
    } else {
      setTheme("dark");
      localStorage.setItem("theme", JSON.stringify("dark"));
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <header className="max-container flex justify-end items-center py-8">
      <nav>
        <ul className="text-slate-600 tracking-tighter font-bold hidden md:flex items-center gap-8">
          {menu.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.label}`}
                className="hover:text-rose-500 transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="border border-slate-600 pt-6"></li>
          <li>
            <HiSun
              onClick={handleThemeSwitch}
              className="cursor-pointer text-2xl hover:text-rose-500 transition-all"
            />
          </li>
          <li>
            <a href="/Sohaib_Zahid_CV.pdf" className="btn btn-blue">
              Resume
            </a>
          </li>
        </ul>
        <HiBars3
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-slate-400 cursor-pointer block md:hidden"
        />
      </nav>
      <MobileMenu
        links={menu}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleMenu={() => setIsOpen(!isOpen)}
      />
    </header>
  );
};

export default Nav;
