"use client";
import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="bottomnav">
      <Link href="/">Inicio</Link>
      <Link href="/">Buscar</Link>
      <Link href="/pricing">Marcas</Link>
      <Link href="/">Perfil</Link>
    </nav>
  );
}
