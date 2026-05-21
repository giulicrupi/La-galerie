"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

const navItems = [
  { label: "Localização", href: "#localizacao" },
  { label: "Projeto", href: "#projeto" },
  { label: "Plantas", href: "#plantas" },
  { label: "Galeria", href: "#galeria" }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="container-fluid px-4 px-lg-5">
        <div className={styles.bar}>
          <a className={styles.logo} href="#top" aria-label="La Galerie Moema">
            <span>LA</span>
            <strong>GALERIE</strong>
          </a>

          <nav className={styles.nav} aria-label="Menu principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className={styles.cta} href="#contato">
            Falar com consultor
          </a>

          <button
            className={styles.menuButton}
            type="button"
            aria-label="Abrir menu"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="#contato" onClick={() => setIsOpen(false)}>
          Falar com consultor
        </a>
      </div>
    </header>
  );
}
