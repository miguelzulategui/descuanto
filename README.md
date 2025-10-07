# Descuanto · Home MVP

Este paquete contiene la home mínima lista para publicar en Vercel/GitHub Pages.

## Estructura
- `index.html` → Home con logo centrado, hero, formulario de teléfono y banner de cookies.
- `images/descuanto-logo.png` → Logo.
- `legal/privacidad.html` y `legal/cookies.html` → Textos legales.
- `legal/cookies-banner.js` → (opcional) banner alternativo JS si prefieres cargarlo de fichero.

## Google Tag Manager
- Ya está configurado con **GTM-MQKJBX6Q**.
- Consent Mode v2 por defecto en *denied*, se actualiza al aceptar.

## Google Forms (recepción de teléfonos)
- En `index.html` busca:
  - `const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/11B4EnmaiXO9Td5rU5P2ZWtzEIuACDb7f0XkquGInyeA/formResponse";`
  - `const GOOGLE_ENTRY_KEY = "entry.YOUR_FIELD_ID";`
- Debes cambiar `entry.YOUR_FIELD_ID` por el **ID real** del campo de tu formulario.
  - En Google Forms → "Vista previa" (icono de ojo) → clic derecho "Ver código fuente" → busca `entry.` y copia el valor (ej. `entry.1234567890`).
- Si tu URL de vista previa es del tipo `/forms/d/e/.../viewform`, recuerda convertirla a `/forms/d/e/.../formResponse` y sustituir `GOOGLE_FORM_URL`.

## Privacidad
- No se comparte el teléfono con terceros. Se guarda únicamente en Google (Forms/Sheets).
- Cookies analíticas (GA4) solo tras consentimiento.

## Publicación rápida
- Sube la carpeta a Vercel/Netlify o GitHub Pages.
- Abre la web, prueba el formulario, y verifica en Google Sheets la llegada de respuestas.
