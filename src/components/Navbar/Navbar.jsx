import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: 1, name: "Home", path: "home" },
    { id: 2, name: "Skill", path: "skill" },
    { id: 3, name: "Service", path: "service" },
    { id: 4, name: "Work", path: "work" },
    { id: 5, name: "Contact", path: "contact" },
  ];

  const handleScroll = (path) => {
    setOpen(false);

    if (path === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const element = document.getElementById(path);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-[#0A66C2] p-3 fixed top-0 left-0 right-0 shadow-xl z-50">
      <nav className="flex justify-between items-center w-[95%] mx-auto">
        <button
          onClick={() => handleScroll("home")}
          className="text-2xl font-bold text-white"
        >
          Masud Khan
        </button>

        <ul className="hidden md:flex">
          {navItems.map((nav) => (
            <button
              key={nav.id}
              onClick={() => handleScroll(nav.path)}
              className="px-5 py-2 text-white hover:text-gray-200 cursor-pointer"
            >
              {nav.name}
            </button>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white">
            {open ? (
              <IoMdClose className="text-3xl" />
            ) : (
              <IoIosMenu className="text-3xl" />
            )}
          </button>

          <ul
            className={`absolute transition-all duration-700 bg-[#0A66C2] py-10 rounded-b-lg w-full shadow-xl ${
              open ? "top-14 right-0" : "-top-96 right-0"
            }`}
          >
            {navItems.map((nav) => (
              <button
                key={nav.id}
                onClick={() => handleScroll(nav.path)}
                className="w-full text-center "
              >
                <li className="px-5 py-2 text-white hover:text-gray-200">
                  {nav.name}
                </li>
              </button>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
