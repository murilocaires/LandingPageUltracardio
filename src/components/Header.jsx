import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "hero", href: "#hero" },
        { id: "about", href: "#about" },
        { id: "servicos", href: "#servicos" },
        { id: "team", href: "#team" },
        { id: "contato", href: "#contato" },
      ];

      const scrollPosition = window.scrollY + 100; // Offset para o header fixo

      // Se estiver no topo, destacar "Início"
      if (scrollPosition < 200) {
        setActiveSection("hero");
        return;
      }

      for (const section of sections) {
        const element = document.querySelector(section.href);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-[white] shadow-sm fixed w-full top-0 z-[50] cursor-default">
      <div className="mx-auto px-4 sm:px-[1rem] py-[1rem]  flex justify-between items-center max-w-[1200px]">
        {/* Logo */}
        <a
          href="#top"
          className="cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img src={logo} alt="logo" className="w-[9rem] h-[3rem]" />
        </a>

        {/* Navegação */}
        <nav className="hidden md:flex gap-[2rem]">
          {[
            { name: "Início", href: "#hero", id: "hero" },
            { name: "Sobre", href: "#about", id: "about" },
            { name: "Serviços", href: "#servicos", id: "servicos" },
            { name: "Equipe", href: "#team", id: "team" },
            { name: "Contato", href: "#contato", id: "contato" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`transition-colors cursor-pointer ${
                activeSection === item.id
                  ? "text-[var(--ultracardio-red)] font-medium"
                  : "text-[gray] hover:text-[var(--ultracardio-red)]"
              }`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(item.href);
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Botão CTA */}
        <button
          className="bg-[var(--ultracardio-red)] text-[white] px-[1.5rem] py-[0.5rem] rounded-full font-medium hover:bg-[#b00020] transition-colors cursor-pointer flex items-center gap-[0.5rem]"
          onClick={() => {
            window.open(
              "https://wa.me/5575991364147?text=Olá, eu gostaria de agendar um procedimento.",
              "_blank"
            );
          }}
        >
          <svg
            className="w-[1.2em] h-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
          Agendar
        </button>
      </div>
    </header>
  );
}
