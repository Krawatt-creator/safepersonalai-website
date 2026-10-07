import type { Locale } from "@/i18n/config";

// The home page's "real app" section: four screens of the app itself, filmed
// on a demo household (marketing/app_demo). One caption per screen, in the
// order of the images in AppShowcase.tsx.

export type ShowcaseText = {
  eyebrow: string;
  title: string;
  body: string;
  windowTitle: string;
  note: string;
  steps: { title: string; body: string; alt: string }[];
};

export const showcase: Record<Locale, ShowcaseText> = {
  en: {
    eyebrow: "The real app",
    title: "This is the app itself. Not a mock-up.",
    body: "Four screens of SafePersonalAI as it runs on a Mac, filled with sample data. The app's interface is in English.",
    windowTitle: "SafePersonalAI on your Mac",
    note: "Sample data. Your own figures stay on your Mac.",
    steps: [
      {
        title: "Every account in one balance",
        body: "Checking account, card and investments together. Right below: where this month's money went, by category.",
        alt: "The Wealth page of the app: total balance of three accounts and a chart of this month's spending by category",
      },
      {
        title: "A whole year of spending",
        body: "Month by month and category by category, with your budgets next to the numbers.",
        alt: "The Spending view of the app: a bar for each month of the year and a list of categories with amounts and budgets",
      },
      {
        title: "What the next month will cost",
        body: "The regular payments it learned from your history, and the account balance after each one.",
        alt: "The Forecast view of the app: expected balance over the next month and the list of coming payments",
      },
      {
        title: "Your investments, today",
        body: "What you hold, what you put in, and the gain or loss at today's prices.",
        alt: "The Investments page of the app: total value, gain, and charts by kind and by holding",
      },
    ],
  },
  de: {
    eyebrow: "Die echte App",
    title: "Das ist die App selbst. Keine Attrappe.",
    body: "Vier Ansichten von SafePersonalAI, so wie es auf einem Mac läuft, gefüllt mit Beispieldaten. Die Oberfläche der App ist auf Englisch.",
    windowTitle: "SafePersonalAI auf Ihrem Mac",
    note: "Beispieldaten. Ihre eigenen Zahlen bleiben auf Ihrem Mac.",
    steps: [
      {
        title: "Alle Konten in einem Saldo",
        body: "Girokonto, Karte und Geldanlagen zusammen. Direkt darunter: wohin das Geld in diesem Monat ging, nach Kategorie.",
        alt: "Die Wealth-Seite der App: Gesamtsaldo von drei Konten und ein Diagramm der Ausgaben dieses Monats nach Kategorie",
      },
      {
        title: "Die Ausgaben eines ganzen Jahres",
        body: "Monat für Monat und Kategorie für Kategorie, mit Ihren Budgets neben den Zahlen.",
        alt: "Die Ausgaben-Ansicht der App: ein Balken für jeden Monat des Jahres und eine Liste der Kategorien mit Beträgen und Budgets",
      },
      {
        title: "Was der nächste Monat kostet",
        body: "Die regelmäßigen Zahlungen, die es aus Ihrem Verlauf gelernt hat, und der Kontostand nach jeder einzelnen.",
        alt: "Die Vorschau-Ansicht der App: erwarteter Kontostand im nächsten Monat und die Liste der kommenden Zahlungen",
      },
      {
        title: "Ihre Geldanlagen, heute",
        body: "Was Sie halten, was Sie eingezahlt haben und der Gewinn oder Verlust zu heutigen Kursen.",
        alt: "Die Investments-Seite der App: Gesamtwert, Gewinn und Diagramme nach Art und nach Position",
      },
    ],
  },
  tr: {
    eyebrow: "Gerçek uygulama",
    title: "Bu, uygulamanın kendisi. Maket değil.",
    body: "SafePersonalAI'nin bir Mac'te çalışırken görünen dört ekranı; örnek verilerle doldurulmuştur. Uygulamanın arayüzü İngilizcedir.",
    windowTitle: "Mac'inizde SafePersonalAI",
    note: "Örnek veriler. Kendi rakamlarınız Mac'inizde kalır.",
    steps: [
      {
        title: "Tüm hesaplar tek bakiyede",
        body: "Vadesiz hesap, kart ve yatırımlar bir arada. Hemen altında: bu ayın parası kategorilere göre nereye gitti.",
        alt: "Uygulamanın Wealth sayfası: üç hesabın toplam bakiyesi ve bu ayın harcamalarının kategoriye göre grafiği",
      },
      {
        title: "Bütün bir yılın harcaması",
        body: "Ay ay ve kategori kategori; bütçeleriniz rakamların yanında.",
        alt: "Uygulamanın Harcama görünümü: yılın her ayı için bir çubuk ve tutarları ile bütçeleriyle kategori listesi",
      },
      {
        title: "Gelecek ay ne kadar tutacak",
        body: "Geçmişinizden öğrendiği düzenli ödemeler ve her birinden sonraki hesap bakiyesi.",
        alt: "Uygulamanın Tahmin görünümü: gelecek ay beklenen bakiye ve yaklaşan ödemelerin listesi",
      },
      {
        title: "Yatırımlarınız, bugün",
        body: "Elinizde ne var, ne kadar yatırdınız ve bugünkü fiyatlarla kazanç ya da kayıp.",
        alt: "Uygulamanın Investments sayfası: toplam değer, kazanç ve türe ile varlığa göre grafikler",
      },
    ],
  },
  es: {
    eyebrow: "La app real",
    title: "Esta es la app. No una maqueta.",
    body: "Cuatro pantallas de SafePersonalAI tal como funciona en un Mac, con datos de ejemplo. La interfaz de la app está en inglés.",
    windowTitle: "SafePersonalAI en tu Mac",
    note: "Datos de ejemplo. Tus cifras se quedan en tu Mac.",
    steps: [
      {
        title: "Todas las cuentas en un saldo",
        body: "Cuenta corriente, tarjeta e inversiones juntas. Justo debajo: adónde fue el dinero de este mes, por categoría.",
        alt: "La página Wealth de la app: saldo total de tres cuentas y un gráfico del gasto de este mes por categoría",
      },
      {
        title: "El gasto de todo un año",
        body: "Mes a mes y categoría a categoría, con tus presupuestos junto a las cifras.",
        alt: "La vista de gasto de la app: una barra por cada mes del año y una lista de categorías con importes y presupuestos",
      },
      {
        title: "Lo que costará el próximo mes",
        body: "Los pagos periódicos que aprendió de tu historial y el saldo de la cuenta después de cada uno.",
        alt: "La vista de previsión de la app: saldo esperado durante el próximo mes y la lista de los próximos pagos",
      },
      {
        title: "Tus inversiones, hoy",
        body: "Lo que tienes, lo que aportaste y la ganancia o pérdida a precios de hoy.",
        alt: "La página Investments de la app: valor total, ganancia y gráficos por tipo y por posición",
      },
    ],
  },
  zh: {
    eyebrow: "真实的应用",
    title: "这就是应用本身，不是示意图。",
    body: "SafePersonalAI 在 Mac 上运行时的四个画面，使用的是示例数据。应用界面为英文。",
    windowTitle: "你 Mac 上的 SafePersonalAI",
    note: "示例数据。你自己的数字留在你的 Mac 上。",
    steps: [
      {
        title: "所有账户，一个余额",
        body: "活期账户、信用卡和投资放在一起。正下方：这个月的钱按类别花到了哪里。",
        alt: "应用的 Wealth 页面：三个账户的总余额，以及本月按类别的支出图表",
      },
      {
        title: "一整年的支出",
        body: "逐月、逐类别，预算就在数字旁边。",
        alt: "应用的支出视图：一年中每个月一根柱，以及带金额和预算的类别列表",
      },
      {
        title: "下个月要花多少",
        body: "它从你的历史中学到的定期付款，以及每笔付款之后的账户余额。",
        alt: "应用的预测视图：下个月的预计余额和即将发生的付款列表",
      },
      {
        title: "你的投资，今天的情况",
        body: "你持有什么、投入了多少，以及按今天价格计算的盈亏。",
        alt: "应用的 Investments 页面：总价值、收益，以及按种类和按持仓的图表",
      },
    ],
  },
  fr: {
    eyebrow: "La vraie app",
    title: "C'est l'app elle-même. Pas une maquette.",
    body: "Quatre écrans de SafePersonalAI tel qu'il fonctionne sur un Mac, remplis de données d'exemple. L'interface de l'app est en anglais.",
    windowTitle: "SafePersonalAI sur votre Mac",
    note: "Données d'exemple. Vos propres chiffres restent sur votre Mac.",
    steps: [
      {
        title: "Tous les comptes en un seul solde",
        body: "Compte courant, carte et placements réunis. Juste en dessous : où est parti l'argent de ce mois, par catégorie.",
        alt: "La page Wealth de l'app : solde total de trois comptes et graphique des dépenses du mois par catégorie",
      },
      {
        title: "Les dépenses d'une année entière",
        body: "Mois par mois et catégorie par catégorie, avec vos budgets à côté des chiffres.",
        alt: "La vue Dépenses de l'app : une barre pour chaque mois de l'année et une liste de catégories avec montants et budgets",
      },
      {
        title: "Ce que coûtera le mois prochain",
        body: "Les paiements réguliers appris de votre historique, et le solde du compte après chacun.",
        alt: "La vue Prévision de l'app : solde attendu sur le mois à venir et liste des paiements à venir",
      },
      {
        title: "Vos placements, aujourd'hui",
        body: "Ce que vous détenez, ce que vous avez versé, et le gain ou la perte aux cours du jour.",
        alt: "La page Investments de l'app : valeur totale, gain et graphiques par type et par position",
      },
    ],
  },
};
