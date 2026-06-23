# Para Pinky 🤍

Una landing conmemorativa para el cumpleaños de Marysabel ("Pinky"). Hecha con
[Astro](https://astro.build) y desplegada en GitHub Pages.

## Cómo editarla

Casi todo se cambia en un solo lugar: **`src/data/contenido.js`**
(nombre, edad, la carta, los títulos, etc.). No necesitas tocar el diseño.

## Cómo correrla en tu compu

```bash
npm install
npm run dev      # abre http://localhost:4321/para-pinky
```

## Agregar una canción de fondo 🎵

1. Pon tu archivo `.mp3` en la carpeta `public/` (ej: `public/cancion.mp3`).
2. En `src/data/contenido.js`, escribe el nombre en `musica.archivo`:
   ```js
   musica: { archivo: 'cancion.mp3' },
   ```
3. La música empieza sola cuando ella abre el sobre, con un botón para silenciarla.

> Usa una canción que tengas permiso de usar (es un regalo privado y no indexado).

## Agregar más fotos 📸

1. Optimiza la foto (ancho ~2000px) y guárdala en `src/assets/proposal/`.
2. En `src/data/galeria.js`, impórtala y agrégala al arreglo `fotos`:
   ```js
   import foto13 from '../assets/proposal/foto-13.jpg';
   // ...
   { src: foto13, alt: 'Una tarde divertida juntos' },
   ```

## Publicar los cambios

Cada vez que hagas `git push` a la rama `main`, GitHub Actions reconstruye y
publica el sitio automáticamente.

```bash
git add -A
git commit -m "Actualizo la carta"
git push
```

## Privacidad

El sitio tiene `noindex` y un `robots.txt` que pide a los buscadores no indexarlo.
La URL es difícil de adivinar, pero técnicamente el repositorio es público.
