import { ArrowUpRight } from "lucide-react";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  tone?: "dark" | "light";
};

export function Button({ children, href = "#contato", tone = "dark" }: ButtonProps) {
  return (
    <a className={`${styles.button} ${styles[tone]}`} href={href}>
      <span>{children}</span>
      <ArrowUpRight size={18} strokeWidth={1.6} />
    </a>
  );
}
