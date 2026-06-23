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

  // --- Carta (edita libremente cada párrafo) ---
  carta: {
    encabezado: 'Para ti, mi amor',
    parrafos: [
      'Mi amor, mi vida, la mujer de mi vida, mi compañera, mi niña hermosa: hoy cumples 24 años y ya son 5 años que Dios me permite celebrar a tu lado y celebrar tu vida.',
      'Primero que nada quiero disculparme porque no pude organizar el cumpleaños que quisiste y todo lo que querías. También perdóname por no estar físicamente contigo el día de hoy, y lamento mucho todo lo malo que has sentido de mi parte.',
      'Quiero que sepas que eres la mejor mujer del mundo y que mereces incluso muchísimo más de lo que yo intento darte. Y aunque este pequeño detalle no es la gran cosa, sí demuestra que te dedico lo más valioso que tengo hoy en día: tiempo. Tiempo de hacer una página solo para ti, para tu cumpleaños, para demostrarte —con mi trabajo— algo especial para mí.',
      'Tu regalo viene en camino, llegará pronto, espero que te guste muchísimo. Es algo que has querido para arreglarte más cómoda, para ponerte bonita y empezar a crear tu espacio solo para ti dentro de nuestro hogar, porque te lo mereces. Trabajas muy duro, haces muchas cosas por mí, por nuestro hogar y por nuestro amor.',
      'Como te digo, mereces muchísimo más, y quisiera poder darte mucho más, pero créeme que la mayoría de mis esfuerzos son para ti, son por nosotros. Mi única prioridad eres tú, y siempre lo serás.',
      'En fin, mi amor, quiero que pases un lindo día. Saldremos a comer el miércoles que llegue, para celebrar algo lindo, pero que en general sea un día bonito y estés feliz por ti, por tu vida.',
      'Te amo mucho. Espero al menos sacarte una sonrisita con esto. Eres la mejor del mundo, mi amor. ¡Gracias, y espero poder celebrar TODA LA VIDA a tu lado!',
    ],
    firma: 'Con todo mi amor,',
    autor: 'Sanghel',
    // Adelanto del regalo (se muestra enmarcado debajo de la carta)
    regalo: {
      titulo: 'Un adelanto de tu regalo',
      nota: 'Tu espacio, para ti 🤍',
    },
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
