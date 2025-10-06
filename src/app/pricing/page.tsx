export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "29€ / mes",
      promos: "Hasta 50 promociones",
      features: [
        "Publicación básica en la app",
        "Visibilidad estándar",
        "Acceso a panel con métricas básicas"
      ]
    },
    {
      name: "Growth",
      price: "79€ / mes",
      promos: "Hasta 500 promociones",
      features: [
        "Mayor visibilidad en la home",
        "Panel con métricas detalladas",
        "Segmentación por ubicación y sector"
      ]
    },
    {
      name: "Pro",
      price: "199€ / mes",
      promos: "Hasta 1000 promociones",
      features: [
        "Destacado premium en resultados",
        "Análisis avanzado del rendimiento",
        "Atención personalizada y soporte prioritario"
      ]
    }
  ];

  const handleClick = (planName: string) => {
    alert(`Formulario próximamente disponible para el plan ${planName} 🚀`);
  };

  return (
    <main className="container">
      <h1>Planes para marcas</h1>
      <p style={{ color: "var(--muted)", marginBottom: "20px" }}>
        Elige el plan que mejor se adapte a tus objetivos. Cambia o cancela en cualquier momento.
      </p>

      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px"
        }}
      >
        {plans.map((p) => (
          <div key={p.name} className="card" style={{ textAlign: "center" }}>
            <h2>{p.name}</h2>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "var(--brand)"
              }}
            >
              {p.price}
            </p>
            <p>{p.promos}</p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                marginTop: "10px",
                color: "var(--muted)"
              }}
            >
              {p.features.map((f) => (
                <li key={f} style={{ margin: "6px 0" }}>
                  ✔ {f}
                </li>
              ))}
            </ul>
            <button
              className="btn btn-primary"
              style={{ marginTop: "12px", width: "100%" }}
              onClick={() => handleClick(p.name)}
            >
              Contratar
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
