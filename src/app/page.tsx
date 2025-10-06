import Link from "next/link";

const categories = [
  { id: "restauracion", name: "Restauración" },
  { id: "moda", name: "Moda" },
  { id: "super", name: "Super" },
  { id: "tecnologia", name: "Tecnología" },
  { id: "belleza", name: "Belleza" },
  { id: "deporte", name: "Deporte" },
];

const mockOffers = [
  { id: "offer_1", title: "10% en Tienda X", badge: "QR", desc: "Válido hasta 31/12 en tienda física", distance: "300 m" },
  { id: "offer_2", title: "15€ dto. Online Y", badge: "Código", desc: "Pedidos +50€", distance: "Online" },
  { id: "offer_3", title: "2x1 Café", badge: "Código", desc: "L-V 8:00–11:30", distance: "0,8 km" },
];

export default function Home() {
  return (
    <main className="container">
      {/* Hero */}
      <section className="hero">
        <h1>Descuentos cerca de ti</h1>
        <p>Solo te pediremos ubicación y (si quieres) tu móvil para enviarte el código y evitar bots.</p>
        <div className="searchbar">
          <input className="input" placeholder="Buscar por tienda, categoría o ciudad" />
          <button className="btn btn-primary">Buscar</button>
        </div>
      </section>

      {/* Chips de categorías (scroll horizontal) */}
      <div className="chips">
        {categories.map((c) => (
          <button key={c.id} className="chip">{c.name}</button>
        ))}
      </div>

      {/* Listado de ofertas */}
      <section className="grid offers">
        {mockOffers.map((o) => (
          <article key={o.id} className="card offer">
            <div className="offer-top">
              <h3>{o.title}</h3>
              <span className="badge">{o.badge}</span>
            </div>
            <p className="muted">{o.desc}</p>
            <div className="offer-meta">
              <span className="pill">{o.distance}</span>
              <Link className="btn btn-ghost" href={`/offers/${o.id}`}>Ver oferta</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

}
