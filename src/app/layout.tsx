import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Descuanto",
  description: "Descuentos cercanos sin complicaciones",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
