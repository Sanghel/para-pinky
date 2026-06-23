// ============================================================
//  CONTENIDO EDITABLE — cambia aquí los textos sin tocar el diseño
// ============================================================

export const contenido = {
  // --- Datos básicos ---
  nombre: 'Marysabel',
  apodo: 'Pinky',
  edad: 24,
  // Fecha de inicio del noviazgo (AAAA, MM-1, DD). El mes va de 0 a 11.
  // 01/01/2021  ->  new Date(2021, 0, 1)
  juntosDesde: new Date(2021, 0, 1),

  // --- Pantalla de inicio "Ábreme" ---
  intro: {
    titulo: 'Para Pinky',
    boton: 'Ábreme 💌',
    nota: 'Hecho con amor, solo para ti',
  },

  // --- Hero ---
  hero: {
    saludo: 'Feliz cumpleaños,',
    nombreGrande: 'Pinky',
    subtitulo: 'Hoy cumples 24 y yo cumplo el sueño de tenerte.',
  },

  // --- Carta (BORRADOR: edita libremente cada párrafo) ---
  carta: {
    encabezado: 'Mi Marysabel',
    parrafos: [
      'Hoy cumples 24 años y no puedo dejar de pensar en lo afortunado que soy de celebrarlos a tu lado. Cada uno de estos años te ha hecho más tú: más fuerte, más hermosa, más mía.',
      'Hace cinco años empezó lo mejor que me ha pasado. Desde entonces cada día contigo se siente como un regalo, y todavía me sorprende lo mucho que te quiero, un poquito más cada mañana.',
      'Gracias por tu risa, por tu manera de ver la vida, por hacer que hasta lo simple se vuelva especial. Eres mi lugar favorito.',
      'Y esto apenas empieza: pronto seremos esposos, y no me imagino caminar hacia el futuro de la mano de nadie más que tú.',
      'Feliz cumpleaños, mi amor. Que la vida te devuelva toda la luz que tú nos das.',
    ],
    firma: 'Con todo mi amor,',
    autor: 'Sanghel',
  },

  // --- Contador ---
  contador: {
    titulo: 'Tiempo juntos',
    pie: 'y apenas estamos empezando',
  },

  // --- Galería ---
  galeria: {
    titulo: 'Nuestra historia',
    subtitulo: 'El día que dijiste que sí 💍',
  },

  // --- Video ---
  video: {
    titulo: 'El momento',
    subtitulo: 'Para revivirlo siempre',
    archivo: 'video-propuesta.mp4', // está en /public
  },

  // --- Cierre ---
  cierre: {
    titulo: 'Te amo, Pinky',
    subtitulo: 'Pronto nos casamos 💍',
    firma: '— Sanghel',
  },

  // --- Música ---
  // 1) Pon tu canción en /public (ej: cancion.mp3)
  // 2) Escribe aquí el nombre del archivo. Déjalo en '' si aún no la tienes.
  musica: {
    archivo: '', // ej: 'cancion.mp3'
  },
};
