import type { AboutDictionary } from "./en";

export const esAbout: AboutDictionary = {
  metaTitle: "¿Qué es SafePersonalAI? Un asistente de IA privado para Mac, con un solo pago",
  metaDescription:
    "SafePersonalAI es una app para Mac que lee tu correo y propone eventos de calendario, tareas, planes de viaje y una vista de tu dinero. Funciona en tu Mac, espera tu aprobación y se compra una sola vez, sin suscripción.",
  footerLabel: "¿Qué es SafePersonalAI?",
  answersLabel: "Respuestas (EN)",
  eyebrow: "En palabras sencillas",
  title: "¿Qué es SafePersonalAI?",
  lead: "SafePersonalAI es un asistente de IA privado para Mac. Lee tu correo nuevo y las notas que te envías a ti mismo, propone eventos de calendario, tareas, viajes y registros de dinero, y espera tu aprobación antes de que algo cambie. Funciona en tu propio Mac, puede usar un modelo de IA local y se paga una vez, no cada mes.",
  factsTitle: "Los datos, en breve",
  facts: [
    { label: "Qué es", value: "Una app para Mac. No es un sitio web ni una ventana de chat." },
    {
      label: "Funciona en",
      value: "Macs con chip de Apple (M1 o posterior). No es compatible con Macs Intel ni con Windows.",
    },
    {
      label: "Modelo de IA",
      value:
        "Un modelo local de Ollama, sin cuenta y sin factura de IA, o tu propia clave de Anthropic, OpenAI o Gemini.",
    },
    {
      label: "Lee",
      value: "Gmail, Apple Mail y las notas que te envías a ti mismo por iMessage.",
    },
    {
      label: "Crea",
      value: "Eventos en Google Calendar o en el Calendario de Apple, y tareas con fecha.",
    },
    {
      label: "No puede",
      value:
        "Enviar correo, invitar a personas, abrir enlaces, pagar ni mover dinero. Estas capacidades no están incluidas.",
    },
    {
      label: "Tus datos",
      value:
        "Se quedan en tu Mac. No hay ningún servidor de SafePersonalAI que guarde tu correo, tu calendario o tus datos de dinero.",
    },
    {
      label: "Precio",
      value:
        "Beta gratuita: todos los módulos están abiertos durante {days} días. Después, una compra única: Base {base} €, Travel {travel} €, Wealth {wealth} €, o los tres por {bundleBeta} € mientras dure la beta ({bundle} € después).",
    },
    { label: "Suscripción", value: "Ninguna para la app de Mac." },
    {
      label: "Versión actual",
      value: "{version}, certificada (notarized) por Apple. La interfaz de la app está en inglés.",
    },
  ],
  sections: [
    {
      title: "Qué hace",
      paragraphs: [
        "Base es el fundamento. Lee el correo nuevo, encuentra citas, citas modificadas, plazos y peticiones, y pone cada una en una lista como evento de calendario o tarea propuestos. Tú apruebas, rechazas o pospones. También puedes enviarle notas breves por iMessage y definir tus propias reglas, por ejemplo «cuando un correo contenga esta palabra, propón este evento».",
        "Travel vigila los precios de los vuelos en las rutas que elijas y te avisa cuando un precio baja de tu límite. Busca con fechas flexibles y viajes de varios tramos, muestra si las fechas están libres en tu calendario y arma un viaje a partir de tus correos de reserva.",
        "Wealth lee el extracto que tu banco ya te da —CSV, Excel, PDF, MT940, CAMT, OFX o QIF— sin iniciar sesión en tu banco. Muestra el gasto por categoría, una previsión de los próximos uno a tres meses, presupuestos, las suscripciones que encontró y tus inversiones y préstamos.",
      ],
    },
    {
      title: "Cómo funciona",
      paragraphs: [
        "Trabaja en tres pasos. Primero, el modelo de IA lee un mensaje y deduce qué significa. Después, el resultado propuesto aparece en una lista, junto con el mensaje del que procede. Solo cuando lo apruebas la app crea el evento o la tarea.",
        "Las fechas y los importes se comprueban con reglas fijas, no solo con el modelo. Nunca se inventa una fecha que no esté en el texto.",
      ],
    },
    {
      title: "En qué se diferencia de un asistente de chat",
      paragraphs: [
        "Un asistente de chat como ChatGPT o Claude responde cuando le preguntas algo. SafePersonalAI trabaja por su cuenta en segundo plano: lee el correo que llega y te prepara el siguiente paso.",
        "Además, está mucho más limitado a propósito. Tiene pocas capacidades, y enviar, pagar y abrir enlaces no están entre ellas. Aprobar una propuesta tampoco las activa.",
      ],
    },
    {
      title: "Adónde van tus datos",
      paragraphs: [
        "Con un modelo local de Ollama, el texto de tu correo se procesa en tu Mac y no va a ningún otro sitio.",
        "Si eliges un proveedor en la nube, el texto necesario para una petición va directamente de tu Mac a ese proveedor, con tu propia cuenta y bajo sus condiciones. No pasa por un servidor de SafePersonalAI. Tu clave se guarda en tu Mac.",
      ],
    },
    {
      title: "Cuánto cuesta",
      paragraphs: [
        "La beta se descarga gratis y todos los módulos están abiertos durante {days} días. Después, cada módulo se compra una vez: Base {base} €, Travel {travel} €, Wealth {wealth} €. Los tres juntos cuestan {bundleBeta} € mientras dure la beta y {bundle} € después. La compra aún no está abierta, así que hoy no se cobra nada.",
        "Un módulo que no compres se cierra al terminar los {days} días. Sus datos se quedan en tu Mac y vuelven cuando añades el módulo.",
      ],
    },
  ],
  forTitle: "Para quién es",
  forItems: [
    "Para quien pierde fechas y plazos que quedaron enterrados en el correo.",
    "Para quien no quiere dar a un servicio de IA el permiso de enviar correo o gastar dinero.",
    "Para quien prefiere comprar el software una vez en lugar de pagar cada mes.",
    "Para quien quiere ver sus gastos sin dar a una app el acceso a su banco.",
  ],
  notForTitle: "Para quién no es",
  notForItems: [
    "Usas Windows o un Mac con procesador Intel.",
    "Quieres un asistente que responda y envíe correos por ti.",
    "Quieres que trabaje con el Mac apagado. Funciona en tu Mac, así que el Mac debe estar encendido.",
    "Quieres que tu banco se conecte automáticamente. Wealth lee los archivos de extracto que tú le das.",
  ],
  linksTitle: "Sigue leyendo",
  download: "Descargar la beta gratuita",
  pricing: "Ver los precios",
};
