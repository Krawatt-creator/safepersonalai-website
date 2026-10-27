// The page the download buttons lead to: it starts the download and shows
// how to set the app up. The steps follow the app's real first start
// (open the .dmg, drag to Applications, the macOS question, the yes-or-no setup questions).
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
        body: "In your Downloads folder, double-click SafePersonalAI.dmg. A window opens with the app “SafePersonalAI” and your Applications folder.",
      },
      {
        title: "Move it to Applications",
        body: "In that window, drag SafePersonalAI onto the Applications folder. Copying takes a minute, because the AI comes with the app.",
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
    note: "The download is about 5 GB because the AI runs on your Mac and comes with it; keep about 12 GB free while installing, then you can delete the .dmg. Needs a Mac with Apple silicon (M1 or later) and macOS 26 or newer; 16 GB memory recommended for the built-in AI. Free for {days} days with every module. No SafePersonalAI account is needed.",
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
        body: "Doppelklicken Sie im Ordner „Downloads“ auf SafePersonalAI.dmg. Ein Fenster mit der App „SafePersonalAI“ und Ihrem Ordner „Programme“ öffnet sich.",
      },
      {
        title: "In „Programme“ legen",
        body: "Ziehen Sie in diesem Fenster SafePersonalAI auf den Ordner „Programme“. Das Kopieren dauert etwa eine Minute, weil die KI mit der App kommt.",
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
    note: "Der Download ist etwa 5 GB groß, weil die KI auf Ihrem Mac läuft und mitgeliefert wird; halten Sie beim Installieren etwa 12 GB frei, danach können Sie die .dmg löschen. Benötigt einen Mac mit Apple-Chip (M1 oder neuer) und macOS 26 oder neuer; für die eingebaute KI werden 16 GB Arbeitsspeicher empfohlen. {days} Tage kostenlos mit allen Modulen. Ein SafePersonalAI-Konto ist nicht nötig.",
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
        body: "İndirilenler klasöründe SafePersonalAI.dmg dosyasına çift tıklayın. “SafePersonalAI” uygulamasını ve Uygulamalar klasörünüzü gösteren bir pencere açılır.",
      },
      {
        title: "Uygulamalar klasörüne taşıyın",
        body: "Bu pencerede SafePersonalAI'yi Uygulamalar klasörünün üzerine sürükleyin. Yapay zekâ uygulamayla birlikte geldiği için kopyalama yaklaşık bir dakika sürer.",
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
    note: "Yapay zekâ Mac'inizde çalıştığı ve uygulamayla birlikte geldiği için indirme yaklaşık 5 GB'tır; kurulum sırasında yaklaşık 12 GB boş yer bırakın, sonra .dmg dosyasını silebilirsiniz. Apple çipli bir Mac gerekir (M1 veya daha yeni) ve macOS 26 veya üstü; yerleşik yapay zekâ için 16 GB bellek önerilir. Tüm modüllerle {days} gün ücretsiz. SafePersonalAI hesabı gerekmez.",
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
        body: "En tu carpeta Descargas, haz doble clic en SafePersonalAI.dmg. Se abre una ventana con la app «SafePersonalAI» y tu carpeta Aplicaciones.",
      },
      {
        title: "Muévela a Aplicaciones",
        body: "En esa ventana, arrastra SafePersonalAI sobre la carpeta Aplicaciones. Copiarla tarda un minuto, porque la IA viene con la app.",
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
    note: "La descarga ocupa unos 5 GB porque la IA funciona en tu Mac y viene incluida; deja unos 12 GB libres durante la instalación y después puedes borrar el .dmg. Necesita un Mac con chip de Apple (M1 o posterior) y macOS 26 o posterior; se recomiendan 16 GB de memoria para la IA integrada. Gratis durante {days} días con todos los módulos. No hace falta una cuenta de SafePersonalAI.",
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
        body: "在“下载”文件夹中双击 SafePersonalAI.dmg。会打开一个窗口，里面有“SafePersonalAI”应用和您的“应用程序”文件夹。",
      },
      {
        title: "移到“应用程序”",
        body: "在该窗口中，把 SafePersonalAI 拖到“应用程序”文件夹上。由于 AI 随应用一起提供，复制大约需要一分钟。",
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
    note: "由于 AI 在您的 Mac 上运行并随应用一起提供，下载大小约为 5 GB；安装时请预留约 12 GB 可用空间，之后可以删除 .dmg 文件。需要配备 Apple 芯片的 Mac（M1 或更新机型）和 macOS 26 或更新版本；内置 AI 建议使用 16 GB 内存。{days} 天内免费使用全部模块。无需注册 SafePersonalAI 账户。",
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
        body: "Dans votre dossier Téléchargements, double-cliquez sur SafePersonalAI.dmg. Une fenêtre s'ouvre avec l'app « SafePersonalAI » et votre dossier Applications.",
      },
      {
        title: "Placez-la dans Applications",
        body: "Dans cette fenêtre, faites glisser SafePersonalAI sur le dossier Applications. La copie prend une minute, car l'IA est fournie avec l'app.",
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
    note: "Le téléchargement fait environ 5 Go, car l'IA fonctionne sur votre Mac et est fournie avec l'app ; gardez environ 12 Go libres pendant l'installation, puis vous pouvez supprimer le .dmg. Nécessite un Mac avec puce Apple (M1 ou plus récent) et macOS 26 ou plus récent ; 16 Go de mémoire recommandés pour l'IA intégrée. Gratuit pendant {days} jours avec tous les modules. Aucun compte SafePersonalAI n'est nécessaire.",
    helpLead: "Bloqué ? Écrivez à",
    demoLead: "Envie de jeter un œil d'abord ?",
    demoLink: "Essayer la démo",
  },
};
