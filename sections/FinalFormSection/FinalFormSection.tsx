import { Button } from "@/components/Button/Button";
import styles from "./FinalFormSection.module.scss";

export function FinalFormSection() {
  return (
    <section className={styles.final} id="contato">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <span className="section-kicker">Contato</span>
            <h2>ATENDIMENTO EXCLUSIVO</h2>
            <p>Fale com um consultor e agende sua visita</p>
          </div>
          <div className="col-lg-6">
            <form className={styles.form}>
              <input aria-label="Nome" placeholder="Nome" />
              <input aria-label="WhatsApp" placeholder="WhatsApp" />
              <input aria-label="E-mail" placeholder="E-mail" type="email" />
              <p>Atendimento personalizado e apresentação completa do projeto.</p>
              <Button>Falar com consultor</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
