import Link from 'next/link';

export default function OfferPage({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <main className="container">
      <Link href="/" className="btn btn-ghost">← Volver</Link>
      <h1 style={{fontSize:24, marginTop:16}}>Oferta {id}</h1>
      <p className="muted">Descripción de la promoción, condiciones y fechas.</p>

      <div className="card" style={{marginTop:12}}>
        <p style={{marginTop:0, fontWeight:700}}>Solicitar el código</p>
        <label>Tu móvil (recomendado):</label>
        <input className="input" placeholder="+34..." />
        <div style={{margin:'8px 0', textAlign:'center', color:'var(--muted)'}}>o</div>
        <label>Tu email:</label>
        <input className="input" placeholder="tucorreo@ejemplo.com" />
        <div style={{display:'flex', gap:8, marginTop:12}}>
          <button className="btn btn-primary" type="button">Enviar código</button>
          <button className="btn" type="button">Guardar</button>
        </div>
        <p className="muted" style={{marginTop:10}}>Demo: todavía no enviamos nada. Solo es la interfaz.</p>
      </div>
    </main>
  );
}
