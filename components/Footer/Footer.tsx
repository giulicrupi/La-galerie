import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid px-3 px-md-4 px-lg-5">

        <div className="row g-4 g-lg-5 align-items-end">
          <div className="col-12 col-lg-5">
            <a href="#top" className={styles.brand} aria-label="La Galerie">
              <span className={styles.brandLa}>La</span>
              <span className={styles.brandGalerie}>GALERIE</span>
            </a>
            <p className={styles.tagline}>
              Moema · uma curadoria contemporânea por Cyrela &amp; Nortis.
            </p>
          </div>

          <div className="col-6 col-lg-3">
            <span className={`${styles.eyebrow} lg-eyebrow--light`}>Incorporação</span>
            <div className={styles.signatures}>
              <div className={styles.sig}>CYRELA</div>
              <div className={`${styles.sig} ${styles.sigAlt}`}>NORTIS</div>
            </div>
          </div>

          <div className="col-6 col-lg-4">
            <span className={`${styles.eyebrow} lg-eyebrow--light`}>Contato</span>
            <ul className={styles.list}>
              <li><span>Stand</span><strong>Moema Pássaros · SP</strong></li>
              <li><span>WhatsApp</span><strong>+55 11 9 0000-0000</strong></li>
              <li><span>E-mail</span><strong>vendas@lagalerie.com.br</strong></li>
            </ul>
          </div>
        </div>

        <div className={styles.legal}>
          <p>
            Imagens meramente ilustrativas. Perspectivas artísticas com sugestão de decoração.
            Mobiliário, utensílios e acessórios não fazem parte do contrato de compra e venda.
            As medidas são internas e de face a face das paredes. Memorial descritivo registrado
            no cartório competente. La Galerie Moema é uma realização Cyrela &amp; Nortis.
            Em processo de certificação AQUA-HQE. © 2026 — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
