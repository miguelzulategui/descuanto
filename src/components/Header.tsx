"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="brand">
        <Image src="/logo.png" alt="Descuanto" width={148} height={125} priority />
      </Link>
      <nav className="topnav">
        <Link href="/pricing">Para marcas</Link>
      </nav>
    </header>
  );
}
