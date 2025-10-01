import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <h1 style={{fontSize:28, lineHeight:1.1, marginBottom:8}}>Descuanto</h1>
      <p style={{color:'#475569', marginBottom:16}}>
        Encuentra descuentos de proximidad. Te enviaremos los códigos por SMS o email (nunca se muestran en la web).
      </p>

      <div className="card" style={{marginBottom:16}}>
        <input className="input" placeholder="Buscar por tienda, categoría o ciudad" />
      </div>

      <section className="grid">
        {[
          { title: '10% en Tienda X', badge: 'QR', desc: 'Válido hasta 31/12 en tienda física', id: 'offer_1' },
          { title: '15€ dto. Online Y', badge: 'Código', desc: 'Pedidos +50€', id: 'offer_2' },
        ].map(o => (
          <article key={o.id} className="card">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <h3 style={{margin:0}}>{o.title}</h3>
              <span className="badge">{o.badge}</span>
            </div>
            <p style={{color:'#475569'}}>{o.desc}</p>
            <Link className="btn" href={`/offers/${o.id}`}>Ver oferta</Link>
          </article>
        ))}
      </section>

      <div className="footer">Solo pedimos tu ubicación y (si quieres) tu móvil para enviarte códigos y evitar bots.</div>
    </main>
  );
}
