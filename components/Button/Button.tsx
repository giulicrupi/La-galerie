import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  tone?: "solid" | "ghost" | "outlineLight";
};

export function Button({ children, href = "#contato", tone = "solid" }: ButtonProps) {
  return (
    <a className={`${styles.button} ${styles[tone]}`} href={href}>
      <span>{children}</span>
      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
        <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/>
      </svg>
    </a>
  );
}
