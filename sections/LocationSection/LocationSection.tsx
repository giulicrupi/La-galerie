"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button/Button";
import styles from "./LocationSection.module.scss";

const bullets = [
  "A 300 m do Parque Ibirapuera",
  "Moema Pássaros, fora da rota de aviões",
  "Infraestrutura completa",
  "Mobilidade e conveniência"
];

const places = [
  { label: "Parque Ibirapuera", dist: "300 m" },
  { label: "Metrô Moema", dist: "800 m" },
  { label: "Shopping Ibirapuera", dist: "1,2 km" },
  { label: "Restaurantes do bairro", dist: "a pé" },
];

export function LocationSection() {
  return (
    <section className={styles.location} id="localizacao">
      <div className="container">
        <div className="row g-5 align-items-end">
          <div className="col-lg-7">
            <motion.span className={styles.eyebrow} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Localização
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Moema: um dos bairros mais consolidados da zona sul de São Paulo
            </motion.h2>
          </div>
          <div className="col-lg-5">
            <div className={styles.bullets}>
              {bullets.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="row g-4 align-items-center mt-5">
          <div className="col-lg-5">
            <div className={styles.places}>
              {places.map((place, index) => (
                <motion.div
                  key={place.label}
                  className={styles.place}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <circle cx="9" cy="7.5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M9 1.5C5.96 1.5 3.5 3.96 3.5 7c0 4 5.5 9.5 5.5 9.5S14.5 11 14.5 7c0-3.04-2.46-5.5-5.5-5.5z" stroke="currentColor" strokeWidth="1.4" fill="none" />
                  </svg>
                  <span>{place.label}</span>
                  <strong>{place.dist}</strong>
                </motion.div>
              ))}
            </div>
            <Button>Quero conhecer o projeto</Button>
          </div>
          <div className="col-lg-7">
            <motion.div className={styles.map} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <span className={styles.park}>Parque Ibirapuera</span>
              <span className={styles.metro}>Metrô Moema</span>
              <span className={styles.project}>La Galerie</span>
              <span className={styles.shop}>Shopping Ibirapuera</span>
              <i />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
