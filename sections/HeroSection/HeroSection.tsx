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
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=88"
          alt="Living amplo com arquitetura contemporânea"
          fill
          priority
          sizes="100vw"
        />
      </motion.div>

      <div className={styles.overlay} />
      <div className={styles.organicTop} />
      <div className={styles.pattern} aria-hidden="true" />

      <div className="container">
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={styles.brand}
          >
            <span>LA</span>
            <strong>GALERIE</strong>
          </motion.div>

          <motion.div
            className={styles.copy}
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.launch}>Lançamento</span>
            <h1>Um projeto raro em Moema, a poucos minutos do Parque Ibirapuera.</h1>
            <p>Arquitetura contemporânea, plantas amplas em um terreno com 3 frentes</p>
            <Button tone="light">Falar com consultor</Button>
          </motion.div>

          <motion.div
            className={styles.sideSeal}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Fora da rota de aviões
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
