# Descuanto — Clean Starter (sin APIs, sin BD)
Este paquete es la base mínima para que Vercel compile a la primera.
Luego añadiremos APIs, base de datos y envío de SMS/email paso a paso.

## Cómo usarlo (reemplazar tu repo en GitHub)
1. Descarga el ZIP y **descomprímelo**.
2. Entra en tu repositorio `descuanto` en GitHub.
3. Pulsa **Add file → Upload files**.
4. Arrastra **todo el contenido** de la carpeta (archivos y carpetas) a GitHub.
   - Si te pregunta por conflictos, acepta **Replace** (sustituir).
5. Abajo, pulsa **Commit changes**.
6. En Vercel → tu proyecto → **Deployments** → **Redeploy (clear cache)**.

## ¿Qué incluye?
- Next.js 14 + TypeScript (con chequeos relajados en build)
- Páginas: `/`, `/offers/[id]`, `/pricing`
- Estilos simples y responsive (sin Tailwind)

## ¿Qué NO incluye?
- APIs en `/api/*`
- Prisma/DB
- Envío de SMS/Email

Estos los añadiremos después de que el dominio esté funcionando y la base esté operativa.
