"use client";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/Button/Button";
import styles from "./GallerySection.module.scss";

const slides = [
  { title: "Piscina com atmosfera resort", label: "Área de lazer" },
  { title: "Lounge contemporâneo", label: "Espaço gourmet" },
  { title: "Bem-estar e rotina completa", label: "Fitness & Spa" },
  { title: "Fachada contemporânea", label: "Arquitetura" },
];

export function GallerySection() {
  return (
    <section className={styles.gallery} id="galeria">
      <div className={styles.header}>
        <div className="container">
          <span className={styles.eyebrow}>Galeria</span>
          <div className={styles.headerRow}>
            <h2>Estrutura completa para o seu dia a dia</h2>
            <Button tone="outlineLight">Agendar visita</Button>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        autoplay={{ delay: 4800, disableOnInteraction: false }}
        loop
        slidesPerView={1.12}
        spaceBetween={16}
        breakpoints={{ 768: { slidesPerView: 1.6 }, 1200: { slidesPerView: 2.1 } }}
        className={styles.slider}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className={styles.slide}>
              <div className={styles.slideImg} />
              <div className={styles.slideCaption}>
                <span>{slide.label}</span>
                <strong>{slide.title}</strong>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
