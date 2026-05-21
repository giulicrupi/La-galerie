"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/Button/Button";
import styles from "./ProjectSection.module.scss";

export function ProjectSection() {
  return (
    <section className={styles.project} id="projeto">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <motion.div className={styles.copy} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="section-kicker">O projeto</span>
              <h2>La Galerie Moema</h2>
              <p>
                Inspirado na ideia de uma galeria contemporânea, o projeto valoriza luz, proporção
                e composição. Um espaço onde arquitetura e cotidiano se encontram com equilíbrio e
                sofisticação.
              </p>
              <div className={styles.facts}>
                <span>Terreno com tripla frente</span>
                <span>Mais iluminação e privacidade</span>
              </div>
              <Button>Receber apresentação completa</Button>
            </motion.div>
          </div>
          <div className="col-lg-7">
            <div className={styles.editorial}>
              <motion.div className={styles.imageLarge} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=86"
                  alt="Fachada contemporânea com linhas arquitetônicas elegantes"
                  fill
                  sizes="(max-width: 991px) 100vw, 58vw"
                />
              </motion.div>
              <motion.div className={styles.imageSmall} initial={{ opacity: 0, y: -28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=84"
                  alt="Detalhe arquitetônico de interiores sofisticados"
                  fill
                  sizes="320px"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
