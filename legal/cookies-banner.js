(function() {
  const consent = localStorage.getItem("cookies-consent");
  if (!consent) {
    const banner = document.createElement("div");
    banner.id = "cookie-banner";
    banner.innerHTML = `
      <div id="cookie-banner" style="position: fixed; bottom: 0; left: 0; right: 0; background: #fff; border-top: 1px solid #eee; padding: 12px; z-index: 9999; display:flex; gap:12px; align-items:center; justify-content:center; flex-wrap:wrap;">
        <p style="margin:0; font-size:13px; color:#222;">Usamos solo cookies analíticas anónimas (GA4 vía GTM) para medir tráfico. Se activan solo si aceptas.</p>
        <a href="/legal/cookies.html" target="_blank" rel="noopener" style="font-size:12px; text-decoration:underline;">Más info</a>
        <button id="cookie-reject" style="padding:8px 12px; border-radius:10px; background:#f2f2f2; border:1px solid #e5e5e5;">Rechazar</button>
        <button id="cookie-accept" style="padding:8px 12px; border-radius:10px; background:#111; color:#fff; border:0;">Aceptar</button>
      </div>
    `;
    document.body.appendChild(banner);
    document.getElementById("cookie-accept").onclick = () => {
      localStorage.setItem("cookies-consent", "accepted");
      gtag('consent','update', { 'analytics_storage':'granted' });
      document.getElementById("cookie-banner").remove();
    };
    document.getElementById("cookie-reject").onclick = () => {
      localStorage.setItem("cookies-consent", "rejected");
      gtag('consent','update', { 'analytics_storage':'denied' });
      document.getElementById("cookie-banner").remove();
    };
  } else if (consent === "accepted") {
    gtag('consent','update', { 'analytics_storage':'granted' });
  }
})();