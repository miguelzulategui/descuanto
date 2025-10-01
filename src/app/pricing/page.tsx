export default function Pricing() {
  return (
    <main className="container">
      <h1 style={{fontSize:28}}>Planes para marcas</h1>
      <p style={{color:'#475569'}}>Cuanto mayor el plan, mayor visibilidad y datos de seguimiento (respetando GDPR).</p>

      <div className="grid grid-2">
        {[
          { name: 'Básico', detail: 'Hasta 50 promociones/mes, visibilidad estándar' },
          { name: 'Pro', detail: 'Hasta 1.000 promociones/mes, visibilidad media' },
          { name: 'Enterprise', detail: 'Ilimitado, máxima visibilidad, informes avanzados' },
        ].map((p,i) => (
          <article key={i} className="card">
            <h3 style={{marginTop:0}}>{p.name}</h3>
            <p>{p.detail}</p>
            <a className="btn" href="#">Contactar / Contratar</a>
          </article>
        ))}
      </div>
    </main>
  );
}
