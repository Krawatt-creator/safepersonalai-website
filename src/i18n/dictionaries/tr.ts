import type { Dictionary } from "./en";

// Turkish. Same shape as en.ts. Not yet checked by a native-speaking editor.
export const tr: Dictionary = {
  meta: {
    homeTitle: "SafePersonalAI — Mac için özel yapay zekâ asistanı, abonelik yok",
    homeDescription:
      "SafePersonalAI Mac'inizde çalışır, e-postalarınızı onayınızı bekleyen görevlere ve takvim kayıtlarına dönüştürür; yerel Ollama ile ya da kendi yapay zekâ sağlayıcı hesabınızla çalışır.",
    wealthTitle: "Wealth — her bankanın ekstresi Mac'inizde, banka girişi olmadan",
    wealthDescription:
      "Herhangi bir bankanın ekstresini Mac'inizde okuyun — CSV, Excel, PDF, MT940, CAMT, OFX veya QIF — bankanıza giriş yapmadan. Kategoriye göre harcamalar, önümüzdeki ayların tahmini, bütçeler ve yatırımlarınız.",
    appDescription:
      "E-postalarınızı okuyup takvim kayıtlarına, yapılacaklara, seyahat planlarına ve paranızın net bir görünümüne dönüştüren bir Mac uygulaması. Önerdiği her şey onayınızı bekler. Asla e-posta göndermez, ödeme yapmaz, bağlantılara tıklamaz. Mac'inizde yerel bir Ollama modeliyle ya da kendi yapay zekâ sağlayıcı anahtarınızla çalışır.",
    offerDescription: "Ücretsiz beta indirmesi. Tüm modüller (Base, Travel, Wealth) {days} gün boyunca açık.",
  },
  nav: {
    useCases: "Kullanım örnekleri",
    modules: "Modüller",
    howItWorks: "Nasıl çalışır",
    pricing: "Fiyatlar",
    faq: "SSS",
    account: "Hesap",
    download: "Betayı indir",
    appleSilicon: "Apple Silicon (M1+)",
    appleSiliconRequired: "Apple Silicon (M1+) gerekir",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    language: "Dil",
  },
  offer: {
    trialLine: "Beta süresince ücretsiz: tüm modüller {days} gün boyunca açık.",
    priceLine:
      "Sonrasında tek seferlik satın alma: Base {base} €, Travel {travel} €, Wealth {wealth} € — ya da üçü birlikte {bundle} €. Satın alma yakında açılıyor.",
    priceNote: "tek seferlik · betada {days} gün ücretsiz",
    downloadNote:
      "{days} gün ücretsiz, tüm modüller dahil · Apple tarafından onaylı (notarized) · Apple Silicon (M1 veya üstü)",
  },
  hero: {
    badge: "Önce soran yapay zekâ asistanı · ücretsiz beta",
    titleLine1: "Mac'inizde yaşayan özel bir yapay zekâ asistanı.",
    titleLine2: "Siz evet demeden hiçbir şey olmaz.",
    body: "SafePersonalAI e-postalarınızı, mesajlarınızı ve hesap özetlerinizi kendi Mac'inizde okur; yapılacakları, takvim kayıtlarını ve para özetini hazırlar. Her birini siz onaylarsınız. Verileriniz bize asla gönderilmez: Mac'inizde kalır, yapay zekâ da orada Ollama ile ya da kendi yapay zekâ sağlayıcı hesabınız üzerinden çalışır. Bir kez ödeyin, abonelik yok.",
    ctaDownload: "Ücretsiz betayı indir",
    ctaUseCases: "Gerçek kullanım örneklerine bak",
    finePrint:
      "Apple Silicon (M1 veya üstü) Mac'ler için. Bulut hesabı olmadan yerel bir Ollama modeli ya da kendi Anthropic, OpenAI veya Gemini anahtarınızı kullanın.",
  },
  panel: {
    title: "Bekleyen işlemler",
    preview: "Örnek görünüm",
    rows: [
      {
        title: "Yapılacak: imzalı formu cumaya kadar gönder",
        detail: "Okul idaresinden gelen bir e-postada bulundu, son tarihiyle",
      },
      {
        title: "“Dişçi — 3 Eyl, 15:00” takvime eklensin",
        detail: "Kendinize gönderdiğiniz bir iMessage'dan okundu",
      },
      {
        title: "Elektrik faturasını takip et — 84,00 €, son ödeme 28 Eki",
        detail: "Fatura e-postasından okundu; son ödemeden önce hatırlatılır",
      },
    ],
    approve: "Onayla",
    reject: "Reddet",
    approved: "✓ Onaylandı",
    rejected: "✕ Reddedildi",
    allDone: "Hepsi tamam — sizi bekleyen bir şey yok.",
    replay: "↺ Gösterimi tekrar oynat",
    footer: "Bunlar onayınızı bekler. Asla e-posta göndermez, ödeme yapmaz.",
    waiting: "{n} bekliyor",
  },
  laptop: {
    eyebrow: "Sessizce, arka planda",
    title: "Yalnızca size gösterecek bir şey olduğunda uyanır.",
    body: "Dönen bir simge yok, başında beklemeniz gereken bir panel yok — yalnızca bir şey gerçekten sizin kararınızı beklediğinde yanan sakin bir ışık.",
  },
  ownership: {
    eyebrow: "Kiralamayın, sahip olun",
    title: "Kendi özel asistanınız. Bir abonelik daha değil.",
    intro:
      "SafePersonalAI, masanızda zaten duran Mac'i özel bir otomasyon katmanına dönüştürür. Çalışma verileriniz yerelde kalır, yapay zekâ sağlayıcınızla ilişki sizin olarak kalır ve satış koşulları satın almadan önce görünür durumdadır.",
    points: [
      {
        title: "Zaten sahip olduğunuz Apple dünyası için yapıldı",
        body: "Yeni donanım yok, kiralık sunucu yok, hayatınızı barındıran üçüncü bir şirket yok. Zaten sahip olduğunuz makinede, kendi Mac'inizde sessizce çalışır.",
      },
      {
        title: "Yapay zekâ sağlayıcınız, sizin sınırınız",
        body: "Ollama'yı hesap açmadan yerelde kullanın ya da desteklenen bir bulut sağlayıcısını kendi anahtarınızla bağlayıp ücreti doğrudan ona ödeyin. Kimlik bilgileri Mac'inizde kalır; SafePersonalAI yapay zekâ maliyetini ikinci bir aboneliğin içine gizlemez ve sessizce bizim ödediğimiz bir modele geçmez.",
      },
      {
        title: "Sahip olduğunuz bir yazılım olarak tasarlandı",
        body: "Her modül, kalıcı bir aylık kira değil, sürüme bağlı tek seferlik bir lisanstır.",
      },
    ],
    counter: {
      typical: "Tipik bir yapay zekâ aboneliği",
      running: "Ayda ${cost} × {n} ay — ve saymaya devam ediyor.",
      runningOne: "Ayda ${cost} × 1 ay — ve saymaya devam ediyor.",
      perMonth: "/ay",
      ours: "Modül başına tek seferlik. Sizin Mac'iniz, sizin anahtarınız — platform ücreti yok.",
    },
  },
  boundary: {
    eyebrow: "Sınır",
    title: "Düşünmek ile yapmak arasında kesin bir çizgi.",
    intro:
      "Çoğu yapay zekâ aracı anlamayı ve eylemi tek adımda birleştirir. Biz birleştirmiyoruz. SafePersonalAI'ın e-postalarınızdan çıkardığı şey, siz onaylayana kadar bir öneridir. Yalnızca kendi bankanızın bildirdikleri ve birkaç hatırlatma doğrudan eklenir — işaretlenir ve tek tıkla geri alınır.",
    steps: [
      {
        title: "Yapay zekâ anlar",
        body: "Gelen e-postayı güvenilmeyen veri olarak okur ve bir öneri çıkarır: bir görev, bir takvim kaydı, bir yenileme hatırlatması ya da desteklenen bir modül işlemi.",
      },
      {
        title: "Siz onaylarsınız",
        body: "Her öneri tek bir inceleme listesine düşer. Onaylayabilir, reddedebilir, erteleyebilir ya da eksik bilgiyi tamamlayabilirsiniz. Belirsizlik asla izin anlamına gelmez.",
      },
      {
        title: "Yazılım uygular",
        body: "Yalnızca onaylanan alanlar uygulanır. Takvim kayıtları kimseyi davet edemez; finans özellikleri kaydeder ve tahmin yapar ama para hareket ettiremez.",
      },
    ],
  },
  useCases: {
    eyebrow: "Ne yapar",
    title: "Gündelik işlerle başlayın. Yalnızca ihtiyacınız olanı ekleyin.",
    intro:
      "Base, gündelik işlerin temelidir. Travel ve Wealth aynı özel asistanı genişletir; geçmişiniz taşınmaz, yeni bir hesap gerekmez.",
    exploreAll: "Tüm kullanım örneklerine bak →",
    tabsLabel: "Ürün modülleri",
    queueTitle: "Tek inceleme listesi",
    queueBody: "Kurulu her modül aynı görünür onay adımını kullanır. Gizli bir otomasyon katmanı yoktur.",
    practicalUses: "{n} kullanım",
    note: "Her kartın arkasındaki ayrıntılı örnekler şimdilik İngilizcedir.",
    modules: {
      operational: {
        name: "Base",
        label: "Temel modül",
        description: "Gündelik gelen kutusu, takvim, görevler ve kendi kurallarınız.",
      },
      travel: {
        name: "Travel",
        label: "Ek modül",
        description: "Rezervasyonlar, uçuş fiyatı takibi ve takviminize bakan seyahat planlaması.",
      },
      wealth: {
        name: "Wealth",
        label: "Ek modül",
        description: "Her bankanın ekstresi, harcamalar, tahmin, bütçeler ve yatırımlar.",
      },
    },
    topics: {
      "email-to-task": {
        title: "E-posta → görev",
        friction: "Önemli bir istek artık yeni e-postaların altında kaybolmaz.",
      },
      "calendar-events": {
        title: "Takvim kayıtları",
        friction: "Yalnızca bir tarih yazmak için takvimi açmak yok.",
      },
      "todos-reminders": {
        title: "Yapılacaklar ve hatırlatmalar",
        friction: "Aklımda tutarım dediğiniz son tarih artık sessizce kaçmaz.",
      },
      "bill-invoice-tracking": {
        title: "Fatura takibi",
        friction: "Son ödeme gününden bir gece önce gelen kutusunu karıştırmak yok.",
      },
      "custom-rules": {
        title: "Kendi basit kurallarınız",
        friction: "Alışkanlıklarınızı başkasının otomasyon şablonuna uydurmak zorunda değilsiniz.",
      },
      "booking-to-itinerary": {
        title: "Rezervasyon → seyahat planı",
        friction: "Uçuş ve otel bilgilerini üç ayrı yere kopyalamak yok.",
      },
      "flight-deal-tracking": {
        title: "Uçuş fiyatı takibi",
        friction: "Alışkanlıktan fiyat sayfasını yenilemek yok.",
      },
      "calendar-aware-travel": {
        title: "Takvime bakan seyahat",
        friction: "İyi bir fiyat bulup sonra tarihlerin uymadığını fark etmek yok.",
      },
      "cashflow-forecast": {
        title: "Nakit akışı tahmini",
        friction: "Paranın azaldığını iş işten geçtikten sonra öğrenmek yok.",
      },
      "recurring-cost-watch": {
        title: "Düzenli giderlerin takibi",
        friction: "Abonelikler artık fark edilmeden arka planda sürüp gitmez.",
      },
      "portfolio-import": {
        title: "Portföy içe aktarma",
        friction: "Aracı kurum uygulamasına her şeyden ayrı bakmak yok.",
      },
    },
  },
  pricing: {
    eyebrow: "SafePersonalAI v1",
    title: "Tek kurulum. {days} gün ücretsiz. Sonra bir kez ödeyin.",
    intro:
      "Betayı indirin; tüm modüller {days} gün boyunca ücretsiz açık. Sonrasında her modül tek seferlik bir satın almadır — Mac uygulamasında abonelik yoktur. Satın almadığınız modül kapanır; verileri Mac'inizde kalır ve modülü eklediğinizde geri gelir. Satın alma yakında açılıyor; bugün hiçbir ücret alınmıyor.",
    bundleLead: "Üçü birlikte:",
    bundleStrong: "tek seferlik {bundle} €",
    bundleRest: ". Satın alma yakında açılıyor — o zamana kadar ödenecek bir şey yok.",
    learnMore: "Daha fazla bilgi →",
    download: "Betayı indir",
    included: "{days} günlük denemeye dahil",
    modules: {
      operational: {
        name: "Base",
        tagline: "Gündelik işlerin temeli: gelen kutusu, takvim, iMessage ve yapılacaklar.",
        features: [
          "Gelen kutunuzu anlar, görevleri onayınıza hazırlar",
          "E-postadan takvim kayıtları, kimseye davet göndermeden",
          "Son tarihli yapılacaklar ve hatırlatmalar",
          "Tek bir bekleyen işlemler listesi — onaylayın, erteleyin ya da reddedin",
          "Mac'inizde yerel Ollama ile ya da kendi bulut anahtarınızla çalışır",
        ],
      },
      travel: {
        name: "Travel",
        tagline: "Kendi arama kotasını asla aşmayan uçuş fiyatı takibi.",
        features: [
          "Her rota için günlük fiyat kontrolü, arama kotanızın içinde",
          "Yalnızca fiyat gerçekten belirlediğiniz sınırın altına indiğinde bildirim",
          "Esnek tarihler ve çok bacaklı uçuşlar",
          "Seyahat tarihlerinin takviminizde boş olup olmadığını gösterir",
        ],
      },
      wealth: {
        name: "Wealth",
        tagline: "Paranız, her bankanın ekstresinden okunur. Banka girişi yok.",
        features: [
          "Her bankanın ekstresi: CSV, Excel, PDF, MT940, CAMT, OFX, QIF",
          "Kategoriye göre harcamalar, istediğiniz dönem için",
          "Önümüzdeki 1–3 ayın tahmini, eksiye düşme uyarısıyla",
          "Bütçeler, bulunan abonelikler, olağandışı harcamalar işaretlenir",
          "Yatırımlar ve krediler, Trade Republic içe aktarımıyla",
        ],
      },
    },
  },
  trust: {
    eyebrow: "Güven",
    title: "Gelen kutusunu yapay zekâya emanet etmeyenler için yapıldı.",
    points: [
      {
        title: "Verileriniz Mac'inizde kalır",
        body: "İşlemler, görevler, ayarlar ve modül verileri Mac'inizde kalır. Bir bulut yapay zekâ sağlayıcısına giden içerik, doğrudan sizin seçtiğiniz sağlayıcı hesabı üzerinden gider; SafePersonalAI bu içeriği almaz.",
      },
      {
        title: "Yerel çalışın ya da kendi anahtarınızı getirin",
        body: "Ollama, hesap ya da anahtar olmadan tümüyle Mac'inizde çalışabilir. Bulut seçenekleri sizin sağlayıcı hesabınızı ve anahtarınızı kullanır; SafePersonalAI anahtarı yerelde saklar ve istekleri doğrudan seçtiğiniz sağlayıcıya gönderir, asla bir SafePersonalAI sunucusu üzerinden değil.",
      },
      {
        title: "Tehlikeli yetenekler hiç yok",
        body: "Uygulama e-posta gönderemez, kimseyi davet edemez, bağlantılara tıklayamaz, bir hizmeti iptal edemez ve para hareket ettiremez. Onay vermeniz de bu işlemlere gizli bir yol açmaz.",
      },
      {
        title: "Trust Center'a istediğiniz zaman bakın",
        body: "Tek bir sayfa neyin bağlı olduğunu, uygulamanın neyi yapıp neyi yapamadığını ve verilerinizin gerçekte nerede durduğunu gösterir — inanmak zorunda kaldığınız bir söz değil.",
      },
    ],
    panel: {
      title: "Trust Center",
      rows: [
        { label: "Gmail", detail: "Yalnızca okur — gönderemez" },
        { label: "Google Takvim", detail: "Okur + kayıt oluşturur" },
        { label: "Google Drive", detail: "İçe aktardığınız ekstrelerin kopyaları" },
        { label: "iMessage", detail: "Yalnızca Mac'inizde, yerelde okunur" },
        { label: "Yapay zekâ sağlayıcısı", detail: "Kendi anahtarınız — bizimle paylaşılmaz" },
      ],
      connected: "Bağlı",
      local: "Yalnızca yerel",
      footer: "Az önce kontrol edildi — istediğiniz zaman bakabilirsiniz.",
      items: "5 öğe",
    },
  },
  faq: {
    eyebrow: "SSS",
    title: "İnsanların gerçekten sorduğu sorular.",
    items: [
      {
        q: "Fiyatı nedir, ücretsiz deneme var mı?",
        a: "Beta ücretsiz indirilir ve tüm modüller — Base, Travel ve Wealth — {days} gün boyunca açıktır. Sonrasında her modül abonelik değil, tek seferlik bir satın almadır: Base {base} €, Travel {travel} €, Wealth {wealth} € ya da üçü birlikte {bundle} €. Satın alma henüz açık değil, yani bugün hiçbir ücret alınmıyor. {days} gün dolduğunda lisansı olmayan modül kapanır; verileri Mac'inizde kalır. Bir bulut yapay zekâ sağlayıcısı kullanıyorsanız ücretini doğrudan ona ödersiniz; yerel bir Ollama modelinin yapay zekâ faturası yoktur.",
      },
      {
        q: "Kendi Claude, OpenAI ya da Gemini hesabım olması gerekiyor mu?",
        a: "Hayır. Ollama'yı Mac'inizde yerel olarak, bulut hesabı ya da anahtar olmadan kullanabilirsiniz. Anthropic, OpenAI ya da Gemini'yi seçerseniz kendi hesabınızı ve anahtarınızı getirir, ücreti doğrudan o sağlayıcıya ödersiniz. Bazı sağlayıcıların ücretsiz bir kullanım hakkı vardır: şu an için Google, Gemini'de günlük sınırları olan ücretsiz bir katman sunuyor; bu katmanda gönderdiklerinizi modellerini geliştirmek için kullanabilir. Fiyatlar, ücretsiz haklar ve veri koşulları sağlayıcıya aittir ve değişir; lütfen seçim yapmadan önce sağlayıcının resmî sitesine bakın. SafePersonalAI anahtarı Mac'inizde saklar, istekleri doğrudan seçtiğiniz sağlayıcıya gönderir ve anahtarınızı asla almaz ya da başkasına iletmez. Yerel ve bulut modelleri aynı onay adımının arkasında çalışır.",
      },
      {
        q: "Bu, fazladan adımlarla ChatGPT ya da Claude değil mi?",
        a: "Hayır — öyle olmaya da çalışmıyor. Bir sohbet asistanı siz sorduğunuzda yanıt verir. SafePersonalAI yeni e-postalarınızı kendiliğinden okur, seçtiğiniz bir modelle anlar, tarihleri ve tutarları sabit kurallarla denetler ve önerdiği her takvim kaydını ya da görevi onaylamanız için bir listeye koyar. Araçları bilerek dardır: e-posta gönderemez, ödeme yapamaz, bağlantılara tıklayamaz.",
      },
      {
        q: "Ya bir şeyi yanlış okursa ya da yanlış şeyi önerirse?",
        a: "Onay adımı tam da bunun için var. Herhangi bir şey olmadan önce öneriyi ve kaynaklandığı mesajı görürsünüz. Metinde olmayan bir tarih asla uydurulmaz, bir takvim değişikliği mevcut kayıtla tam eşleşme gerektirir ve uygulama e-posta gönderemez, kimseyi davet edemez, bağlantılara tıklayamaz, para hareket ettiremez.",
      },
      {
        q: "Verilerim birinin yapay zekâ modelini eğitmek için kullanılıyor mu?",
        a: "SafePersonalAI model eğitmez ve gelen kutunuzun içeriğini almaz. Bir bulut yapay zekâ sağlayıcısı seçtiğinizde, gerekli içerik Mac'inizden doğrudan o sağlayıcıya, onun API koşulları altında gider. Bağlamadan önce sağlayıcının güncel veri kullanımı ve saklama politikasını inceleyin.",
      },
      {
        q: "Bulutta mı çalışıyor, benim makinemde mi?",
        a: "Sizin makinenizde. SafePersonalAI bugün bir Mac yazılımıdır, barındırılan bir web uygulaması değil — yeni mesajları kontrol etmek ve onaylarınızı uygulamak için Mac'inizin açık olması gerekir. Bu sırada verilerinizi tutan bir SafePersonalAI sunucusu yoktur.",
      },
      {
        q: "SafePersonalAI için hangi Mac gerekiyor?",
        a: "Güncel beta, Apple Silicon'lu bir Mac gerektirir (M1 veya üstü — M1/M2/M3/M4 işlemcili MacBook Air, MacBook Pro, Mac mini, iMac ve Mac Studio dahil). Intel işlemcili Mac'ler bu sürümde desteklenmez. İzin istekleri kurulum sırasında macOS tarafından gösterilir; ayrı bir SafePersonalAI hesabı gerekmez.",
      },
      {
        q: "Bensiz mesaj gönderebilir, birini davet edebilir ya da para hareket ettirebilir mi?",
        a: "Hayır. Uygulamanın e-posta gönderme, katılımcı davet etme, ödeme yapma, bir hizmeti iptal etme ya da bağlantıya tıklama imkânı yoktur. Takvim kayıtları başkalarına bildirim gitmeden oluşturulur; para özellikleri yalnızca onayladıklarınızı kaydeder ve tahmin hesaplar.",
      },
      {
        q: "Kullanmayı bırakırsam verilerime ne olur?",
        a: "Her zaman oldukları yerde kalır — Mac'inizde ve kendi e-posta ve takvim hesaplarınızda. SafePersonalAI'ın erişimini her hesabın güvenlik ayarlarından istediğiniz zaman kaldırabilirsiniz; sonrasında ulaşabileceği hiçbir şey kalmaz.",
      },
    ],
  },
  footer: {
    tagline: "Anlar, önerir, onayınızı bekler. Asla e-posta göndermez, asla ödeme yapmaz.",
    account: "Hesap",
    privacy: "Gizlilik (EN)",
    terms: "Koşullar (EN)",
  },
  shell: {
    allModules: "← Tüm modüller",
    whatYouGet: "Neler sunar",
    ready: "{name} için hazır mısınız?",
    required: "Apple Silicon (M1+) gerekir",
    download: "Betayı indir",
  },
  wealth: {
    name: "Wealth",
    tagline: "Paranız, her bankanın ekstresinden okunur. Banka girişi yok.",
    intro:
      "Wealth, bankanızın size zaten verdiği ekstreyi okur — CSV, Excel, PDF, MT940, CAMT, OFX veya QIF —, sütunları kendisi çözer ve herhangi bir şey eklenmeden önce ne okuduğunu gösterir. Buradan kategoriye göre harcamalar, önümüzdeki ayların tahmini, bütçeler ve yatırımlarınız çıkar; hepsi Mac'inizde kalır.",
    steps: [
      {
        title: "Ona bir ekstre verin",
        body: "Wealth sayfasında bir dosya seçin ya da iMessage ile kendinize gönderin. Her banka, her dönem — bütün bir yılın geçmişi de olur. Bankacılık uygulamanızın ekran görüntüsü de işe yarar.",
      },
      {
        title: "Ne okuduğunu kontrol edin",
        body: "İçe Aktar'a tıklamadan önce işlemleri, ait oldukları hesabı ve yaptığı her varsayımı görürsünüz. Siz olmadan hiçbir şey eklenmez.",
      },
      {
        title: "Paranın nereye gittiğini ve neyin geldiğini görün",
        body: "İstediğiniz dönem için kategoriye göre harcamalar, geçmişinizden öğrendiği düzenli ödemeler ve önümüzdeki bir ila üç ay için beklenen bakiye.",
      },
    ],
    features: [
      {
        title: "Her banka, her biçim",
        body: "CSV, Excel, PDF, MT940, CAMT.053, OFX ve QIF. Şablon yok, sütun eşleştirme yok: sütunları, tarihleri, işaretleri ve para birimini kendisi çözer. Gerçek İş Bankası PDF ekstreleriyle test edildi. PDF metin içermelidir; taranmış bir görüntü açık bir mesajla reddedilir.",
      },
      {
        title: "Ekran görüntüleri Mac'inizde okunur",
        body: "Bankacılık ya da kart uygulamanızın ekran görüntüsü, Mac'inizde Apple'ın kendi metin tanımasıyla okunur ve asla yüklenmez. İşlemler inceleme listesine gider; bakiye, siz bir hesaba uygulayana kadar bekler.",
      },
      {
        title: "Okunabilir harcamalar",
        body: "Otomatik kategoriler, kategoriye göre grafik ve ay ay gelen ve giden para — bir ay, son 3, 6 ya da 12 ay ya da bütün bir yıl için. Bir satıcının kategorisini bir kez değiştirin, öyle kalır.",
      },
      {
        title: "Kendi geçmişinizden bir tahmin",
        body: "Her ay tekrar edenleri öğrenir — kira, krediler, sigorta, abonelikler, maaş — ve önümüzdeki bir, iki ya da üç ayı her ödemeden sonraki hesap bakiyesiyle listeler. Bir hesabın eksiye düşmesi bekleniyorsa uyarır; planladığınız ödemeleri de ekleyebilirsiniz.",
      },
      {
        title: "Bütçeler",
        body: "Kategori başına aylık limit; %80'de bir, %100'de bir mesaj — her gün hatırlatma değil.",
      },
      {
        title: "Abonelikler ve olağandışı harcamalar",
        body: "Her ay aynı satıcı ve aynı tutar, abonelik olarak listelenir. Aynı gün iki kez yapılan aynı harcama ya da o satıcının olağan tutarının çok üstündeki bir harcama “göz atmaya değer” olarak işaretlenir.",
      },
      {
        title: "Yatırımlar kendi sayfasında",
        body: "Hisseler, ETF'ler, altın ve kripto: bugün ne kadar ettikleri, ne kadar yatırdığınız ve kazanç ya da kayıp. Trade Republic'in işlem dökümü doğrudan okunur; fiyatlar mümkün olan yerde güncellenir.",
      },
      {
        title: "Krediler, hesaplanmış",
        body: "Tutar, faiz, vade ve aylık ödemeden herhangi üçünü girin, dördüncüsü hesaplanır. Kalan borcu, bitiş ayını ve toplam maliyeti görürsünüz.",
      },
      {
        title: "Tüm hesaplar tek bakiyede",
        body: "Vadesiz, birikim, kart ve yatırım hesapları birlikte, 15 para biriminden herhangi birinde gösterilir. Her tutar kendi para birimini korur; çevrimde günlük AMB kurları kullanılır.",
      },
      {
        title: "Almanya için vergi ipuçları",
        body: "Ülkenizi seçtiğinizde, vergi beyannameniz için önemli olabilecek işlemler kısa bir ipucu alır ve tek tıkla o yıl mali müşaviriniz için dışa aktarılır. Yalnızca ipucu — asla vergi danışmanlığı değil.",
      },
    ],
    readsEyebrow: "Ne okur",
    readsTitle: "Bankanızın size zaten verdiği ekstre.",
    readsBody:
      "Wealth asla bankanıza bağlanmaz ve asla bankacılık şifrenizi istemez. Ona bir ekstre dosyası ya da ekran görüntüsü verirsiniz; Mac'inizde okur, doğru hesaba yerleştirir ve siz İçe Aktar'a tıklayana kadar bekler.",
    investEyebrow: "Yatırımlar",
    investTitle: "Neye sahipsiniz ve bugün değeri ne.",
    investBody:
      "Hisselerinizi, ETF'lerinizi, altınınızı ya da kriptonuzu kendiniz girin ya da Trade Republic'in işlem dökümünü içe aktarın; adetleri ve ortalama maliyeti o hesaplasın. Güncel fiyatı olmayan bir varlık ödediğiniz tutarla sayılır — asla uydurma bir değerle değil.",
    provenTitle: "Betada, hâlâ sınanıyor",
    provenBody:
      "Üç şey hazır ve açılabilir durumda, ancak söz verebileceğimiz kadar uzun süre gerçek posta kutularında çalışmadı: bankanızın e-postalarından alınan ekstreler, bir hesabı güncelleyen banka bildirim e-postaları ve bir kez kurulan iPhone Kestirmesi üzerinden Apple Pay harcamaları. Bunları ek özellik olarak görün. Ekstreyi kendiniz içe aktarmanız bunların hiçbirine bağlı değildir.",
    limitsTitle: "Wealth neyi yapmaz",
    limitsBody:
      "Bankanıza giriş yapmaz, hiçbir şey ödemez, para hareket ettirmez. Taranmış, yalnızca görüntüden oluşan PDF'leri okumaz — bunun yerine ekran görüntüsü işe yarar. Vergi danışmanlığı vermez; kararı mali müşaviriniz verir. Ve Mac'inizde çalışır; yani rakamlarınız bizim bir sunucumuzda durmaz.",
  },
};
