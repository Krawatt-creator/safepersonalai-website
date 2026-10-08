import type { PagesDictionary } from "./en";

// Spanish. Same shape as en.ts. Not yet checked by a native-speaking editor.
export const esPages: PagesDictionary = {
  card: {
    waits: "Espera tu aprobación.",
    show: "▶ Ver qué hace SafePersonalAI",
    back: "↺ Mostrar el mensaje original",
  },
  waitlist: {
    placeholder: "tu@ejemplo.com",
    emailLabel: "Dirección de correo",
    button: "Avísame",
    loading: "Apuntando…",
    done: "✓ Estás en la lista: te escribiremos cuando esté lista.",
    error: "Algo ha fallado; inténtalo de nuevo en un momento.",
  },
  base: {
    metaTitle: "Base — del correo al calendario y a las tareas en tu Mac, con tu aprobación",
    metaDescription:
      "Lee tu correo en tu Mac y prepara eventos de calendario, tareas, facturas y renovaciones para que los apruebes. Puedes escribirle por iMessage. Nunca envía correos, paga ni hace clic en enlaces.",
    name: "Base",
    tagline: "Tu correo, tu calendario y tus tareas: resueltos, sin sorpresas.",
    intro:
      "La parte de SafePersonalAI con la que empieza toda instalación. Lee tu correo nuevo y los iMessage que le envías, deduce qué hay que hacer y lo prepara. Tú decides qué pasa después.",
    steps: [
      {
        title: "Lee",
        body: "El correo nuevo de Gmail o de Apple Mail y los mensajes que le escribes desde tu propio número; los entiende en muchos idiomas.",
      },
      {
        title: "Tú apruebas",
        body: "Cada evento de calendario, factura o reserva que propone llega a una única lista de revisión. Aprueba, rechaza o aplaza, en el panel o desde la barra de menús.",
      },
      {
        title: "Actúa",
        body: "Solo entonces ocurre: el evento aparece en tu calendario, la factura queda registrada. Nunca envía un correo por ti.",
      },
    ],
    features: [
      {
        title: "Tu correo, leído por lo que te pide",
        body: "Lee el correo nuevo y deduce qué te pide — una tarea con su plazo, una cita, un cambio de cita, una factura, una renovación — y lo prepara para que lo apruebes. Una fecha que no está en el texto nunca se inventa.",
      },
      {
        title: "Eventos de calendario, sin invitar a nadie",
        body: "Los eventos aprobados van a Google Calendar, al Calendario de Apple o a ambos. No puede invitar a nadie más: esa capacidad sencillamente no existe en el software.",
      },
      {
        title: "Tareas con fecha",
        body: "Añade, marca como hecha, aplaza. El color indica qué está vencido, qué vence pronto y qué va bien, y una tarea periódica vuelve sola. Si quieres, un resumen matinal te dice la agenda del día y las facturas que vencen.",
      },
      {
        title: "Escríbele desde tu propio número",
        body: "Más de 25 comandos de iMessage, cada uno activable por separado: «Recuérdame llamar al casero mañana», «¿Qué tengo mañana en el calendario?», «¿Dónde está mi paquete?» o «Explícame esto:» con una carta pegada. Solo te responde a ti.",
      },
      {
        title: "Tus propias reglas sencillas",
        body: "«Cuando un correo o un mensaje mencione X, haz Y»: una tarea, un bloque de calendario o un apunte de ingreso o gasto. Con un formulario sencillo, sin código.",
      },
      {
        title: "Tu propia clave de IA, o ninguna",
        body: "Un modelo local de Ollama en tu Mac significa que no hay factura de IA; puede ser más lento y menos preciso que un modelo en la nube. ¿Prefieres Anthropic, OpenAI o Gemini? Conecta tu propia clave y págales directamente: nunca estamos en medio. Algunos tienen un nivel gratuito con límites y sus propias condiciones sobre los datos; por favor, consulta su web oficial.",
      },
    ],
    seeEyebrow: "Lo que ves de verdad",
    seeTitle: "Una lista tranquila para cada decisión.",
    seeBody: "SafePersonalAI lee lo que llega, prepara una propuesta clara y deja la decisión final en tus manos.",
    casesEyebrow: "En acción",
    casesTitle: "El tipo de cosas que resuelve cada día.",
    casesBody: "Tres ejemplos cotidianos. Haz clic en uno para ver qué hace SafePersonalAI con él.",
    cases: [
      {
        inputLabel: "Correo de la clínica dental",
        inputSub: "«Su cita es el jueves a las 15:00.»",
        outputTitle: "Añadir «Dentista — jue., 15:00» a tu calendario",
        outputSub: "Preparado a partir del correo, mostrando su origen",
      },
      {
        inputLabel: "Correo de la secretaría del colegio",
        inputSub: "«Por favor, envíe el formulario firmado antes del viernes.»",
        outputTitle: "Tarea: enviar el formulario firmado — vence el viernes",
        outputSub: "El plazo es el que indica el correo, nunca una suposición",
      },
      {
        inputLabel: "Correo: tu cita ha cambiado",
        inputSub: "«Su cita se ha trasladado del martes al jueves.»",
        outputTitle: "Cambio de calendario preparado: martes → jueves",
        outputSub: "Se actualiza el evento existente, no se duplica",
      },
    ],
  },
  travel: {
    metaTitle: "Travel — alertas de precios de vuelos en tu Mac, con tu propia clave de búsqueda gratuita",
    metaDescription:
      "Sigue los precios de vuelos por ruta en tu Mac con tu propia clave de búsqueda gratuita. Un aviso cuando un precio baja de tu límite. Las reservas de tu correo se convierten en viajes.",
    name: "Travel",
    tagline: "Ofertas de vuelos vigiladas por ti, sin que se te vaya el dinero.",
    intro:
      "Dile qué rutas te importan y cuál sería un buen precio. Comprueba en silencio en segundo plano y solo te interrumpe cuando un precio está de verdad por debajo de tu límite.",
    steps: [
      {
        title: "Dile lo que importa",
        body: "Una ruta, tus fechas y el precio que te haría reservar. Escribe una ciudad o un aeropuerto y elige entre las sugerencias.",
      },
      {
        title: "Comprueba en silencio",
        body: "Una vez al día, dentro de las búsquedas que permite tu propia clave: sin costes desbocados y sin que tengas que recargar nada.",
      },
      {
        title: "Solo te enteras de una oferta real",
        body: "Solo cuando una ruta seguida baja de verdad de tu propio límite; nada más te interrumpe.",
      },
    ],
    features: [
      {
        title: "Seguimiento de precios dentro de tu propio cupo",
        body: "Cada ruta seguida se comprueba una vez al día, dentro de las búsquedas que permite tu propia clave: ninguna factura sorpresa por una función pensada para ahorrarte dinero.",
      },
      {
        title: "Avisos solo cuando es una oferta",
        body: "Tú fijas el precio. Recibes un aviso cuando un precio real lo rebaja, no con cada oscilación normal.",
      },
      {
        title: "Tu propia clave de búsqueda gratuita",
        body: "Usa tu propia clave gratuita de SerpApi, válida para 250 búsquedas al mes. La clave se queda en tu Mac y el cupo es todo tuyo.",
      },
      {
        title: "Fechas flexibles y varias escalas",
        body: "Compara duraciones de viaje y uno o dos días antes o después, o busca de dos a cuatro tramos como Hannover → Antalya → Palma → Hannover. Una marca indica si las fechas están libres en tu Google Calendar.",
      },
      {
        title: "Reservas desde tu correo",
        body: "Las confirmaciones de vuelos y hoteles se convierten en eventos de calendario y en un itinerario guardado, agrupados en viajes con cuenta atrás.",
      },
      {
        title: "Maleta y facturación",
        body: "Al aprobar una reserva se añade una tarea para hacer la maleta dos días antes y otra para la facturación en línea el día anterior.",
      },
    ],
    watchEyebrow: "Lo que vigila",
    watchTitle: "Cada ruta, comprobada a diario, frente a tu propio límite.",
    watchBody:
      "Tú decides qué cuenta como oferta. Solo te interrumpe cuando una ruta seguida baja de verdad de esa cifra; todo lo demás sigue en silencio en segundo plano.",
    seeEyebrow: "Lo que ves de verdad",
    seeTitle: "Un aviso, solo cuando merece tu atención.",
    seeBody:
      "No es un panel que tengas que revisar: un único aviso cuando un precio baja de verdad de tu límite, y nada en absoluto cuando no.",
  },
  iphone: {
    metaTitle: "iPhone",
    metaDescription:
      "Consulta y dirige SafePersonalAI desde tu iPhone. Tu Mac sigue haciendo el trabajo y guardando tus datos; el teléfono es una ventana cerrada con llave hacia él, a través de tu propio iCloud.",
    name: "iPhone · próximamente",
    tagline: "Tu Mac hace el trabajo. Tu iPhone dice que sí.",
    intro:
      "Un acompañante opcional para quienes usan SafePersonalAI en un Mac. Aprueba lo que está pendiente, mira tu día y tu dinero, añade una tarea, desde cualquier lugar. Tus datos se quedan en tu Mac; el teléfono muestra una copia cerrada con llave que viaja por tu propio iCloud.",
    priceNote: "al mes · opcional · cancela cuando quieras",
    steps: [
      {
        title: "Empareja una vez, con la cámara",
        body: "Tu Mac muestra un código. Apunta con el iPhone y confirma en el Mac. Los dos comparten ahora una clave que nunca ha viajado a ninguna parte.",
      },
      {
        title: "Ve lo que ve tu Mac",
        body: "Lo que espera tu aprobación, tu semana, tus tareas, tu dinero: la última imagen que envió tu Mac, incluso mientras duerme.",
      },
      {
        title: "Di que sí desde cualquier lugar",
        body: "Aprueba, rechaza, añade una tarea. Tu Mac lo ejecuta en cuanto está despierto y conectado, y avisa al teléfono de que está hecho.",
      },
    ],
    features: [
      {
        title: "Ni siquiera Apple puede leerlo",
        body: "Todo lo que intercambian se cierra con la clave del emparejamiento antes de salir del dispositivo. Viaja por la parte privada de tu propio iCloud. No tenemos ningún servidor, así que no hay nada tuyo en el nuestro.",
      },
      {
        title: "Aprueba lo pendiente",
        body: "Un aviso cuando algo necesita tu aprobación y, después, Aprobar o Rechazar. Lo que requiere un dato que solo el Mac puede recoger lo dice, en lugar de suponerlo.",
      },
      {
        title: "Tu día y tu semana",
        body: "Eventos del Calendario de Apple y de Google Calendar, próximos cumpleaños y los pagos que vencen esta semana.",
      },
      {
        title: "Tu dinero, con sus gráficos",
        body: "Con Wealth: saldo, gastos por categoría de un mes a un año, presupuestos, los últimos movimientos, los próximos 30 días y tus inversiones con ganancias y pérdidas.",
      },
      {
        title: "El teléfono no puede cambiar tus claves",
        body: "Las claves, las cuentas de correo y los remitentes de confianza se configuran solo en el Mac. El teléfono puede pedir una lista corta y fija de cosas, y el Mac comprueba cada petición.",
      },
      {
        title: "Déjalo cuando quieras, sin perder nada",
        body: "Cancela la suscripción y el teléfono queda en silencio al final del mes pagado. En tu Mac no cambia nada, y el emparejamiento se conserva por si vuelves.",
      },
    ],
    screensEyebrow: "Cómo se ve",
    screensTitle: "Seis pantallas que usarás cada día.",
    screensBody:
      "Pantallas reales de la app, con sus datos de ejemplo incorporados: el mismo recorrido con datos de ejemplo que puedes abrir antes de emparejar un Mac. La app está en inglés.",
    screens: [
      {
        alt: "La pantalla «Today»: un evento de calendario pendiente de aprobación con los botones Approve y Reject, los eventos del día, un cumpleaños y el saldo.",
        title: "Hoy",
        body: "Lo que espera tu aprobación, con Aprobar y Rechazar, y después tu día: eventos, cumpleaños y tu saldo.",
      },
      {
        alt: "La pantalla «Wealth»: total de cuentas e inversiones, los pagos de los próximos 30 días y una curva de los próximos 90 días.",
        title: "Wealth",
        body: "Tu total, los pagos de los próximos 30 días y cómo queda el dinero después. Requiere el módulo Wealth.",
      },
      {
        alt: "La pantalla «Forecast»: una curva del saldo previsto para los próximos 90 días, su punto más bajo y los totales a 30, 60 y 90 días.",
        title: "Previsión",
        body: "Los próximos 90 días en una curva. Tócala para ver un día y lo que se mueve en él, incluido lo que has planificado tú.",
      },
      {
        alt: "La pantalla Investments: lo que vale todo hoy, la ganancia, un anillo por tipo y cada posición con su ganancia o pérdida.",
        title: "Inversiones",
        body: "Lo que vale todo hoy, lo que pagaste y cada posición con su ganancia o pérdida.",
      },
      {
        alt: "La pantalla To-do: tareas abiertas con sus fechas y un campo para añadir una.",
        title: "Tareas",
        body: "Tus tareas abiertas con sus fechas. Añade una, marca una como hecha o pásala a mañana.",
      },
      {
        alt: "La pantalla Events: cumpleaños, los eventos de hoy y de mañana y los pagos de esta semana.",
        title: "Eventos",
        body: "La semana que viene desde Apple y Google Calendar, próximos cumpleaños y pagos de esta semana.",
      },
    ],
    knowTitle: "Conviene saberlo antes de suscribirte",
    know: [
      {
        lead: "Necesita la app de Mac.",
        text: "La app de iPhone es una ventana hacia SafePersonalAI en tu Mac. No funciona por sí sola.",
      },
      {
        lead: "La misma cuenta de iCloud en ambos.",
        text: "El Mac y el iPhone deben tener iniciada la sesión con la misma cuenta de iCloud y algo de espacio libre en iCloud.",
      },
      {
        lead: "Leer funciona mientras el Mac duerme; actuar, no.",
        text: "Ves la última imagen que envió tu Mac. Lo que pides se ejecuta cuando el Mac está despierto y conectado.",
      },
      {
        lead: "Los avisos pueden llegar tarde.",
        text: "iOS decide cada cuánto despierta una app en segundo plano. Un aviso puede llegar minutos después y puede no llegar en el modo de bajo consumo.",
      },
      {
        lead: "Aún no está en el App Store.",
        text: "La app está hecha y en pruebas. Deja tu dirección arriba y te avisamos el día que esté disponible.",
      },
    ],
    trademark:
      "iPhone, iCloud, Face ID, Touch ID, Mac y App Store son marcas comerciales de Apple Inc., registradas en EE. UU. y en otros países y regiones. SafePersonalAI no está afiliada a Apple ni cuenta con su respaldo.",
  },
};
