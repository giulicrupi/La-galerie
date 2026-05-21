"use client";

import { motion } from "framer-motion";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/Button/Button";
import styles from "./PlantsSection.module.scss";

const plants = [
  {
    area: "283m²",
    suites: "4 suítes",
    vagas: "3 vagas",
    detail: "Living integrado e varanda com amplitude generosa",
    specs: [
      { label: "Área privativa", value: "283 m²" },
      { label: "Suítes", value: "4" },
      { label: "Vagas", value: "3" },
      { label: "Andar tipo", value: "2 por andar" },
    ],
  },
  {
    area: "345m²",
    suites: "4 suítes",
    vagas: "3 vagas",
    detail: "Planta equilibrada para receber com privacidade",
    specs: [
      { label: "Área privativa", value: "345 m²" },
      { label: "Suítes", value: "4" },
      { label: "Vagas", value: "3" },
      { label: "Andar tipo", value: "1 por andar" },
    ],
  },
  {
    area: "416m²",
    suites: "4 suítes",
    vagas: "4 vagas",
    detail: "Residência suspensa com proporções raras",
    specs: [
      { label: "Área privativa", value: "416 m²" },
      { label: "Suítes", value: "4" },
      { label: "Vagas", value: "4" },
      { label: "Andar tipo", value: "1 por andar" },
    ],
  },
];

export function PlantsSection() {
  return (
    <section className={styles.plants} id="plantas">
      <div className="container">
        <div className={styles.heading}>
          <div>
            <span className={styles.eyebrow}>Plantas</span>
            <h2>Plantas amplas, pensadas para diferentes momentos de vida</h2>
          </div>
          <Button tone="ghost">Ver plantas detalhadas</Button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={1.08}
        spaceBetween={20}
        breakpoints={{ 768: { slidesPerView: 2.1 }, 1200: { slidesPerView: 2.7 } }}
        className={styles.slider}
      >
        {plants.map((plant, index) => (
          <SwiperSlide key={plant.area}>
            <motion.article
              className={styles.plant}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className={styles.planMedia}>
                <div className={styles.planGraphic}>
                  <i /><i /><i /><i />
                </div>
              </div>
              <div className={styles.plantInfo}>
                <span className={styles.area}>{plant.area}</span>
                <h3>{plant.suites} · {plant.vagas}</h3>
                <p>{plant.detail}</p>
                <ul className={styles.specTable}>
                  {plant.specs.map((s) => (
                    <li key={s.label}>
                      <span>{s.label}</span>
                      <strong>{s.value}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
