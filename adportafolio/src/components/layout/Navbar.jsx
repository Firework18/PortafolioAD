import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../../shared/ui/buttons/Button";
import logoA from "../../assets/logoA.svg";
import logotipo from "../../assets/logotipo.png";

const MotionSpan = motion.span;

const NAV_ITEMS = [
  { id: "home", label: "Inicio" },
  { id: "about", label: "Sobre Mí" },
  { id: "studies", label: "Estudios" },
  { id: "certificates", label: "Certificados" },
  { id: "skills", label: "Skills" },
  { id: "proyects", label: "Proyectos" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "studies",
      "certificates",
      "skills",
      "proyects",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="navbar bg-carbon-claro/80 backdrop-blur-md border border-carbon-borde/80 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.45),0_0_15px_rgba(34,211,238,0.06)] px-4 sm:px-6 py-2 justify-between">
        {/* Brand con logoA y logotipo */}
        <div className="navbar-start w-auto">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-3 group transition-transform active:scale-95"
            aria-label="Ir a Inicio"
          >
            <img
              src={logotipo}
              alt="Alessandro Del Carpio"
              className="h-9 w-auto object-contain hidden sm:block drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            />
            <span className="text-base font-bold font-display text-celeste tracking-wider sm:hidden">
              Alessandro
            </span>
          </a>
        </div>

        {/* Desktop Menu con opción activa resaltada */}
        <div className="navbar-center hidden lg:flex">
          <nav className="flex items-center gap-1 p-1 rounded-xl bg-carbon/50 border border-carbon-borde/40">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-3.5 py-1.5 text-xs uppercase tracking-wider font-display font-medium rounded-lg transition-colors duration-200 select-none ${
                    isActive
                      ? "text-celeste font-semibold"
                      : "text-arena-muted hover:text-arena hover:bg-white/5"
                  }`}
                >
                  {item.label}

                  {/* Resaltado animado de la sección activa */}
                  {isActive && (
                    <MotionSpan
                      layoutId="active-nav-indicator"
                      className="absolute inset-0 rounded-lg bg-celeste/15 border border-celeste/35 shadow-[0_0_12px_rgba(34,211,238,0.25)] -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        {/* CTA Contacto y Menú Móvil */}
        <div className="navbar-end w-auto flex items-center gap-2">
          <Button
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            variant={activeSection === "contact" ? "primary" : "outline"}
            size="sm"
            className="hidden lg:inline-flex"
          >
            Contacto
          </Button>

          {/* Menú Mobile */}
          <div className="dropdown dropdown-end lg:hidden">
            <div
              tabIndex={0}
              role="button"
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost btn-circle btn-sm text-celeste"
              aria-label="Abrir menú"
            >
              <i className="bi bi-list text-2xl"></i>
            </div>
            {isOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-carbon-claro border border-carbon-borde rounded-xl z-50 mt-3 w-56 p-2.5 shadow-2xl space-y-1 font-display uppercase tracking-wider text-xs"
              >
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleNavClick(e, item.id)}
                        className={`rounded-lg py-2 ${
                          isActive
                            ? "bg-celeste/20 text-celeste font-bold border-l-2 border-celeste"
                            : "text-arena-muted hover:text-arena hover:bg-white/5"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "contact")}
                    className={`rounded-lg py-2 ${
                      activeSection === "contact"
                        ? "bg-celeste/20 text-celeste font-bold border-l-2 border-celeste"
                        : "text-arena-muted hover:text-arena hover:bg-white/5"
                    }`}
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
