"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/Button/Button";
import styles from "./HeroSection.module.scss";

export function HeroSection() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 650], [0, 80]);

  return (
    <section className={styles.hero} id="top">
      <motion.div className={styles.media} style={{ y: imageY }}>
        <Image
          src="/assets/hero-living.jpeg"
          alt="Living amplo com arquitetura contemporânea"
          fill
          priority
          sizes="100vw"
        />
      </motion.div>

      <div className={styles.overlay} />
      <div className={styles.pattern} aria-hidden="true" />

      <div className="container">
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={styles.brand}
          >
            <span>La</span>
            <strong>GALERIE</strong>
          </motion.div>

          <motion.div
            className={styles.copy}
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.launch}>Lançamento</span>
            <h1>
              Um projeto raro <em>em Moema,</em>{" "}
              a poucos minutos do Parque Ibirapuera.
            </h1>
            <p>Arquitetura contemporânea, plantas amplas em um terreno com 3 frentes</p>
            <Button tone="outlineLight">Falar com consultor</Button>
          </motion.div>

          <motion.div
            className={styles.sideSeal}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 120 120" width="120" height="120">
              <defs>
                <path id="sealCircle" d="M60,60 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
              </defs>
              <text fontSize="10" letterSpacing="3.8" fill="rgba(245,239,228,0.9)" fontFamily="inherit" fontWeight="500">
                <textPath href="#sealCircle">FORA DA ROTA DE AVIÕES · MOEMA ·</textPath>
              </text>
              <circle cx="60" cy="60" r="6" fill="rgba(245,239,228,0.9)" />
            </svg>
          </motion.div>

          <motion.div
            className={styles.miniForm}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55 }}
          >
            <span>Receba a apresentação</span>
            <input aria-label="Nome" placeholder="Nome" />
            <input aria-label="WhatsApp" placeholder="WhatsApp" />
            <button type="button">Enviar</button>
          </motion.div>
        </div>
      </div>

      <div className={styles.specs}>
        <strong>283m², 345m² e 416m²</strong>
        <span>4 suítes</span>
        <span>3 a 4 vagas</span>
      </div>
    </section>
  );
}
