"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button/Button";
import styles from "./ProjectSection.module.scss";

const features = [
  { n: "01", title: "Tripla frente", desc: "Terreno com três frentes garante mais luz, ventilação e privacidade para todos os apartamentos." },
  { n: "02", title: "Fora da rota de aviões", desc: "Localizado em Moema Pássaros, longe do corredor aéreo — silêncio e qualidade de vida garantidos." },
  { n: "03", title: "Plantas generosas", desc: "De 283 a 416 m², cada planta foi projetada para oferecer amplitude real no dia a dia." },
];

export function ProjectSection() {
  return (
    <section className={styles.project} id="projeto">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <motion.div className={styles.imgWrap} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className={styles.imgPlaceholder} />
              <div className={styles.imgAccent} />
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div className={styles.copy} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className={styles.eyebrow}>O projeto</span>
              <h2>La Galerie Moema</h2>
              <p>
                Inspirado na ideia de uma galeria contemporânea, o projeto valoriza luz, proporção
                e composição. Um espaço onde arquitetura e cotidiano se encontram com equilíbrio e
                sofisticação.
              </p>
            </motion.div>

            <div className={styles.features}>
              {features.map((f, i) => (
                <motion.div
                  key={f.n}
                  className={styles.feature}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className={styles.featureN}>{f.n}</span>
                  <div>
                    <strong>{f.title}</strong>
                    <p>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button>Receber apresentação completa</Button>
          </div>
        </div>

        <div className={styles.strip}>
          <div className={styles.stripItem} />
          <div className={styles.stripItem} />
          <div className={styles.stripItem} />
          <div className={styles.stripItem} />
        </div>
      </div>
    </section>
  );
}
