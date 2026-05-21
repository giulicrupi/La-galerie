"use client";

import Image from "next/image";
import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/Button/Button";
import styles from "./GallerySection.module.scss";

const gallery = [
  {
    title: "Piscina com atmosfera resort",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=86"
  },
  {
    title: "Lounge contemporâneo",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=86"
  },
  {
    title: "Bem-estar e rotina completa",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1800&q=86"
  }
];

export function GallerySection() {
  return (
    <section className={styles.gallery} id="galeria">
      <div className={styles.top}>
        <span className="section-kicker">Galeria</span>
        <h2>Estrutura completa para o seu dia a dia</h2>
        <Button tone="light">Agendar visita</Button>
      </div>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 4200, disableOnInteraction: false }}
        loop
        className={styles.fullscreen}
      >
        {gallery.map((item) => (
          <SwiperSlide key={item.title}>
            <div className={styles.slide}>
              <Image src={item.image} alt={item.title} fill sizes="100vw" />
              <div className={styles.caption}>{item.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
