import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.signatures}>
          <span>LA GALERIE MOEMA</span>
          <span>Arquitetura contemporânea</span>
          <span>Moema Pássaros</span>
        </div>
        <p>
          Material preliminar de divulgação. Imagens meramente ilustrativas. Consulte memorial
          descritivo, disponibilidade, condições comerciais e documentos oficiais com a equipe de
          vendas.
        </p>
      </div>
    </footer>
  );
}
