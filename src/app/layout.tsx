import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "Descuanto",
  description: "Descuentos cercanos sin complicaciones",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <div className="page">{children}</div>
        <BottomNav />
      </body>
    </html>
  );
}
