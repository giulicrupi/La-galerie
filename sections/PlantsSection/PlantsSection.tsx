"use client";

import { motion } from "framer-motion";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/Button/Button";
import styles from "./PlantsSection.module.scss";

const plants = [
  { area: "283m²", suites: "4 suítes", detail: "Living integrado e varanda com amplitude generosa" },
  { area: "345m²", suites: "4 suítes", detail: "Planta equilibrada para receber com privacidade" },
  { area: "416m²", suites: "4 suítes", detail: "Residência suspensa com proporções raras" }
];

export function PlantsSection() {
  return (
    <section className={styles.plants} id="plantas">
      <div className="container">
        <div className={styles.heading}>
          <span className="section-kicker">Plantas</span>
          <h2>Plantas amplas, pensadas para diferentes momentos de vida</h2>
          <Button>Ver plantas detalhadas</Button>
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
                <span>{plant.area}</span>
                <h3>{plant.suites}</h3>
                <p>{plant.detail}</p>
                <div className={styles.planGraphic}>
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
