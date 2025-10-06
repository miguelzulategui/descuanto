"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="brand">
        <Image
          src="/logo.png"
          alt="Descuanto"
          width={0}
          height={0}
          sizes="100vw"
          style={{ height: 40, width: "auto" }}
          priority
        />
      </Link>
      <nav className="topnav">
        <Link href="/pricing">Para marcas</Link>
      </nav>
    </header>
  );
}
