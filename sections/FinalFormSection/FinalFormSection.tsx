"use client";

import { useState } from "react";
import { Button } from "@/components/Button/Button";
import styles from "./FinalFormSection.module.scss";

const interests = [
  "283 m²", "345 m²", "416 m²", "Mais informações"
];

export function FinalFormSection() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (v: string) =>
    setSelected((prev) => prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]);

  return (
    <section className={styles.final} id="contato">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <aside className={styles.aside}>
              <span className={styles.eyebrow}>Atendimento</span>
              <h2>Exclusivo para você</h2>
              <p className={styles.lede}>
                Fale com um consultor especializado e receba uma apresentação personalizada do La Galerie Moema.
              </p>
              <ul className={styles.perks}>
                <li>Atendimento presencial ou digital</li>
                <li>Apresentação completa do projeto</li>
                <li>Tabela de preços atualizada</li>
                <li>Visita ao decorado mediante agendamento</li>
              </ul>
              <div className={styles.devs}>
                <span>Uma realização</span>
                <div className={styles.devLogos}>
                  <span className={styles.devName}>CYRELA</span>
                  <span className={styles.devSep}>×</span>
                  <span className={styles.devName}>NORTIS</span>
                </div>
              </div>
            </aside>
          </div>

          <div className="col-lg-7">
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.fieldGroup}>
                <input aria-label="Nome completo" placeholder="Nome completo" required />
                <input aria-label="WhatsApp" placeholder="WhatsApp" type="tel" required />
                <input aria-label="E-mail" placeholder="E-mail" type="email" />
              </div>

              <div className={styles.chipsLabel}>Tenho interesse em:</div>
              <div className={styles.chips}>
                {interests.map((v) => (
                  <button
                    key={v}
                    type="button"
                    className={`${styles.chip} ${selected.includes(v) ? styles.chipActive : ""}`}
                    onClick={() => toggle(v)}
                  >
                    {v}
                  </button>
                ))}
              </div>

              <label className={styles.optIn}>
                <input type="checkbox" defaultChecked />
                Aceito receber informações sobre o empreendimento por WhatsApp e e-mail.
              </label>

              <Button href="#contato">Falar com consultor</Button>

              <p className={styles.micro}>
                Seus dados são protegidos e utilizados somente para contato sobre este empreendimento.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
