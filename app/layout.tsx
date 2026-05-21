import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "La Galerie Moema | Apartamentos de alto padrão em Moema",
  description:
    "La Galerie Moema: arquitetura contemporânea, plantas amplas e terreno com 3 frentes em Moema Pássaros, a poucos minutos do Parque Ibirapuera.",
  keywords: [
    "La Galerie Moema",
    "apartamento alto padrão Moema",
    "Moema Pássaros",
    "Parque Ibirapuera",
    "imóvel de luxo São Paulo"
  ],
  openGraph: {
    title: "La Galerie Moema",
    description: "Um projeto raro em Moema, a poucos minutos do Parque Ibirapuera.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Saira:wdth,wght@125,300;125,400;125,500;125,600;125,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
