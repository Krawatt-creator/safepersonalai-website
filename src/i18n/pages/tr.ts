import type { PagesDictionary } from "./en";

// Turkish. Same shape as en.ts. Not yet checked by a native-speaking editor.
export const trPages: PagesDictionary = {
  card: {
    waits: "Onayınızı bekler.",
    show: "▶ SafePersonalAI'ın ne yaptığını gör",
    back: "↺ Asıl mesajı göster",
  },
  waitlist: {
    placeholder: "siz@ornek.com",
    emailLabel: "E-posta adresi",
    button: "Haber ver",
    loading: "Ekleniyor…",
    done: "✓ Listedesiniz — hazır olduğunda size e-posta göndereceğiz.",
    error: "Bir sorun oluştu — biraz sonra yeniden deneyin.",
  },
  base: {
    metaTitle: "Base — Mac'inizde e-postadan takvime ve yapılacaklara, sizin onayınızla",
    metaDescription:
      "E-postalarınızı Mac'inizde okur; takvim kayıtlarını, yapılacakları, faturaları ve yenilemeleri onayınıza hazırlar. iMessage ile yazabilirsiniz. Asla e-posta göndermez, ödeme yapmaz, bağlantılara tıklamaz.",
    name: "Base",
    tagline: "Gelen kutunuz, takviminiz ve yapılacaklarınız — halledilir, sürpriz olmaz.",
    intro:
      "SafePersonalAI'ın her kurulumun başladığı bölümü. Yeni e-postalarınızı ve ona gönderdiğiniz iMessage'ları okur, ne yapılması gerektiğini çıkarır ve hazırlar. Sonrasında ne olacağına siz karar verirsiniz.",
    steps: [
      {
        title: "Okur",
        body: "Gmail ya da Apple Mail'den gelen yeni e-postaları ve kendi numaranızdan ona yazdığınız mesajları — birçok dilde anlar.",
      },
      {
        title: "Siz onaylarsınız",
        body: "Önerilen her takvim kaydı, fatura ya da rezervasyon tek bir inceleme listesine düşer. Panelden ya da menü çubuğundan onaylayın, reddedin ya da erteleyin.",
      },
      {
        title: "Uygular",
        body: "Ancak o zaman gerçekleşir — etkinlik takviminize girer, fatura takibe alınır. Sizin adınıza asla e-posta göndermez.",
      },
    ],
    features: [
      {
        title: "Gelen kutunuz, sizden ne istediğine göre okunur",
        body: "Yeni e-postaları okur ve sizden ne istediklerini çıkarır — son tarihli bir görev, bir randevu, değişen bir randevu, bir fatura, bir yenileme — ve onayınıza hazırlar. Metinde olmayan bir tarih asla uydurulmaz.",
      },
      {
        title: "Kimseyi davet etmeden takvim kayıtları",
        body: "Onaylanan etkinlikler Google Takvim'e, Apple Takvim'e ya da ikisine birden gider. Başka birini davet edemez — yazılımda böyle bir yetenek yoktur.",
      },
      {
        title: "Tarihli yapılacaklar",
        body: "Ekleyin, işaretleyin, erteleyin. Renk; geciken, yaklaşan ve yolunda olanı gösterir, tekrarlayan bir görev kendiliğinden geri gelir. İsterseniz sabah özeti günün programını ve vadesi gelen faturaları söyler.",
      },
      {
        title: "Kendi numaranızdan yazın",
        body: "Her biri ayrı ayrı açılan 25'ten fazla iMessage komutu: “Yarın ev sahibini aramamı hatırlat”, “Yarın takvimimde ne var?”, “Kargom nerede?” ya da yapıştırdığınız bir mektupla “Şunu açıkla:”. Yalnızca size yanıt verir.",
      },
      {
        title: "Kendi basit kurallarınız",
        body: "“Bir e-posta ya da mesajda X geçtiğinde Y yap”: bir görev, bir takvim bloğu ya da bir gelir veya gider kaydı. Basit bir formla, kod yazmadan.",
      },
      {
        title: "Kendi yapay zekâ anahtarınız — ya da hiç anahtar yok",
        body: "Mac'inizde yerel bir Ollama modeli, yapay zekâ faturası olmaması demektir; bulut modeline göre daha yavaş ve daha az isabetli olabilir. Anthropic, OpenAI ya da Gemini'yi mi tercih edersiniz? Kendi anahtarınızı bağlayın ve ücreti doğrudan onlara ödeyin — biz asla arada değiliz. Bazılarının sınırlı ve kendi veri koşullarına bağlı ücretsiz bir kullanım hakkı vardır; lütfen resmî sitelerine bakın.",
      },
    ],
    seeEyebrow: "Gerçekte ne görürsünüz",
    seeTitle: "Her karar için tek, sakin bir liste.",
    seeBody: "SafePersonalAI geleni okur, açık bir öneri hazırlar ve son kararı sizin elinizde bırakır.",
    casesEyebrow: "İş başında",
    casesTitle: "Her gün hallettiği türden şeyler.",
    casesBody: "Gündelik hayattan üç örnek. Birine tıklayın, SafePersonalAI'ın onunla ne yaptığını görün.",
    cases: [
      {
        inputLabel: "Diş kliniğinden e-posta",
        inputSub: "“Randevunuz perşembe günü saat 15:00'te.”",
        outputTitle: "“Dişçi — Per, 15:00” takvime eklensin",
        outputSub: "E-postadan hazırlandı, kaynağı gösterilerek",
      },
      {
        inputLabel: "Okul idaresinden e-posta",
        inputSub: "“Lütfen imzalı formu cumaya kadar gönderin.”",
        outputTitle: "Yapılacak: imzalı formu gönder — son tarih cuma",
        outputSub: "Son tarih e-postada yazan tarihtir, asla tahmin değildir",
      },
      {
        inputLabel: "E-posta: randevunuz değişti",
        inputSub: "“Randevunuz salıdan perşembeye alındı.”",
        outputTitle: "Takvim değişikliği hazırlandı: salı → perşembe",
        outputSub: "Mevcut kayıt güncellenir, ikincisi oluşturulmaz",
      },
    ],
  },
  travel: {
    metaTitle: "Travel — Mac'inizde uçuş fiyatı alarmı, kendi ücretsiz arama anahtarınızla",
    metaDescription:
      "Uçuş fiyatlarını rota rota Mac'inizde, kendi ücretsiz arama anahtarınızla takip edin. Fiyat sınırınızın altına indiğinde tek bir bildirim. E-postanızdaki rezervasyonlar seyahate dönüşür.",
    name: "Travel",
    tagline: "Uçuş fırsatları sizin için izlenir; cüzdanınız erimez.",
    intro:
      "Hangi rotaların önemli olduğunu ve iyi fiyatın ne olduğunu söyleyin. Arka planda sessizce kontrol eder ve yalnızca fiyat gerçekten sınırınızın altındaysa sizi rahatsız eder.",
    steps: [
      {
        title: "Neyin önemli olduğunu söyleyin",
        body: "Bir rota, tarihleriniz ve bilet almanızı sağlayacak fiyat. Bir şehir ya da havalimanı yazın, önerilerden seçin.",
      },
      {
        title: "Sessizce kontrol eder",
        body: "Günde bir kez, kendi anahtarınızın izin verdiği aramaların içinde — kontrolden çıkan maliyet yok, sürekli sayfa yenilemek yok.",
      },
      {
        title: "Yalnızca gerçek bir fırsatı duyarsınız",
        body: "Yalnızca takip edilen bir rota gerçekten kendi sınırınızın altına indiğinde — başka hiçbir şey sizi bölmez.",
      },
    ],
    features: [
      {
        title: "Kendi kotanızın içinde fiyat takibi",
        body: "Takip edilen her rota günde bir kez, kendi anahtarınızın izin verdiği aramaların içinde kontrol edilir — size para kazandırması gereken bir özellik için sürpriz fatura yok.",
      },
      {
        title: "Yalnızca gerçekten fırsat olduğunda bildirim",
        body: "Fiyatı siz belirlersiniz. Gerçek bir fiyat onun altına indiğinde tek bir bildirim alırsınız — her sıradan dalgalanmada değil.",
      },
      {
        title: "Kendi ücretsiz arama anahtarınız",
        body: "Ayda 250 aramaya yeten kendi ücretsiz SerpApi anahtarınızı kullanın. Anahtar Mac'inizde kalır ve kota tümüyle sizindir.",
      },
      {
        title: "Esnek tarihler ve birden fazla durak",
        body: "Seyahat sürelerini ve bir iki gün öncesini ya da sonrasını karşılaştırın ya da Hannover → Antalya → Palma → Hannover gibi iki ila dört bacaklı arama yapın. Bir işaret, tarihlerin Google Takvim'inizde boş olup olmadığını gösterir.",
      },
      {
        title: "E-postanızdaki rezervasyonlar",
        body: "Uçuş ve otel onayları takvim kayıtlarına ve saklanan bir seyahat planına dönüşür; geri sayımlı seyahatler olarak gruplanır.",
      },
      {
        title: "Bavul ve check-in",
        body: "Bir rezervasyonu onayladığınızda iki gün öncesine bavul hazırlama, bir gün öncesine çevrimiçi check-in görevi eklenir.",
      },
    ],
    watchEyebrow: "Neyi izler",
    watchTitle: "Her rota, her gün, kendi sınırınıza göre kontrol edilir.",
    watchBody:
      "Neyin fırsat sayılacağına siz karar verirsiniz. Yalnızca takip edilen bir rota o rakamın gerçekten altına indiğinde sizi rahatsız eder — geri kalan her şey arka planda sessiz kalır.",
    seeEyebrow: "Gerçekte ne görürsünüz",
    seeTitle: "Tek bir bildirim; yalnızca dikkatinize değdiğinde.",
    seeBody:
      "Kontrol etmeniz gereken bir panel değil — fiyat gerçekten sınırınızın altına indiğinde tek bir bildirim, inmediğinde ise hiçbir şey.",
  },
  iphone: {
    metaTitle: "iPhone",
    metaDescription:
      "SafePersonalAI'ı iPhone'unuzdan görün ve yönetin. İşi Mac'iniz yapmaya, verilerinizi o tutmaya devam eder; telefon, kendi iCloud'unuz üzerinden ona açılan kilitli bir penceredir.",
    name: "iPhone · yakında",
    tagline: "İşi Mac'iniz yapar. iPhone'unuz evet der.",
    intro:
      "SafePersonalAI'ı Mac'te kullananlar için isteğe bağlı bir yardımcı. Bekleyenleri onaylayın, gününüze ve paranıza bakın, bir görev ekleyin — her yerden. Verileriniz Mac'inizde kalır; telefon, kendi iCloud'unuz üzerinden gelen kilitli bir kopyayı gösterir.",
    priceNote: "aylık · isteğe bağlı · istediğiniz zaman iptal",
    steps: [
      {
        title: "Kamerayla bir kez eşleştirin",
        body: "Mac'iniz bir kod gösterir. iPhone'u ona doğrultun, Mac'te onaylayın. İkisi artık hiçbir yere gönderilmemiş bir anahtarı paylaşır.",
      },
      {
        title: "Mac'inizin gördüğünü görün",
        body: "Onayınızı bekleyenler, haftanız, yapılacaklarınız, paranız — Mac uyurken bile, Mac'inizin gönderdiği son görüntü.",
      },
      {
        title: "Her yerden evet deyin",
        body: "Onaylayın, reddedin, bir görev ekleyin. Mac'iniz uyanık ve çevrimiçi olur olmaz uygular ve bittiğini telefona bildirir.",
      },
    ],
    features: [
      {
        title: "Apple bile okuyamaz",
        body: "İkisinin alışverişi yaptığı her şey, cihazdan çıkmadan önce eşleştirme anahtarıyla kilitlenir. Kendi iCloud'unuzun özel bölümünden geçer. Sunucu işletmiyoruz; dolayısıyla bizde size ait hiçbir şey yok.",
      },
      {
        title: "Bekleyeni onaylayın",
        body: "Bir şey onayınızı beklediğinde bildirim, ardından Onayla ya da Reddet. Yalnızca Mac'in alabileceği bir ayrıntı gerektiren şeyler, tahmin yürütmek yerine bunu söyler.",
      },
      {
        title: "Gününüz ve haftanız",
        body: "Apple Takvim ve Google Takvim'deki etkinlikler, yaklaşan doğum günleri ve bu hafta vadesi gelen ödemeler.",
      },
      {
        title: "Paranız, grafikleriyle",
        body: "Wealth ile: bakiye, bir aydan bir yıla kadar kategoriye göre harcamalar, bütçeler, son işlemler, önümüzdeki 30 gün ve kazanç ve kayıplarıyla yatırımlarınız.",
      },
      {
        title: "Telefon anahtarlarınızı değiştiremez",
        body: "Anahtarlar, e-posta hesapları ve güvenilen gönderenler yalnızca Mac'te ayarlanır. Telefon kısa ve sabit bir istek listesinden isteyebilir — ve her istek Mac tarafından denetlenir.",
      },
      {
        title: "İstediğiniz zaman bırakın, hiçbir şey kaybetmeyin",
        body: "Aboneliği sonlandırın; telefon ödenen ayın sonunda susar. Mac'inizde hiçbir şey değişmez ve geri dönerseniz eşleştirmeniz durur.",
      },
    ],
    screensEyebrow: "Nasıl görünüyor",
    screensTitle: "Her gün kullanacağınız altı ekran.",
    screensBody:
      "Uygulamanın gerçek ekranları, kendi örnek verileriyle dolu — bir Mac eşleştirmeden önce açabileceğiniz örnek verili gezintinin aynısı. Uygulamanın kendisi İngilizcedir.",
    screens: [
      {
        alt: "“Today” ekranı: Approve ve Reject düğmeleriyle onay bekleyen bir takvim etkinliği, günün etkinlikleri, bir doğum günü ve bakiye.",
        title: "Bugün",
        body: "Onayınızı bekleyenler, Onayla ve Reddet ile; ardından gününüz: etkinlikler, doğum günleri ve bakiyeniz.",
      },
      {
        alt: "“Wealth” ekranı: hesapların ve yatırımların toplamı, önümüzdeki 30 günün ödemeleri ve önümüzdeki 90 günün eğrisi.",
        title: "Wealth",
        body: "Toplamınız, önümüzdeki 30 günün ödemeleri ve ardından paranın durumu. Wealth modülü gerekir.",
      },
      {
        alt: "“Forecast” ekranı: önümüzdeki 90 gün için beklenen bakiyenin eğrisi, en düşük noktası ve 30, 60 ve 90 günlük toplamlar.",
        title: "Tahmin",
        body: "Önümüzdeki 90 gün bir eğri olarak. Dokunun; o günü ve o gün neyin hareket ettiğini, kendi planladıklarınız dahil, görün.",
      },
      {
        alt: "Investments ekranı: her şeyin bugünkü değeri, kazanç, türe göre halka ve kazanç ya da kaybıyla her varlık.",
        title: "Yatırımlar",
        body: "Her şeyin bugünkü değeri, ne ödediğiniz ve kazanç ya da kaybıyla her varlık.",
      },
      {
        alt: "To-do ekranı: tarihleriyle açık işler ve yeni iş ekleme alanı.",
        title: "Yapılacaklar",
        body: "Tarihleriyle açık işleriniz. Bir tane ekleyin, birini tamamlayın ya da yarına kaydırın.",
      },
      {
        alt: "Events ekranı: doğum günleri, bugünün ve yarının etkinlikleri ve bu hafta gelecek ödemeler.",
        title: "Etkinlikler",
        body: "Apple ve Google Takvim'den önünüzdeki hafta, yaklaşan doğum günleri ve bu haftanın ödemeleri.",
      },
    ],
    knowTitle: "Abone olmadan önce bilmeniz gerekenler",
    know: [
      {
        lead: "Mac uygulaması gerekir.",
        text: "iPhone uygulaması, Mac'inizdeki SafePersonalAI'a açılan bir penceredir. Tek başına çalışmaz.",
      },
      {
        lead: "İkisinde de aynı iCloud hesabı.",
        text: "Mac ve iPhone aynı iCloud hesabıyla oturum açmış olmalı ve iCloud'da biraz boş alan bulunmalıdır.",
      },
      {
        lead: "Mac uyurken okumak olur; işlem yapmak olmaz.",
        text: "Mac'inizin gönderdiği son görüntüyü görürsünüz. İstedikleriniz, Mac uyanık ve çevrimiçi olduğunda uygulanır.",
      },
      {
        lead: "Bildirimler gecikebilir.",
        text: "Bir uygulamayı arka planda ne sıklıkla uyandıracağına iOS karar verir. Bildirim dakikalar sonra gelebilir, Düşük Güç Modu'nda hiç gelmeyebilir.",
      },
      {
        lead: "Henüz App Store'da değil.",
        text: "Uygulama hazır ve test ediliyor. Yukarıya adresinizi bırakın; yayımlandığı gün size haber verelim.",
      },
    ],
    trademark:
      "iPhone, iCloud, Face ID, Touch ID, Mac ve App Store; Apple Inc.'in ABD'de ve diğer ülke ve bölgelerde tescilli ticari markalarıdır. SafePersonalAI'ın Apple ile bir bağı yoktur ve Apple tarafından desteklenmemektedir.",
  },
};
