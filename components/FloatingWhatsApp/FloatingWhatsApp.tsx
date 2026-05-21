"use client";

import { useState } from "react";
import styles from "./FloatingWhatsApp.module.scss";

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wa}>
      <button className={styles.btn} type="button" onClick={() => setOpen((v) => !v)} aria-label="Falar pelo WhatsApp">
        <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
          <path fill="currentColor" d="M16 3C9 3 3.5 8.5 3.5 15.4c0 2.4.7 4.7 1.9 6.7L3 29l7.2-2.3c1.9 1 4 1.5 6.1 1.5h.05C23.4 28.2 29 22.7 29 15.8 29 8.9 23.4 3 16 3zm0 22.6h-.04a10.4 10.4 0 0 1-5.3-1.5l-.4-.2-4.3 1.4 1.4-4.2-.3-.4a10.3 10.3 0 0 1-1.6-5.5C5.5 9.7 10.2 5 16 5c2.9 0 5.6 1.1 7.6 3.1a10.6 10.6 0 0 1 3.2 7.6c0 5.9-4.7 10.6-10.8 10.9zm5.9-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z"/>
        </svg>
        <span>Falar agora</span>
      </button>

      <div className={`${styles.panel} ${open ? styles.panelOpen : ""}`} aria-hidden={!open}>
        <div className={styles.panelHead}>
          <strong>Atendimento La Galerie</strong>
          <button type="button" onClick={() => setOpen(false)} aria-label="Fechar">×</button>
        </div>
        <p className={styles.panelSub}>Olá! Deixe seu contato e responderemos em instantes.</p>
        <form className={styles.panelForm} onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Seu nome" required />
          <input type="tel" placeholder="WhatsApp" required />
          <button type="submit">Iniciar conversa</button>
        </form>
      </div>
    </div>
  );
}
