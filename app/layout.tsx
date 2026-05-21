import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "swiper/css";
import "swiper/css/effect-fade";
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
    description:
      "Um projeto raro em Moema, a poucos minutos do Parque Ibirapuera.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
