"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

const navItems = [
  { label: "Localização", href: "#localizacao" },
  { label: "O Projeto", href: "#projeto" },
  { label: "Plantas", href: "#plantas" },
  { label: "Galeria", href: "#galeria" },
  { label: "Atendimento", href: "#contato" }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="container-fluid px-3 px-md-4 px-lg-5">
        <div className={styles.bar}>
          <a className={styles.logo} href="#top" aria-label="La Galerie">
            <span>La</span>
            <strong>GALERIE</strong>
          </a>

          <nav className={styles.nav} aria-label="Menu principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className={styles.actions}>
            <a className={styles.cta} href="#contato">Falar com consultor</a>
            <button
              className={styles.menuButton}
              type="button"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setIsOpen((v) => !v)}
            >
              <span className={styles.burgerLines}>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={close}>{item.label}</a>
        ))}
        <a href="#contato" className={styles.drawerCta} onClick={close}>
          Falar com consultor
        </a>
      </div>
    </header>
  );
}
