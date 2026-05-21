import { MessageCircle } from "lucide-react";
import styles from "./FloatingWhatsApp.module.scss";

export function FloatingWhatsApp() {
  return (
    <a className={styles.float} href="#contato" aria-label="Falar pelo WhatsApp">
      <MessageCircle size={22} strokeWidth={1.6} />
      <span>Consultor</span>
    </a>
  );
}
