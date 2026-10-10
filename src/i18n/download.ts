// The page the download buttons lead to: it starts the download and shows
// how to set the app up. The steps follow the app's real first start
// (unzip, Applications, the macOS question, the yes-or-no setup questions).
// {version} and {days} are filled from lib/offer.ts.
import type { Locale } from "./config";

export type DownloadText = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  fallbackLead: string;
  fallbackLink: string;
  stepsTitle: string;
  steps: { title: string; body: string }[];
  note: string;
  helpLead: string;
  demoLead: string;
  demoLink: string;
};

export const downloadText: Record<Locale, DownloadText> = {
  en: {
    metaTitle: "Download SafePersonalAI for Mac",
    metaDescription: "Your download of SafePersonalAI for Mac, and the four steps to set it up.",
    title: "Your download is starting",
    lead: "SafePersonalAI {version} for Mac is on its way to your Downloads folder.",
    fallbackLead: "Nothing happening?",
    fallbackLink: "Download it directly",
    stepsTitle: "Four steps to set it up",
    steps: [
      {
        title: "Open the download",
        body: "In your Downloads folder, double-click SafePersonalAI-beta.zip. Safari usually unpacks it for you. You get the app “SafePersonalAI”.",
      },
      {
        title: "Move it to Applications",
        body: "Drag SafePersonalAI into your Applications folder.",
      },
      {
        title: "Open it",
        body: "Double-click the app. macOS asks once whether you want to open an app from the internet: choose Open. The app is checked (notarized) by Apple.",
      },
      {
        title: "Answer the setup questions",
        body: "A few yes-or-no questions: which mail to read, whether to use iMessage, where to keep your files. After that SafePersonalAI sits in the menu bar at the top right of your screen (the ✓ icon) and opens your dashboard.",
      },
    ],
    note: "Needs a Mac with Apple silicon (M1 or later). Free for {days} days with every module. No SafePersonalAI account is needed.",
    helpLead: "Stuck? Write to",
    demoLead: "Want to look around first?",
    demoLink: "Try the demo",
  },
  de: {
    metaTitle: "SafePersonalAI für den Mac laden",
    metaDescription: "Ihr Download von SafePersonalAI für den Mac und die vier Schritte zum Einrichten.",
    title: "Ihr Download startet",
    lead: "SafePersonalAI {version} für den Mac wird in Ihren Ordner „Downloads“ geladen.",
    fallbackLead: "Es passiert nichts?",
    fallbackLink: "Direkt herunterladen",
    stepsTitle: "In vier Schritten eingerichtet",
    steps: [
      {
        title: "Download öffnen",
        body: "Doppelklicken Sie im Ordner „Downloads“ auf SafePersonalAI-beta.zip. Safari entpackt die Datei meist von selbst. Sie erhalten die App „SafePersonalAI“.",
      },
      {
        title: "In „Programme“ legen",
        body: "Ziehen Sie SafePersonalAI in den Ordner „Programme“.",
      },
      {
        title: "Öffnen",
        body: "Doppelklicken Sie auf die App. macOS fragt einmal, ob Sie eine App aus dem Internet öffnen möchten: Wählen Sie „Öffnen“. Die App ist von Apple geprüft (notarisiert).",
      },
      {
        title: "Die Fragen zur Einrichtung beantworten",
        body: "Ein paar Ja-oder-Nein-Fragen: welche E-Mails gelesen werden, ob iMessage genutzt wird, wo Ihre Dateien liegen. Danach sitzt SafePersonalAI in der Menüleiste oben rechts (das ✓-Symbol) und öffnet Ihr Dashboard.",
      },
    ],
    note: "Benötigt einen Mac mit Apple-Chip (M1 oder neuer). {days} Tage kostenlos mit allen Modulen. Ein SafePersonalAI-Konto ist nicht nötig.",
    helpLead: "Kommen Sie nicht weiter? Schreiben Sie an",
    demoLead: "Erst einmal umsehen?",
    demoLink: "Demo ausprobieren",
  },
  tr: {
    metaTitle: "SafePersonalAI'yi Mac için indirin",
    metaDescription: "Mac için SafePersonalAI indirmeniz ve kurulumun dört adımı.",
    title: "İndirmeniz başlıyor",
    lead: "Mac için SafePersonalAI {version} İndirilenler klasörünüze iniyor.",
    fallbackLead: "Bir şey olmadı mı?",
    fallbackLink: "Doğrudan indirin",
    stepsTitle: "Dört adımda kurulum",
    steps: [
      {
        title: "İndirilen dosyayı açın",
        body: "İndirilenler klasöründe SafePersonalAI-beta.zip dosyasına çift tıklayın. Safari çoğu zaman dosyayı kendisi açar. “SafePersonalAI” uygulamasını elde edersiniz.",
      },
      {
        title: "Uygulamalar klasörüne taşıyın",
        body: "SafePersonalAI'yi Uygulamalar klasörüne sürükleyin.",
      },
      {
        title: "Açın",
        body: "Uygulamaya çift tıklayın. macOS bir kez, internetten indirilen bir uygulamayı açmak isteyip istemediğinizi sorar: “Aç”ı seçin. Uygulama Apple tarafından denetlenmiştir (notarized).",
      },
      {
        title: "Kurulum sorularını yanıtlayın",
        body: "Birkaç evet-hayır sorusu: hangi e-postalar okunsun, iMessage kullanılsın mı, dosyalarınız nerede dursun. Sonra SafePersonalAI ekranın sağ üstündeki menü çubuğunda durur (✓ simgesi) ve panonuzu açar.",
      },
    ],
    note: "Apple çipli bir Mac gerekir (M1 veya daha yeni). Tüm modüllerle {days} gün ücretsiz. SafePersonalAI hesabı gerekmez.",
    helpLead: "Takıldınız mı? Şu adrese yazın:",
    demoLead: "Önce bir göz atmak ister misiniz?",
    demoLink: "Demoyu dene",
  },
  es: {
    metaTitle: "Descargar SafePersonalAI para Mac",
    metaDescription: "Tu descarga de SafePersonalAI para Mac y los cuatro pasos para configurarlo.",
    title: "Tu descarga está empezando",
    lead: "SafePersonalAI {version} para Mac se está guardando en tu carpeta Descargas.",
    fallbackLead: "¿No pasa nada?",
    fallbackLink: "Descárgalo directamente",
    stepsTitle: "Cuatro pasos para configurarlo",
    steps: [
      {
        title: "Abre la descarga",
        body: "En tu carpeta Descargas, haz doble clic en SafePersonalAI-beta.zip. Safari suele descomprimirlo solo. Obtienes la app «SafePersonalAI».",
      },
      {
        title: "Muévela a Aplicaciones",
        body: "Arrastra SafePersonalAI a tu carpeta Aplicaciones.",
      },
      {
        title: "Ábrela",
        body: "Haz doble clic en la app. macOS pregunta una vez si quieres abrir una app descargada de internet: elige Abrir. La app está revisada (notarizada) por Apple.",
      },
      {
        title: "Responde a las preguntas de configuración",
        body: "Unas pocas preguntas de sí o no: qué correo leer, si usar iMessage, dónde guardar tus archivos. Después SafePersonalAI se queda en la barra de menús, arriba a la derecha (el icono ✓), y abre tu panel.",
      },
    ],
    note: "Necesita un Mac con chip de Apple (M1 o posterior). Gratis durante {days} días con todos los módulos. No hace falta una cuenta de SafePersonalAI.",
    helpLead: "¿Te has atascado? Escribe a",
    demoLead: "¿Prefieres echar un vistazo antes?",
    demoLink: "Probar la demo",
  },
  zh: {
    metaTitle: "下载 Mac 版 SafePersonalAI",
    metaDescription: "您的 Mac 版 SafePersonalAI 下载，以及四个设置步骤。",
    title: "下载即将开始",
    lead: "Mac 版 SafePersonalAI {version} 正在下载到您的“下载”文件夹。",
    fallbackLead: "没有反应？",
    fallbackLink: "直接下载",
    stepsTitle: "四步完成设置",
    steps: [
      {
        title: "打开下载的文件",
        body: "在“下载”文件夹中双击 SafePersonalAI-beta.zip。Safari 通常会自动解压。您会得到“SafePersonalAI”应用。",
      },
      {
        title: "移到“应用程序”",
        body: "把 SafePersonalAI 拖到“应用程序”文件夹。",
      },
      {
        title: "打开应用",
        body: "双击应用。macOS 会询问一次是否打开从互联网下载的应用：请选择“打开”。该应用已通过 Apple 的检查（公证）。",
      },
      {
        title: "回答设置问题",
        body: "几个“是或否”的问题：读取哪些邮件、是否使用 iMessage、文件存放在哪里。之后 SafePersonalAI 会停留在屏幕右上角的菜单栏中（✓ 图标），并打开您的仪表盘。",
      },
    ],
    note: "需要配备 Apple 芯片的 Mac（M1 或更新机型）。{days} 天内免费使用全部模块。无需注册 SafePersonalAI 账户。",
    helpLead: "遇到问题？请写信至",
    demoLead: "想先看看？",
    demoLink: "试用演示",
  },
  fr: {
    metaTitle: "Télécharger SafePersonalAI pour Mac",
    metaDescription: "Votre téléchargement de SafePersonalAI pour Mac et les quatre étapes pour l'installer.",
    title: "Votre téléchargement démarre",
    lead: "SafePersonalAI {version} pour Mac arrive dans votre dossier Téléchargements.",
    fallbackLead: "Rien ne se passe ?",
    fallbackLink: "Téléchargez-le directement",
    stepsTitle: "Quatre étapes pour l'installer",
    steps: [
      {
        title: "Ouvrez le téléchargement",
        body: "Dans votre dossier Téléchargements, double-cliquez sur SafePersonalAI-beta.zip. Safari le décompresse en général tout seul. Vous obtenez l'app « SafePersonalAI ».",
      },
      {
        title: "Placez-la dans Applications",
        body: "Faites glisser SafePersonalAI dans votre dossier Applications.",
      },
      {
        title: "Ouvrez-la",
        body: "Double-cliquez sur l'app. macOS demande une fois si vous voulez ouvrir une app téléchargée sur internet : choisissez Ouvrir. L'app est vérifiée (notarisée) par Apple.",
      },
      {
        title: "Répondez aux questions de configuration",
        body: "Quelques questions par oui ou non : quel courrier lire, utiliser ou non iMessage, où garder vos fichiers. Ensuite SafePersonalAI reste dans la barre des menus, en haut à droite (l'icône ✓), et ouvre votre tableau de bord.",
      },
    ],
    note: "Nécessite un Mac avec puce Apple (M1 ou plus récent). Gratuit pendant {days} jours avec tous les modules. Aucun compte SafePersonalAI n'est nécessaire.",
    helpLead: "Bloqué ? Écrivez à",
    demoLead: "Envie de jeter un œil d'abord ?",
    demoLink: "Essayer la démo",
  },
};
