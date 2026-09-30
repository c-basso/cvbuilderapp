module.exports = {
    slug: 'ats-uyumlu-cv',
    en: 'ats-friendly-resume',
    keyword: 'ats uyumlu cv',
    tag: 'ATS',
    navTitle: 'ATS uyumlu CV',
    title: 'ATS Uyumlu CV: Aday Takip Sisteminden Nasıl Geçilir?',
    h1: 'ATS uyumlu CV nasıl hazırlanır',
    description: 'Birçok şirket CV’leri ATS ile tarar. Bu yazılımın nasıl okuduğunu öğrenin; biçim, anahtar kelime ve dosya türü kontrol listesiyle CV’nizi hazırlayın.',
    cardText: 'ATS nasıl okur ve biçim kontrol listesi.',
    lede: 'CV’nizi bir insan okumadan önce çoğu zaman bir yazılım okur. Bilgilerinizi doğru okuyabildiğinden emin olun.',
    tldr: ['Standart başlıklar: İş Deneyimi, Eğitim, Beceriler.', 'Gerçek metinli PDF veya Word.', 'İlandaki anahtar kelimeler.', 'Tablo ve görsel içinde metin yok.'],
    sections: [
        { id: 'liste', h2: 'Kontrol listesi', html: `<ul><li>Tek sütun.</li><li>Standart yazı tipi.</li><li>Tutarlı tarih biçimi (01.2023 – devam ediyor).</li><li>Kısaltmaların açılımı: SEO (arama motoru optimizasyonu).</li><li>Dosya adı: Ad-Soyad-CV.pdf.</li></ul>` },
        { id: 'efsaneler', h2: 'Efsaneler', html: `<p>Beyaz yazıyla gizlenen anahtar kelimeler, CV bir insana ulaştığında fark edilir. Onları deneyim anlatımınızda doğal kullanın.</p>` }
    ],
    appAfter: 1,
    app: {
        h2: 'CV Builder’da ATS uyumlu CV',
        intro: 'Sade bir şablon seçin — PDF, ATS’nin okuyabileceği gerçek metin içerir.',
        screenshot: 2,
        steps: [['Sade şablon', 'Tek sütun.'], ['Standart bölümler', 'Net başlıklar.'], ['Anahtar kelimeler', 'İlandan.'], ['PDF’i indirin', 'Gerçek metinli.']],
        outro: 'PDF dışa aktarma premium plandadır (ücretsiz deneme süresiyle). Hiçbir uygulama belirli bir ATS’den geçmeyi garanti edemez.'
    },
    faq: [
        { q: 'ATS PDF okuyabilir mi?', a: 'Gerçek metinli PDF’leri genelde okur. İlan Word istiyorsa Word gönderin.' },
        { q: 'Fotoğraf ATS’yi etkiler mi?', a: 'Sistem fotoğrafı okumaz; yalnızca yer kaplar.' }
    ],
    related: ['cv-ilana-gore-uyarlama', 'cv-ornekleri-sablonlari', 'cv-pdf-iphone']
};
