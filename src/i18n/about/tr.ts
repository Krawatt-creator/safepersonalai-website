import type { AboutDictionary } from "./en";

export const trAbout: AboutDictionary = {
  metaTitle: "SafePersonalAI nedir? Mac için özel bir yapay zekâ asistanı, tek seferlik ödeme",
  metaDescription:
    "SafePersonalAI, e-postalarınızı okuyan ve takvim kayıtları, yapılacaklar, seyahat planları ve paranızın özetini öneren bir Mac uygulamasıdır. Mac'inizde çalışır, onayınızı bekler ve abonelik olmadan bir kez satın alınır.",
  footerLabel: "SafePersonalAI nedir?",
  answersLabel: "Yanıtlar (EN)",
  eyebrow: "Sade bir anlatımla",
  title: "SafePersonalAI nedir?",
  lead: "SafePersonalAI, Mac için özel bir yapay zekâ asistanıdır. Yeni e-postalarınızı ve kendinize gönderdiğiniz notları okur; takvim kayıtları, yapılacaklar, seyahatler ve para kayıtları önerir ve bir şey değişmeden önce onayınızı bekler. Kendi Mac'inizde çalışır, yerel bir yapay zekâ modeliyle kullanılabilir ve her ay değil, bir kez ödenir.",
  factsTitle: "Kısaca bilgiler",
  facts: [
    { label: "Nedir", value: "Bir Mac uygulaması. Web sitesi ya da sohbet penceresi değildir." },
    {
      label: "Çalıştığı cihazlar",
      value: "Apple çipli Mac'ler (M1 ve sonrası). Intel Mac'ler ve Windows desteklenmez.",
    },
    {
      label: "Yapay zekâ modeli",
      value:
        "Hesap ve yapay zekâ faturası gerektirmeyen yerel bir Ollama modeli ya da kendi Anthropic, OpenAI veya Gemini anahtarınız.",
    },
    {
      label: "Okudukları",
      value: "Gmail, Apple Mail ve iMessage ile kendinize gönderdiğiniz notlar.",
    },
    {
      label: "Oluşturdukları",
      value: "Google Takvim veya Apple Takvim'de kayıtlar ve tarihli yapılacaklar.",
    },
    {
      label: "Yapamadıkları",
      value:
        "E-posta göndermek, kişi davet etmek, bağlantılara tıklamak, ödeme yapmak ya da para aktarmak. Bu yetenekler uygulamada yoktur.",
    },
    {
      label: "Verileriniz",
      value:
        "Mac'inizde kalır. E-postalarınızı, takviminizi ya da para verilerinizi tutan bir SafePersonalAI sunucusu yoktur.",
    },
    {
      label: "Fiyat",
      value:
        "Ücretsiz beta: her modül {days} gün açıktır. Sonrasında tek seferlik satın alma: Base {base} €, Travel {travel} €, Wealth {wealth} € ya da üçü birlikte {bundle} €.",
    },
    { label: "Abonelik", value: "Mac uygulaması için yoktur." },
    {
      label: "Güncel sürüm",
      value: "{version}, Apple tarafından onaylanmış (notarized). Menüler, başlıklar ve düğmeler Türkçe, İngilizce, Almanca, İspanyolca, Çince veya Fransızca; uzun metinler şimdilik İngilizce.",
    },
  ],
  sections: [
    {
      title: "Ne yapar",
      paragraphs: [
        "Base temeldir. Yeni e-postaları okur; randevuları, değişen randevuları, son tarihleri ve istekleri bulur ve her birini önerilen bir takvim kaydı ya da yapılacak olarak bir listeye koyar. Siz onaylar, reddeder ya da ertelersiniz. Uygulamaya iMessage ile kısa notlar gönderebilir ve “bir e-postada şu kelime geçerse şu kaydı öner” gibi kendi kurallarınızı belirleyebilirsiniz.",
        "Travel, seçtiğiniz rotalardaki uçuş fiyatlarını izler ve fiyat belirlediğiniz sınırın altına düştüğünde haber verir. Esnek tarihlerle ve birkaç bacaklı yolculuklarla arama yapar, tarihlerin takviminizde boş olup olmadığını gösterir ve rezervasyon e-postalarınızdan bir seyahat oluşturur.",
        "Wealth, bankanızın size zaten verdiği ekstreyi okur — CSV, Excel, PDF, MT940, CAMT, OFX ya da QIF — ve bankanıza giriş yapmaz. Kategoriye göre harcamaları, önümüzdeki bir ila üç ayın tahminini, bütçeleri, bulduğu abonelikleri ve yatırımlarınızla kredilerinizi gösterir.",
      ],
    },
    {
      title: "Nasıl çalışır",
      paragraphs: [
        "Üç adımda çalışır. Önce yapay zekâ modeli bir mesajı okur ve ne anlama geldiğini çıkarır. Sonra önerilen sonuç, geldiği mesajla birlikte tek bir listede görünür. Uygulama takvim kaydını ya da yapılacağı ancak siz onayladığınızda oluşturur.",
        "Tarihler ve tutarlar yalnızca modele bırakılmaz, sabit kurallarla kontrol edilir. Metinde olmayan bir tarih asla uydurulmaz.",
      ],
    },
    {
      title: "Bir sohbet asistanından farkı",
      paragraphs: [
        "ChatGPT ya da Claude gibi bir sohbet asistanı, siz bir şey sorduğunuzda yanıt verir. SafePersonalAI arka planda kendi başına çalışır: gelen e-postaları okur ve bir sonraki adımı sizin için hazırlar.",
        "Ayrıca bilerek çok daha sınırlıdır. Az sayıda yeteneği vardır; göndermek, ödemek ve tıklamak bunların arasında değildir. Bir öneriyi onaylamak da bu yetenekleri açmaz.",
      ],
    },
    {
      title: "Verileriniz nereye gider",
      paragraphs: [
        "Yerel bir Ollama modeliyle e-postalarınızın metni Mac'inizde işlenir ve başka hiçbir yere gitmez.",
        "Bunun yerine bir bulut sağlayıcısı seçerseniz, bir istek için gereken metin Mac'inizden doğrudan o sağlayıcıya gider; kendi hesabınız altında ve o sağlayıcının koşullarıyla. Bir SafePersonalAI sunucusundan geçmez. Anahtarınız Mac'inizde saklanır.",
      ],
    },
    {
      title: "Ne kadar tutar",
      paragraphs: [
        "Beta ücretsiz indirilir ve her modül {days} gün açıktır. Sonrasında her modül bir kez satın alınır: Base {base} €, Travel {travel} €, Wealth {wealth} €. Üçü birlikte {bundle} € tutar. Satın alma henüz açık değildir; bugün hiçbir ücret alınmaz.",
        "Satın almadığınız bir modül {days} günün sonunda kapanır. Verileri Mac'inizde kalır ve modülü eklediğinizde geri gelir.",
      ],
    },
  ],
  forTitle: "Kimler için",
  forItems: [
    "E-postaların arasında kaybolan tarihleri ve son günleri kaçıranlar için.",
    "Bir yapay zekâ hizmetine e-posta gönderme ya da para harcama yetkisi vermek istemeyenler için.",
    "Yazılımı her ay ödemek yerine bir kez satın almayı tercih edenler için.",
    "Bir uygulamaya banka girişini vermeden harcamalarını görmek isteyenler için.",
  ],
  notForTitle: "Kimler için değil",
  notForItems: [
    "Windows ya da Intel işlemcili bir Mac kullanıyorsanız.",
    "Sizin yerinize e-postaları yanıtlayıp gönderen bir asistan istiyorsanız.",
    "Mac'iniz kapalıyken de çalışmasını istiyorsanız. Mac'inizde çalışır, bu yüzden Mac açık olmalıdır.",
    "Bankanızın otomatik bağlanmasını istiyorsanız. Wealth, sizin verdiğiniz ekstre dosyalarını okur.",
  ],
  linksTitle: "Devamını okuyun",
  download: "Ücretsiz betayı indir",
  pricing: "Fiyatları gör",
};
