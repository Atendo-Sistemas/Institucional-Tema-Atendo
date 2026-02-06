import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Atendo - Sistema de Atendimento | CRM, Faturas, Delivery e mais",
  description:
    "Atendo Sistema de Atendimento: CRM, cartoes de visita digitais, gerenciador de faturas, prospeccao inteligente e sistemas de delivery. Solucoes completas para empresas de todos os portes.",
  keywords:
    "CRM, sistema de atendimento, cartoes digitais, faturas, prospeccao, delivery, PedirJa, Pedido da Hora",
  generator: "v0.app",
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
