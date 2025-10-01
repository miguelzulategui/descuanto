import Link from 'next/link';

export default function OfferPage({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <main className="container">
      <Link href="/" className="btn">← Volver</Link>
      <h1 style={{fontSize:24, marginTop:16}}>Oferta {id}</h1>
      <p>Descripción de la promoción, condiciones y fechas.</p>

      {/* Formulario sin envío real (no hay API aún) */}
      <div className="card">
        <p style={{marginTop:0, fontWeight:600}}>Solicitar el código</p>
        <label>Tu móvil (recomendado):</label>
        <input className="input" placeholder="+34..." />
        <div style={{margin:'8px 0', textAlign:'center'}}>o</div>
        <label>Tu email:</label>
        <input className="input" placeholder="tucorreo@ejemplo.com" />
        <p className="footer">Demo: todavía no enviamos nada. Solo es la interfaz.</p>
      </div>
    </main>
  );
}
