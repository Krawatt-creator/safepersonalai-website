import type { Dictionary } from "./en";

// Spanish. Same shape as en.ts. Not yet checked by a native-speaking editor.
export const es: Dictionary = {
  meta: {
    homeTitle: "SafePersonalAI — Asistente de IA privado para Mac: del correo al calendario y a las tareas",
    homeDescription:
      "SafePersonalAI funciona en tu Mac, convierte el correo en tareas y eventos de calendario que esperan tu aprobación, y trabaja con Ollama en local o con tu propia cuenta de proveedor de IA.",
    wealthTitle: "Wealth — el extracto de cualquier banco en tu Mac, sin acceso al banco",
    wealthDescription:
      "Lee en tu Mac el extracto de cualquier banco — CSV, Excel, PDF, MT940, CAMT, OFX o QIF — sin iniciar sesión en tu banco. Gastos por categoría, una previsión de los próximos meses, presupuestos y tus inversiones.",
    appDescription:
      "Una app para Mac que lee tu correo y lo convierte en eventos de calendario, tareas, planes de viaje y una visión clara de tu dinero. Todo lo que propone espera tu aprobación. Nunca envía correos, nunca paga y nunca hace clic en enlaces. Funciona en tu Mac con un modelo local de Ollama o con tu propia clave de un proveedor de IA.",
    offerDescription: "Descarga gratuita de la beta. Todos los módulos (Base, Travel, Wealth) están abiertos durante {days} días.",
  },
  nav: {
    useCases: "Casos de uso",
    modules: "Módulos",
    howItWorks: "Cómo funciona",
    pricing: "Precios",
    faq: "Preguntas",
    account: "Cuenta",
    download: "Descargar beta",
    appleSilicon: "Apple Silicon (M1+)",
    appleSiliconRequired: "Requiere Apple Silicon (M1+)",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
  },
  offer: {
    trialLine: "Gratis durante la beta: todos los módulos están abiertos durante {days} días.",
    priceLine:
      "Después, una compra única: Base {base} €, Travel {travel} €, Wealth {wealth} € — o los tres por {bundleBeta} € mientras dure la beta ({bundle} € después). La compra se abrirá pronto.",
    priceNote: "pago único · gratis {days} días en la beta",
    downloadNote:
      "Gratis durante {days} días, con todos los módulos · notarizada por Apple · Apple Silicon (M1 o posterior)",
  },
  hero: {
    badge: "Asistente privado para Mac · beta gratuita",
    titleLine1: "Convierte tu bandeja de entrada en acciones.",
    titleLine2: "Y espera tu aprobación.",
    body: "SafePersonalAI lee el correo nuevo, prepara la tarea o el evento de calendario que ha encontrado y te muestra exactamente qué va a pasar antes de que nada cambie. Funciona en tu Mac, en local con Ollama o con tu propia cuenta de un proveedor en la nube.",
    ctaDownload: "Descargar la beta gratuita",
    ctaUseCases: "Ver casos de uso reales",
    finePrint:
      "Para Mac con Apple Silicon (M1 o posterior). Usa un modelo local de Ollama sin cuenta en la nube, o tu propia clave de Anthropic, OpenAI o Gemini.",
  },
  panel: {
    title: "Acciones pendientes",
    preview: "Vista de ejemplo",
    rows: [
      {
        title: "Tarea: enviar el formulario firmado antes del viernes",
        detail: "Encontrada en un correo de la secretaría del colegio, con su plazo",
      },
      {
        title: "Añadir «Dentista — 3 sept., 15:00» a tu calendario",
        detail: "Leído de un iMessage que te enviaste a ti mismo",
      },
      {
        title: "Seguir la factura de la luz — 84,00 €, vence el 28 oct.",
        detail: "Leída del correo de la factura; te avisa antes del vencimiento",
      },
    ],
    approve: "Aprobar",
    reject: "Rechazar",
    approved: "✓ Aprobado",
    rejected: "✕ Rechazado",
    allDone: "Todo al día — nada espera tu respuesta.",
    replay: "↺ Repetir la demostración",
    footer: "Esperan tu aprobación. Nunca envía correos ni paga.",
    waiting: "{n} pendientes",
  },
  laptop: {
    eyebrow: "En silencio, en segundo plano",
    title: "Solo se despierta cuando hay algo que debas ver.",
    body: "Sin ruedas de carga ni un panel que tengas que vigilar: solo una luz discreta cuando algo necesita de verdad tu decisión.",
  },
  ownership: {
    eyebrow: "Tuyo, no alquilado",
    title: "Tu propio asistente privado. No otra suscripción.",
    intro:
      "SafePersonalAI convierte el Mac que ya tienes en tu escritorio en una capa privada de automatización. Tus datos de trabajo se quedan en local, la relación con tu proveedor de IA sigue siendo tuya y las condiciones comerciales se ven antes de comprar.",
    points: [
      {
        title: "Hecho para el ecosistema Apple que ya tienes",
        body: "Sin hardware nuevo, sin servidor alquilado, sin una empresa ajena que aloje tu vida. Funciona en silencio en tu propio Mac, con el equipo que ya tienes.",
      },
      {
        title: "Tu proveedor de IA, tu límite",
        body: "Usa Ollama en local sin cuenta, o conecta un proveedor en la nube compatible con tu propia clave y págale directamente. Las credenciales se quedan en tu Mac; SafePersonalAI nunca esconde el coste de la IA en una segunda suscripción ni pasa en silencio a un modelo pagado por nosotros.",
      },
      {
        title: "Pensado como software que es tuyo",
        body: "Cada módulo es una licencia de pago único ligada a la versión, no un alquiler mensual permanente.",
      },
    ],
    counter: {
      typical: "Una suscripción de IA típica",
      running: "${cost}/mes × {n} meses — y sigue sumando.",
      runningOne: "${cost}/mes × 1 mes — y sigue sumando.",
      perMonth: "/mes",
      ours: "Pago único por módulo. Tu Mac, tu clave de IA — sin cuota de plataforma.",
    },
  },
  boundary: {
    eyebrow: "El límite",
    title: "Una línea clara entre pensar y hacer.",
    intro:
      "La mayoría de las herramientas de IA mezclan entender y actuar en un solo paso. Nosotros no. Lo que SafePersonalAI deduce de tu correo es una propuesta hasta que la apruebas. Solo lo que comunica tu propio banco, y algunos recordatorios, se añaden directamente: marcados y deshechos con un clic.",
    steps: [
      {
        title: "La IA entiende",
        body: "Lee el correo recibido como datos no fiables y extrae una propuesta: una tarea, un evento de calendario, un recordatorio de renovación o una acción de un módulo.",
      },
      {
        title: "Tú apruebas",
        body: "Cada propuesta llega a una única lista de revisión. Puedes aprobar, rechazar, aplazar o completar la información que falte. La ambigüedad nunca se convierte en permiso.",
      },
      {
        title: "El software actúa",
        body: "Solo se ejecutan los campos aprobados. Los eventos de calendario no pueden invitar a nadie; las funciones de finanzas registran y prevén, pero no pueden mover dinero.",
      },
    ],
  },
  useCases: {
    eyebrow: "Qué hace",
    title: "Empieza por el día a día. Añade solo lo que necesites.",
    intro:
      "Base es el fundamento para el día a día. Travel y Wealth amplían el mismo asistente privado sin mover tu historial ni crear otra cuenta.",
    exploreAll: "Ver todos los casos de uso →",
    tabsLabel: "Módulos del producto",
    queueTitle: "Una sola lista de revisión",
    queueBody: "Cada módulo instalado usa el mismo paso visible de aprobación. Sin automatización oculta.",
    practicalUses: "{n} usos prácticos",
    note: "Los ejemplos detallados de cada tarjeta están, por ahora, en inglés.",
    modules: {
      operational: {
        name: "Base",
        label: "Módulo base",
        description: "Correo, calendario, tareas y tus propias reglas para el día a día.",
      },
      travel: {
        name: "Travel",
        label: "Módulo adicional",
        description: "Reservas, seguimiento de precios de vuelos y viajes que tienen en cuenta tu calendario.",
      },
      wealth: {
        name: "Wealth",
        label: "Módulo adicional",
        description: "Extractos de cualquier banco, gastos, previsión, presupuestos e inversiones.",
      },
    },
    topics: {
      "email-to-task": {
        title: "Correo → tarea",
        friction: "Se acabó que una petición importante desaparezca bajo correos más nuevos.",
      },
      "calendar-events": {
        title: "Eventos de calendario",
        friction: "Se acabó abrir el calendario solo para teclear una fecha.",
      },
      "todos-reminders": {
        title: "Tareas y recordatorios",
        friction: "Se acabó ese plazo que jurabas recordar y que se pasó sin avisar.",
      },
      "bill-invoice-tracking": {
        title: "Seguimiento de facturas",
        friction: "Se acabó rebuscar en el correo la noche antes del vencimiento.",
      },
      "custom-rules": {
        title: "Tus propias reglas sencillas",
        friction: "Se acabó cambiar tu rutina para encajar en la plantilla de otro.",
      },
      "booking-to-itinerary": {
        title: "Reserva → itinerario",
        friction: "Se acabó copiar los datos del vuelo y del hotel en tres sitios distintos.",
      },
      "flight-deal-tracking": {
        title: "Seguimiento de precios de vuelos",
        friction: "Se acabó recargar la página de precios por costumbre.",
      },
      "calendar-aware-travel": {
        title: "Viajes que miran tu calendario",
        friction: "Se acabó encontrar un buen precio y descubrir que las fechas no te van.",
      },
      "cashflow-forecast": {
        title: "Previsión de saldo",
        friction: "Se acabó enterarte de que vas justo cuando ya ha pasado.",
      },
      "recurring-cost-watch": {
        title: "Control de gastos fijos",
        friction: "Se acabaron las suscripciones que pasan desapercibidas.",
      },
      "portfolio-import": {
        title: "Importar la cartera",
        friction: "Se acabó mirar la app del bróker por separado de todo lo demás.",
      },
    },
  },
  pricing: {
    eyebrow: "SafePersonalAI v1",
    title: "Una instalación. {days} días gratis. Después, un solo pago.",
    intro:
      "Descarga la beta y todos los módulos estarán abiertos durante {days} días, gratis. Después, cada módulo es una compra única: la app de Mac no tiene suscripción. Un módulo que no compres se cierra; sus datos se quedan en tu Mac y vuelven cuando lo añadas. La compra se abrirá pronto y hoy no se cobra nada.",
    bundleLead: "Los tres juntos:",
    bundleStrong: "{bundleBeta} € en un solo pago mientras dure la beta",
    bundleRest: ", en lugar de {bundle} € después. La compra se abrirá pronto; hasta entonces no hay nada que pagar.",
    learnMore: "Más información →",
    download: "Descargar beta",
    included: "Incluido en la prueba de {days} días",
    modules: {
      operational: {
        name: "Base",
        tagline: "El fundamento del día a día: correo, calendario, iMessage y tareas.",
        features: [
          "Entiende tu correo y prepara tareas listas para aprobar",
          "Eventos de calendario a partir del correo, sin invitar a nadie",
          "Tareas con plazos y recordatorios",
          "Una lista de acciones pendientes: aprueba, aplaza o rechaza",
          "Funciona en tu Mac con Ollama en local o con tu propia clave en la nube",
        ],
      },
      travel: {
        name: "Travel",
        tagline: "Seguimiento de precios de vuelos que nunca gasta más búsquedas de las suyas.",
        features: [
          "Comprobación diaria del precio por ruta, dentro de tu cupo de búsquedas",
          "Aviso solo cuando un precio baja de verdad de tu límite",
          "Fechas flexibles y vuelos con varios tramos",
          "Muestra si las fechas del viaje están libres en tu calendario",
        ],
      },
      wealth: {
        name: "Wealth",
        tagline: "Tu dinero, leído del extracto de cualquier banco. Sin acceso al banco.",
        features: [
          "Extractos de cualquier banco: CSV, Excel, PDF, MT940, CAMT, OFX, QIF",
          "Gastos por categoría, para cualquier periodo",
          "Previsión de los próximos 1–3 meses, con aviso de saldo negativo",
          "Presupuestos, suscripciones detectadas y cargos inusuales marcados",
          "Inversiones y préstamos, con importación de Trade Republic",
        ],
      },
    },
  },
  trust: {
    eyebrow: "Confianza",
    title: "Hecho para quienes no confían su correo a una IA.",
    points: [
      {
        title: "Tus datos se quedan en tu Mac",
        body: "Las acciones, las tareas, los ajustes y los datos de los módulos permanecen en tu Mac. El contenido que se envía a un proveedor de IA en la nube va directamente con la cuenta del proveedor que elegiste; SafePersonalAI no lo recibe.",
      },
      {
        title: "En local o con tu propia clave",
        body: "Ollama puede funcionar por completo en tu Mac, sin cuenta ni clave. Las opciones en la nube usan tu propia cuenta y tu clave; SafePersonalAI guarda esa clave en local y envía las peticiones directamente al proveedor elegido, nunca a través de un servidor de SafePersonalAI.",
      },
      {
        title: "Las capacidades peligrosas no existen",
        body: "La app no puede enviar correos, invitar a asistentes, hacer clic en enlaces, cancelar servicios ni mover dinero. Aprobar algo no abre un camino oculto hacia esas acciones.",
      },
      {
        title: "Consulta el Trust Center cuando quieras",
        body: "Una página muestra exactamente qué está conectado, qué puede y qué no puede hacer la app y dónde están realmente tus datos; no es una promesa que tengas que creerte.",
      },
    ],
    panel: {
      title: "Trust Center",
      rows: [
        { label: "Gmail", detail: "Solo lectura — no puede enviar" },
        { label: "Google Calendar", detail: "Leer + crear eventos" },
        { label: "Google Drive", detail: "Copias de los extractos que importas" },
        { label: "iMessage", detail: "Se lee solo en local, en tu Mac" },
        { label: "Proveedor de IA", detail: "Tu propia clave — nunca la tenemos" },
      ],
      connected: "Conectado",
      local: "Solo local",
      footer: "Comprobado ahora mismo — puedes mirarlo cuando quieras.",
      items: "5 elementos",
    },
  },
  faq: {
    eyebrow: "Preguntas",
    title: "Preguntas que la gente hace de verdad.",
    items: [
      {
        q: "¿Cuánto cuesta y hay prueba gratuita?",
        a: "La beta se descarga gratis y todos los módulos — Base, Travel y Wealth — están abiertos durante {days} días. Después, cada módulo es una compra única, no una suscripción: Base {base} €, Travel {travel} €, Wealth {wealth} €, o los tres por {bundleBeta} € mientras dure la beta ({bundle} € después). La compra todavía no está abierta, así que hoy no se cobra nada. Cuando terminan los {days} días, un módulo sin licencia se cierra y sus datos se quedan en tu Mac. Si usas un proveedor de IA en la nube, le pagas directamente a él; un modelo local de Ollama no genera ningún coste de IA.",
      },
      {
        q: "¿Necesito mi propia cuenta de Claude, OpenAI o Gemini?",
        a: "No. Puedes usar Ollama en local en tu Mac, sin cuenta en la nube ni clave. Si eliges Anthropic, OpenAI o Gemini, aportas tu propia cuenta y tu clave y pagas a ese proveedor directamente. Algunos proveedores tienen un nivel gratuito: a día de hoy, Google ofrece para Gemini un nivel gratuito con límites diarios, en el que puede usar lo que envías para mejorar sus modelos. Los precios, los niveles gratuitos y las condiciones sobre los datos son del proveedor y cambian; por favor, consulta su web oficial antes de elegir. SafePersonalAI guarda la clave en tu Mac, envía las peticiones directamente al proveedor que elegiste y nunca recibe ni transmite tu clave. Los modelos locales y los de la nube trabajan tras el mismo paso de aprobación.",
      },
      {
        q: "¿No es simplemente ChatGPT o Claude con más pasos?",
        a: "No, y tampoco pretende serlo. Un asistente de chat responde cuando le preguntas. SafePersonalAI lee tu correo nuevo por sí mismo, lo entiende con el modelo que tú elijas, comprueba fechas e importes con reglas fijas y pone cada evento de calendario o tarea propuesta en una lista para que lo apruebes. Sus herramientas son deliberadamente limitadas: no puede enviar correos, pagar ni hacer clic en enlaces.",
      },
      {
        q: "¿Y si lee algo mal o propone algo equivocado?",
        a: "Para eso existe precisamente el paso de aprobación. Ves la propuesta y el mensaje del que procede antes de que pase nada. Una fecha que no está en el texto nunca se inventa, un cambio de calendario requiere una coincidencia exacta con el evento existente, y la app no puede enviar correos, invitar a asistentes, hacer clic en enlaces ni mover dinero.",
      },
      {
        q: "¿Mis datos entrenan el modelo de IA de alguien?",
        a: "SafePersonalAI no entrena ningún modelo ni recibe el contenido de tu correo. Cuando eliges un proveedor de IA en la nube, el contenido necesario va directamente de tu Mac a ese proveedor, según sus condiciones de API. Revisa su política actual de uso y conservación de datos antes de conectarlo.",
      },
      {
        q: "¿Funciona en la nube o en mi equipo?",
        a: "En tu equipo. SafePersonalAI es hoy software para Mac, no una aplicación web alojada: necesita que tu Mac esté encendido para comprobar los mensajes nuevos y ejecutar lo que apruebas. No hay ningún servidor de SafePersonalAI guardando tus datos mientras tanto.",
      },
      {
        q: "¿Qué Mac necesito para SafePersonalAI?",
        a: "La beta actual requiere un Mac con Apple Silicon (M1 o posterior: MacBook Air, MacBook Pro, Mac mini, iMac y Mac Studio con M1/M2/M3/M4). Los Mac con procesador Intel no son compatibles con esta versión. Los permisos los solicita macOS durante la configuración; no hace falta una cuenta de SafePersonalAI.",
      },
      {
        q: "¿Puede enviar un mensaje, invitar a alguien o mover dinero sin mí?",
        a: "No. La app no tiene forma de enviar correos, invitar a asistentes, pagar, cancelar un servicio ni hacer clic en un enlace. Los eventos de calendario se crean sin notificar a nadie, y las funciones de dinero solo registran lo que apruebas y calculan previsiones.",
      },
      {
        q: "¿Qué pasa con mis datos si dejo de usarlo?",
        a: "Se quedan exactamente donde siempre han estado: en tu Mac y en tus propias cuentas de correo y calendario. Puedes retirar el acceso de SafePersonalAI en los ajustes de seguridad de cada cuenta cuando quieras, y ya no le quedará nada a lo que llegar.",
      },
    ],
  },
  footer: {
    tagline: "Entiende, propone y espera tu aprobación. Nunca envía correos, nunca paga.",
    account: "Cuenta",
    privacy: "Privacidad (EN)",
    terms: "Condiciones (EN)",
  },
  shell: {
    allModules: "← Todos los módulos",
    whatYouGet: "Qué incluye",
    ready: "¿Listo para {name}?",
    required: "Requiere Apple Silicon (M1+)",
    download: "Descargar beta",
  },
  wealth: {
    name: "Wealth",
    tagline: "Tu dinero, leído del extracto de cualquier banco. Sin acceso al banco.",
    intro:
      "Wealth lee el extracto que tu banco ya te da — CSV, Excel, PDF, MT940, CAMT, OFX o QIF —, deduce las columnas por sí mismo y te muestra lo que ha leído antes de añadir nada. A partir de ahí tienes gastos por categoría, una previsión de los próximos meses, presupuestos y tus inversiones, todo guardado en tu Mac.",
    steps: [
      {
        title: "Dale un extracto",
        body: "Elige un archivo en la página de Wealth o envíatelo a ti mismo por iMessage. Cualquier banco, cualquier periodo: sirve un año entero de historial. También sirve una captura de pantalla de la app de tu banco.",
      },
      {
        title: "Comprueba lo que ha leído",
        body: "Ves los movimientos, la cuenta a la que pertenecen y cada suposición que ha hecho antes de pulsar Importar. No se añade nada sin ti.",
      },
      {
        title: "Mira adónde va y qué viene",
        body: "Gastos por categoría para cualquier periodo, los pagos periódicos que ha aprendido de tu historial y el saldo previsto para los próximos uno a tres meses.",
      },
    ],
    features: [
      {
        title: "Cualquier banco, cualquier formato",
        body: "CSV, Excel, PDF, MT940, CAMT.053, OFX y QIF. Sin plantillas ni asignación de columnas: deduce columnas, fechas, signos y moneda por sí mismo. Probado con extractos PDF reales de İş Bankası. El PDF debe contener texto; una imagen escaneada se rechaza con un mensaje claro.",
      },
      {
        title: "Capturas de pantalla, leídas en tu Mac",
        body: "Una captura de la app de tu banco o de tu tarjeta se lee en tu Mac con el reconocimiento de texto de Apple y nunca se sube a ningún sitio. Los movimientos van a la lista de revisión; un saldo espera a que lo apliques a una cuenta.",
      },
      {
        title: "Gastos que se entienden",
        body: "Categorías automáticas, un gráfico por categoría y entradas y salidas mes a mes: para un mes, los últimos 3, 6 o 12, o un año entero. Cambia una vez la categoría de un comercio y se queda así.",
      },
      {
        title: "Una previsión a partir de tu propio historial",
        body: "Aprende lo que vuelve cada mes — alquiler, préstamos, seguros, suscripciones, nómina — y lista los próximos uno, dos o tres meses con el saldo de la cuenta tras cada pago. Avisa cuando se prevé que una cuenta quede por debajo de cero, y puedes añadir pagos que tengas previstos.",
      },
      {
        title: "Presupuestos",
        body: "Un límite mensual por categoría, con un mensaje al 80 % y otro al 100 %, no un recordatorio diario.",
      },
      {
        title: "Suscripciones y cargos inusuales",
        body: "El mismo comercio y el mismo importe cada mes se lista como suscripción. El mismo cargo dos veces en un día, o uno muy por encima de lo habitual en ese comercio, se marca como «merece un vistazo».",
      },
      {
        title: "Inversiones en su propia página",
        body: "Acciones, ETF, oro y cripto: cuánto valen hoy, cuánto has aportado y la ganancia o pérdida. La exportación de movimientos de Trade Republic se lee directamente; los precios se actualizan cuando es posible.",
      },
      {
        title: "Préstamos, calculados",
        body: "Introduce tres de estos cuatro datos — importe, tipo, plazo y cuota mensual — y se calcula el cuarto. Ves el capital pendiente, el mes en que terminas de pagar y el coste total.",
      },
      {
        title: "Todas las cuentas en un solo saldo",
        body: "Cuentas corrientes, de ahorro, de tarjeta y de inversión juntas, mostradas en cualquiera de 15 monedas. Cada importe conserva su moneda; la conversión usa los tipos diarios del BCE.",
      },
      {
        title: "Indicaciones fiscales para Alemania",
        body: "Cuando eliges tu país, los movimientos que pueden importar para tu declaración reciben una breve indicación, y con un clic exportas el año para tu asesor fiscal. Solo indicaciones, nunca asesoramiento fiscal.",
      },
    ],
    readsEyebrow: "Qué lee",
    readsTitle: "El extracto que tu banco ya te da.",
    readsBody:
      "Wealth nunca se conecta a tu banco ni te pide la contraseña de la banca online. Le das un archivo de extracto o una captura de pantalla; lo lee en tu Mac, lo coloca en la cuenta correcta y espera a que pulses Importar.",
    investEyebrow: "Inversiones",
    investTitle: "Lo que tienes y lo que vale hoy.",
    investBody:
      "Introduce tú mismo tus acciones, ETF, oro o cripto, o importa la exportación de movimientos de Trade Republic y deja que calcule las participaciones y el coste medio. Una posición sin precio actual cuenta por lo que pagaste, nunca por un valor inventado.",
    provenTitle: "En la beta, todavía a prueba",
    provenBody:
      "Hay tres cosas hechas que se pueden activar, pero que aún no han funcionado el tiempo suficiente con buzones reales como para prometerlas: los extractos recogidos de los correos de tu banco, los correos de aviso del banco que actualizan una cuenta y los gastos de Apple Pay mediante un Atajo de iPhone que se configura una vez. Tómalas como extras. Importar un extracto por tu cuenta no depende de ninguna de ellas.",
    limitsTitle: "Lo que Wealth no hace",
    limitsBody:
      "No inicia sesión en tu banco, no paga nada ni mueve dinero. No lee PDF escaneados que solo contienen imágenes; en su lugar sirve una captura de pantalla. No da asesoramiento fiscal; eso lo decide tu asesor. Y funciona en tu Mac, así que tus cifras no se guardan en ningún servidor nuestro.",
  },
};
