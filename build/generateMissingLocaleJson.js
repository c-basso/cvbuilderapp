const fs = require('fs');
const path = require('path');

const { SITE_URL } = require('./constants');

const BASE_LOCALE_PATH = path.join(__dirname, 'en.json');
const APP_STORE_ID = '1630645768';

function readJson(filePath) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, value) {
    fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function deepMerge(base, patch) {
    if (Array.isArray(patch)) {
        return patch;
    }

    if (!patch || typeof patch !== 'object') {
        return patch;
    }

    const result = { ...base };

    for (const [key, value] of Object.entries(patch)) {
        const baseValue = result[key];
        if (
            value &&
            typeof value === 'object' &&
            !Array.isArray(value) &&
            baseValue &&
            typeof baseValue === 'object' &&
            !Array.isArray(baseValue)
        ) {
            result[key] = deepMerge(baseValue, value);
        } else {
            result[key] = value;
        }
    }

    return result;
}

function stripAlternateMetaFields(document) {
    const nextDocument = structuredClone(document);

    if (!nextDocument.meta || typeof nextDocument.meta !== 'object') {
        return nextDocument;
    }

    for (const key of Object.keys(nextDocument.meta)) {
        if (key.startsWith('alternate_')) {
            delete nextDocument.meta[key];
        }
    }

    return nextDocument;
}

function localeUrl(code) {
    return code === 'en' ? SITE_URL : `${SITE_URL}${code}/`;
}

function appStoreUrl(countryCode) {
    return `https://apps.apple.com/${countryCode}/app/id${APP_STORE_ID}`;
}

function createLocaleDocument(baseDocument, code, config) {
    const canonical = localeUrl(code);
    const storeUrl = appStoreUrl(config.appStoreCountry);

    const standardFields = {
        meta: {
            lang: code,
            author: 'Vladimir Ivakhnenko',
            app_store_id: APP_STORE_ID,
            canonical,
            og_url: canonical,
            twitter_url: canonical,
            og_image: `${SITE_URL}logo.webp`,
            og_logo: `${SITE_URL}logo.webp`,
            twitter_image: `${SITE_URL}logo.webp`,
            geo_region: config.geoRegion,
            geo_placename: config.geoPlacename
        },
        hero: {
            cta_url: storeUrl
        },
        app_info: {
            version: '1.20.11',
            application_category: 'BusinessApplication',
            application_sub_category: 'Productivity',
            file_size: config.fileSize || '87.4 MB',
            publisher: 'c-basso',
            price_currency: config.currency
        },
        footer: {
            cta_url: storeUrl
        },
        floating_cta: {
            url: storeUrl
        }
    };

    return deepMerge(baseDocument, deepMerge(standardFields, config.overrides));
}

const LOCALES = {
    jp: {
        appStoreCountry: 'jp',
        geoRegion: 'JP',
        geoPlacename: 'Japan',
        currency: 'JPY',
        overrides: {
            meta: {
                title: '履歴書作成アプリ - プロ品質のCV・履歴書を簡単作成 | 100以上のテンプレート',
                description: '履歴書作成アプリで、プロ品質のCV・履歴書をすばやく作成。100以上のテンプレート、書き方のヒント、PDF書き出しに対応し、iPhoneとiPadで使えます。',
                keywords: '履歴書作成, 職務経歴書, CV 作成, 履歴書 テンプレート, レジュメ 作成, resume builder, 履歴書 アプリ, PDF 履歴書, CV Builder',
                og_title: '履歴書作成アプリ | 100以上のテンプレートでCVを作成',
                og_description: '履歴書作成アプリで、プロ品質のCVや履歴書をすばやく作成できます。100以上のテンプレート、書き方のヒント、PDF出力に対応し、iPhoneとiPadでとても便利に使え、就職活動や転職活動の応募準備を効率よく進められます。',
                og_locale: 'ja_JP',
                twitter_title: '履歴書作成アプリ | 100以上のテンプレートでCVを作成',
                twitter_description: '履歴書作成アプリで、プロ品質のCV・履歴書をすばやく作成。100以上のテンプレート、書き方のヒント、PDF書き出しに対応し、iPhoneとiPadで使えます。'
            },
            hero: {
                logo_alt: '履歴書作成アプリのロゴ',
                logo_text: '履歴書作成',
                title: '数分で履歴書とCVを作成',
                subtitle: 'iPhoneとiPad向けの履歴書作成アプリ',
                subheadline: '履歴書作成アプリなら、職種や経験に合わせたプロ品質の履歴書やCVを短時間で作れます。100以上のテンプレート、書き方のヒント、PDF出力に対応し、就職活動や転職活動をスマートに進められます。',
                download_text: '履歴書作成アプリをダウンロード',
                download_alt: 'App Storeから履歴書作成アプリをダウンロード',
                qr_alt: 'QRコードを読み取って履歴書作成アプリをダウンロード',
                qr_cta_text: 'スマートフォンでスキャンしてダウンロード',
                learn_more_text: '履歴書作成アプリについて詳しく見る',
                phone_text: 'タップしてプロ品質の履歴書を作成'
            },
            features: {
                title: '履歴書作成に必要な機能を1つに集約',
                subtitle: 'テンプレート選びからPDF書き出しまで、履歴書やCVを仕上げるための主要機能をアプリ内でまとめて使えます。',
                items: [
                    { title: 'すぐに作れる履歴書作成フロー', description: '入力ガイドに沿って進めるだけで、学歴・職歴・スキルを整理した履歴書を効率よく作成できます。初めての方でも迷いにくい構成です。', icon: '⚡' },
                    { title: '100以上のテンプレート', description: 'シンプル、モダン、ビジネス向けなど、用途に合わせてテンプレートを選べます。色やフォントも調整しやすく、見やすいCVに仕上がります。', icon: '🎨' },
                    { title: '書き方のヒントと例文', description: '自己PR、職務要約、実績の書き方に役立つヒントを収録。内容を整理しやすく、採用担当者に伝わる文章づくりをサポートします。', icon: '💡' },
                    { title: '写真・署名・QRコード対応', description: 'プロフィール写真や署名、ポートフォリオへのQRコードを追加して、紙でもオンラインでも伝わりやすい応募書類を作成できます。', icon: '📱' },
                    { title: '高品質PDFで出力', description: '完成した履歴書やCVは、レイアウトを保ったままPDFで保存できます。応募送信、共有、印刷にもそのまま使えます。', icon: '📄' },
                    { title: 'カバーレター作成にも対応', description: '履歴書だけでなく、デザインを合わせたカバーレターも作成できます。応募書類全体の統一感を保ちやすくなります。', icon: '✉️' }
                ]
            },
            faq: {
                title: '履歴書作成アプリに関するよくある質問',
                subtitle: '履歴書やCVの作成、テンプレート、PDF出力、iPhone・iPadでの使い方についての質問に回答します。',
                items: [
                    { question: 'この履歴書作成アプリの特長は何ですか？', answer: '100以上のテンプレート、入力ガイド、書き方のヒント、PDF出力を1つにまとめている点が特長です。iPhoneやiPadで短時間にプロ品質の履歴書やCVを作成できます。'},
                    { question: 'デザイン経験がなくても使えますか？', answer: 'はい。項目ごとに入力を進められるため、デザインやレイアウトの知識がなくても使えます。テンプレートを選ぶだけで整った見た目に仕上がります。'},
                    { question: '作成した履歴書はどの形式で保存できますか？', answer: '完成した履歴書やCVはPDFで保存できます。レイアウトが崩れにくく、求人応募、メール送信、印刷に使いやすい形式です。'},
                    { question: 'テンプレートはさまざまな職種に対応していますか？', answer: 'はい。新卒、事務、営業、IT、クリエイティブなど、幅広い職種やキャリア段階を想定したテンプレートを用意しています。'},
                    { question: 'iPhoneとiPadの両方で使えますか？', answer: 'はい。アプリはiPhoneとiPad向けに最適化されています。どちらのデバイスでも履歴書の作成、編集、書き出しを行えます。'},
                    { question: '他の履歴書アプリとの違いは何ですか？', answer: '見た目だけでなく、書き方のサポート、PDF出力、カバーレター作成までまとめて使える点が違いです。短時間で実用的な応募書類を作りたい方に向いています。'}
                ]
            },
            app_info: {
                name: '履歴書作成',
                alternate_name: 'CV Builder'
            },
            footer: {
                cta_text: '履歴書作成アプリをダウンロード',
                privacy_text: 'プライバシーポリシー',
                terms_text: '利用規約',
                support_text: 'サポート',
                copyright: '© 2025 c-basso. All rights reserved. | 履歴書作成アプリ | CV・履歴書を簡単作成'
            },
            floating_cta: {
                text: '📱 履歴書作成アプリをダウンロード'
            }
        }
    },
    ko: {
        appStoreCountry: 'kr',
        geoRegion: 'KR',
        geoPlacename: 'South Korea',
        currency: 'KRW',
        overrides: {
            meta: {
                title: '이력서 작성기 - 전문적인 이력서와 CV를 빠르게 작성 | 100개 이상 템플릿',
                description: '이력서 작성기로 전문적인 이력서와 CV를 손쉽게 만드세요. 100개 이상의 템플릿, 작성 팁, PDF 내보내기를 제공하며 iPhone과 iPad에서 사용할 수 있습니다.',
                keywords: '이력서 작성기, 이력서 만들기, CV 작성, 이력서 템플릿, resume builder, 자기소개서, PDF 이력서, 경력기술서, CV Builder',
                og_title: '이력서 작성기 | 100개 이상 템플릿으로 CV 작성',
                og_description: '이력서 작성기로 전문적인 이력서와 CV를 빠르게 만들 수 있습니다. 100개 이상의 템플릿, 작성 팁, PDF 저장 기능을 제공해 iPhone과 iPad에서 편하게 사용할 수 있으며 취업 준비와 이직 지원에 바로 활용할 수 있습니다.',
                og_locale: 'ko_KR',
                twitter_title: '이력서 작성기 | 100개 이상 템플릿으로 CV 작성',
                twitter_description: '이력서 작성기로 전문적인 이력서와 CV를 손쉽게 만드세요. 100개 이상의 템플릿, 작성 팁, PDF 내보내기를 제공하며 iPhone과 iPad에서 사용할 수 있습니다.'
            },
            hero: {
                logo_alt: '이력서 작성기 앱 로고',
                logo_text: '이력서 작성기',
                title: '몇 분 만에 이력서와 CV 작성',
                subtitle: 'iPhone과 iPad용 이력서 작성 앱',
                subheadline: '이력서 작성기는 직무와 경력 수준에 맞는 전문적인 이력서와 CV를 빠르게 만들 수 있도록 도와줍니다. 100개 이상의 템플릿, 작성 팁, PDF 저장 기능으로 취업 준비를 더 간편하게 진행할 수 있습니다.',
                download_text: '이력서 작성기 다운로드',
                download_alt: 'App Store에서 이력서 작성기 다운로드',
                qr_alt: 'QR 코드를 스캔하여 이력서 작성기 다운로드',
                qr_cta_text: '휴대폰으로 스캔하여 다운로드',
                learn_more_text: '이력서 작성기에 대해 더 알아보기',
                phone_text: '탭하여 전문적인 이력서 작성'
            },
            features: {
                title: '이력서 작성에 필요한 핵심 기능',
                subtitle: '템플릿 선택부터 PDF 저장까지, 이력서와 CV를 완성하는 데 필요한 기능을 한곳에서 제공합니다.',
                items: [
                    { title: '빠른 단계별 작성', description: '입력 가이드를 따라가며 학력, 경력, 기술을 정리할 수 있어 처음 작성하는 사람도 쉽게 이력서를 완성할 수 있습니다.', icon: '⚡' },
                    { title: '100개 이상의 템플릿', description: '심플한 스타일부터 현대적인 스타일까지 다양한 템플릿을 제공합니다. 색상과 글꼴을 바꿔 나만의 CV를 만들 수 있습니다.', icon: '🎨' },
                    { title: '작성 팁과 예시 제공', description: '경력 요약, 성과, 자기소개 문장을 더 명확하게 작성할 수 있도록 실용적인 팁을 제공합니다.', icon: '💡' },
                    { title: '사진과 QR 코드 추가', description: '프로필 사진, 서명, 포트폴리오 링크용 QR 코드를 추가해 온라인과 오프라인 모두에서 돋보이는 이력서를 만들 수 있습니다.', icon: '📱' },
                    { title: '고품질 PDF 저장', description: '완성된 이력서와 CV를 PDF로 저장해 이메일 전송, 채용 사이트 업로드, 인쇄에 바로 활용할 수 있습니다.', icon: '📄' },
                    { title: '커버레터 작성 지원', description: '이력서와 디자인을 맞춘 커버레터도 함께 작성할 수 있어 지원 서류 전체의 완성도를 높일 수 있습니다.', icon: '✉️' }
                ]
            },
            faq: {
                title: '이력서 작성기 자주 묻는 질문',
                subtitle: '이력서 작성, 템플릿, PDF 저장, iPhone과 iPad 사용 방법에 대한 자주 묻는 질문입니다.',
                items: [
                    { question: '이 앱의 가장 큰 장점은 무엇인가요?', answer: '100개 이상의 템플릿, 작성 가이드, PDF 저장 기능을 함께 제공해 빠르게 전문적인 이력서를 만들 수 있다는 점입니다.' },
                    { question: '디자인 경험이 없어도 사용할 수 있나요?', answer: '네. 항목별 입력 방식이라 복잡한 편집 도구 없이도 손쉽게 사용할 수 있습니다. 템플릿을 선택하면 레이아웃이 자동으로 정리됩니다.' },
                    { question: '완성한 이력서는 어떤 형식으로 저장되나요?', answer: 'PDF 형식으로 저장할 수 있습니다. 대부분의 채용 플랫폼과 이메일 지원에서 사용하기 좋은 형식입니다.' },
                    { question: '다양한 직무에 맞는 템플릿이 있나요?', answer: '네. 신입, 경력직, 사무직, IT, 마케팅 등 여러 직무와 경력 수준에 맞는 템플릿을 제공합니다.' },
                    { question: 'iPhone과 iPad 모두 지원하나요?', answer: '네. 이 앱은 iPhone과 iPad에서 모두 원활하게 사용할 수 있도록 최적화되어 있습니다.' },
                    { question: '다른 이력서 앱과 어떤 차이가 있나요?', answer: '템플릿만 제공하는 도구가 아니라 작성 팁, PDF 저장, 커버레터 작성까지 함께 지원해 실제 지원용 서류를 빠르게 완성할 수 있습니다.' }
                ]
            },
            app_info: {
                name: '이력서 작성기',
                alternate_name: 'CV Builder'
            },
            footer: {
                cta_text: '이력서 작성기 다운로드',
                privacy_text: '개인정보 처리방침',
                terms_text: '이용 약관',
                support_text: '지원',
                copyright: '© 2025 c-basso. All rights reserved. | 이력서 작성기 | 전문적인 이력서와 CV 작성'
            },
            floating_cta: {
                text: '📱 이력서 작성기 다운로드'
            }
        }
    },
    nl: {
        appStoreCountry: 'nl',
        geoRegion: 'NL',
        geoPlacename: 'Netherlands',
        currency: 'EUR',
        overrides: {
            meta: {
                title: 'CV maken - CV Maker app voor professioneel cv | 100+ cv templates',
                description: 'CV maken met een professionele CV Maker app. Kies uit 100+ cv templates, krijg schrijftips en exporteer je cv als PDF. Ideaal voor iPhone en iPad.',
                keywords: 'cv maken, cv maker, curriculum vitae, cv template, cv voorbeeld, resume builder, sollicitatie cv, professioneel cv, pdf cv',
                og_title: 'CV maken met 100+ professionele templates',
                og_description: 'Maak snel een professioneel cv met onze CV Maker app. Kies uit 100+ cv templates, gebruik praktische schrijftips en exporteer je cv als PDF op iPhone of iPad.',
                og_locale: 'nl_NL',
                twitter_title: 'CV maken met 100+ professionele templates',
                twitter_description: 'CV maken met een professionele CV Maker app. Kies uit 100+ cv templates, krijg schrijftips en exporteer je cv als PDF. Ideaal voor iPhone en iPad.'
            },
            hero: {
                logo_alt: 'CV Maker app logo',
                logo_text: 'CV Maker',
                title: 'Maak in minuten een professioneel cv',
                subtitle: 'CV Maker app voor iPhone en iPad',
                subheadline: 'Met CV Maker maak je snel een professioneel cv voor stages, startersfuncties en ervaren rollen. Gebruik 100+ templates, praktische schrijftips en PDF-export om je sollicitatie sneller klaar te hebben.',
                download_text: 'Download CV Maker',
                download_alt: 'Download CV Maker in de App Store',
                qr_alt: 'Scan de QR-code om CV Maker te downloaden',
                qr_cta_text: 'Scan met je telefoon om te downloaden',
                learn_more_text: 'Meer over CV Maker',
                phone_text: 'Tik om je professionele cv te maken'
            },
            features: {
                title: 'Alles wat je nodig hebt om een sterk cv te maken',
                subtitle: 'Van templatekeuze tot PDF-export: de belangrijkste tools voor een professioneel cv zitten in een app.',
                items: [
                    { title: 'Snel en eenvoudig cv maken', description: 'Volg een duidelijke stap-voor-stap workflow om ervaring, opleiding en vaardigheden netjes op te bouwen in een professioneel cv.', icon: '⚡' },
                    { title: '100+ cv templates', description: 'Kies uit moderne, zakelijke en minimalistische cv templates. Pas kleuren en lettertypes aan zodat je cv bij jouw profiel past.', icon: '🎨' },
                    { title: 'Schrijftips en voorbeelden', description: 'Krijg hulp bij profieltekst, werkervaring en prestaties zodat je cv duidelijker en overtuigender wordt.', icon: '💡' },
                    { title: 'Foto, handtekening en QR-code', description: 'Voeg een foto, digitale handtekening of QR-code naar LinkedIn of portfolio toe voor een completer en moderner cv.', icon: '📱' },
                    { title: 'Exporteren naar PDF', description: 'Sla je cv op als nette PDF voor sollicitaties, e-mailbijlagen en print. De opmaak blijft behouden op verschillende apparaten.', icon: '📄' },
                    { title: 'Ook voor motivatiebrieven', description: 'Maak een motivatiebrief in dezelfde stijl als je cv voor een consistente en professionele sollicitatie.', icon: '✉️' }
                ]
            },
            faq: {
                title: 'Veelgestelde vragen over CV Maker',
                subtitle: 'Antwoorden op veelgestelde vragen over cv maken, templates, PDF-export en gebruik op iPhone en iPad.',
                items: [
                    { question: 'Waarom is deze app geschikt om een cv te maken?', answer: 'De app combineert 100+ templates, schrijftips en PDF-export in een eenvoudige workflow. Daardoor maak je sneller een cv dat er professioneel uitziet.' },
                    { question: 'Kan ik de app gebruiken zonder designervaring?', answer: 'Ja. Je kiest een template en vult je gegevens stap voor stap in. De app neemt het opmaakwerk uit handen.' },
                    { question: 'In welk bestandsformaat kan ik mijn cv opslaan?', answer: 'Je kunt je cv exporteren als PDF. Dat is handig voor sollicitaties, e-mail en print.' },
                    { question: 'Zijn de templates geschikt voor verschillende sectoren?', answer: 'Ja. Er zijn templates voor starters, zakelijke functies, creatieve rollen en andere sectoren en ervaringsniveaus.' },
                    { question: 'Werkt CV Maker op iPhone en iPad?', answer: 'Ja. De app is geoptimaliseerd voor zowel iPhone als iPad, zodat je overal aan je cv kunt werken.' },
                    { question: 'Wat is het verschil met andere cv apps?', answer: 'Naast templates krijg je ook inhoudelijke hulp, PDF-export en ondersteuning voor motivatiebrieven. Daardoor is de app bruikbaar voor een complete sollicitatie.' }
                ]
            },
            app_info: {
                name: 'CV Maker',
                alternate_name: 'CV Builder'
            },
            footer: {
                cta_text: 'Download CV Maker',
                privacy_text: 'Privacybeleid',
                terms_text: 'Gebruiksvoorwaarden',
                support_text: 'Support',
                copyright: '© 2025 c-basso. All rights reserved. | CV Maker | Professioneel cv maken met 100+ templates'
            },
            floating_cta: {
                text: '📱 Download CV Maker'
            }
        }
    },
    pl: {
        appStoreCountry: 'pl',
        geoRegion: 'PL',
        geoPlacename: 'Poland',
        currency: 'PLN',
        overrides: {
            meta: {
                title: 'Kreator CV - profesjonalne CV online | 100+ szablonów CV',
                description: 'Stwórz profesjonalne CV online z aplikacją Kreator CV. Wybieraj spośród 100+ szablonów, korzystaj z podpowiedzi i eksportuj CV do PDF na iPhone i iPad.',
                keywords: 'kreator cv, cv online, curriculum vitae, szablon cv, jak napisać cv, cv pdf, resume builder, profesjonalne cv, wzór cv',
                og_title: 'Kreator CV | 100+ szablonów profesjonalnego CV',
                og_description: 'Twórz profesjonalne CV online z aplikacją Kreator CV. Skorzystaj z 100+ szablonów, wskazówek dotyczących treści i eksportu do PDF na iPhone lub iPadzie.',
                og_locale: 'pl_PL',
                twitter_title: 'Kreator CV | 100+ szablonów profesjonalnego CV',
                twitter_description: 'Stwórz profesjonalne CV online z aplikacją Kreator CV. Wybieraj spośród 100+ szablonów, korzystaj z podpowiedzi i eksportuj CV do PDF na iPhone i iPad.'
            },
            hero: {
                logo_alt: 'Logo aplikacji Kreator CV',
                logo_text: 'Kreator CV',
                title: 'Stwórz profesjonalne CV w kilka minut',
                subtitle: 'Aplikacja do tworzenia CV na iPhone i iPad',
                subheadline: 'Kreator CV pomaga szybko przygotować profesjonalne CV do pracy, stażu lub zmiany branży. Korzystaj z 100+ szablonów, praktycznych wskazówek i eksportu PDF, aby łatwiej wysyłać aplikacje.',
                download_text: 'Pobierz Kreator CV',
                download_alt: 'Pobierz Kreator CV z App Store',
                qr_alt: 'Zeskanuj kod QR, aby pobrać Kreator CV',
                qr_cta_text: 'Zeskanuj telefonem, aby pobrać',
                learn_more_text: 'Dowiedz się więcej o Kreatorze CV',
                phone_text: 'Dotknij, aby stworzyć profesjonalne CV'
            },
            features: {
                title: 'Najważniejsze funkcje do tworzenia skutecznego CV',
                subtitle: 'Od wyboru szablonu po eksport PDF - wszystko, czego potrzebujesz do przygotowania nowoczesnego CV, znajduje się w jednej aplikacji.',
                items: [
                    { title: 'Szybkie tworzenie CV krok po kroku', description: 'Przejrzysty układ pomaga uporządkować doświadczenie, edukację i umiejętności bez problemów z formatowaniem.', icon: '⚡' },
                    { title: 'Ponad 100 szablonów CV', description: 'Wybierz nowoczesny, klasyczny lub prosty szablon i dopasuj kolory oraz czcionki do swojego stylu zawodowego.', icon: '🎨' },
                    { title: 'Wskazówki i przykłady treści', description: 'Skorzystaj z praktycznych podpowiedzi dotyczących podsumowania zawodowego, doświadczenia i osiągnięć, aby pisać jaśniej i konkretniej.', icon: '💡' },
                    { title: 'Zdjęcie, podpis i QR kod', description: 'Dodaj zdjęcie, podpis lub QR kod prowadzący do LinkedIn albo portfolio, aby CV było bardziej kompletne i nowoczesne.', icon: '📱' },
                    { title: 'Eksport CV do PDF', description: 'Zapisz gotowe CV jako PDF i wykorzystaj je do wysyłki mailowej, aplikacji online albo druku. Układ pozostaje czytelny na różnych urządzeniach.', icon: '📄' },
                    { title: 'Tworzenie listu motywacyjnego', description: 'Przygotuj list motywacyjny w tej samej stylistyce co CV, aby zbudować spójny pakiet dokumentów aplikacyjnych.', icon: '✉️' }
                ]
            },
            faq: {
                title: 'Najczęściej zadawane pytania o Kreator CV',
                subtitle: 'Odpowiedzi na pytania o tworzenie CV, szablony, PDF oraz działanie aplikacji na iPhone i iPad.',
                items: [
                    { question: 'Dlaczego warto używać tej aplikacji do tworzenia CV?', answer: 'Łączy ona gotowe szablony, pomoc w pisaniu i szybki eksport PDF. Dzięki temu łatwiej przygotować profesjonalne CV bez skomplikowanej edycji.' },
                    { question: 'Czy mogę korzystać z aplikacji bez doświadczenia w projektowaniu?', answer: 'Tak. Wystarczy wybrać szablon i uzupełnić swoje dane, a aplikacja zadba o przejrzysty układ dokumentu.' },
                    { question: 'W jakim formacie mogę zapisać CV?', answer: 'CV można zapisać jako PDF. To wygodny format do aplikowania online, wysyłania maili i drukowania.' },
                    { question: 'Czy szablony pasują do różnych branż?', answer: 'Tak. Szablony sprawdzają się zarówno w IT, marketingu, finansach, edukacji, jak i na stanowiskach juniorskich oraz specjalistycznych.' },
                    { question: 'Czy aplikacja działa na iPhone i iPadzie?', answer: 'Tak. Kreator CV został zoptymalizowany pod oba urządzenia, więc możesz pracować nad CV mobilnie.' },
                    { question: 'Czym różni się od innych kreatorów CV?', answer: 'Poza samymi szablonami oferuje też podpowiedzi do treści, eksport PDF i możliwość przygotowania spójnego listu motywacyjnego.' }
                ]
            },
            app_info: {
                name: 'Kreator CV',
                alternate_name: 'CV Builder'
            },
            footer: {
                cta_text: 'Pobierz Kreator CV',
                privacy_text: 'Polityka prywatności',
                terms_text: 'Warunki korzystania',
                support_text: 'Wsparcie',
                copyright: '© 2025 c-basso. All rights reserved. | Kreator CV | Profesjonalne CV online'
            },
            floating_cta: {
                text: '📱 Pobierz Kreator CV'
            }
        }
    },
    ro: {
        appStoreCountry: 'ro',
        geoRegion: 'RO',
        geoPlacename: 'Romania',
        currency: 'RON',
        overrides: {
            meta: {
                title: 'Creator CV - creează un CV profesional online | 100+ șabloane CV',
                description: 'Creează un CV profesional online cu aplicația Creator CV. Alege din 100+ șabloane, primești sugestii utile și exporti CV-ul în PDF pe iPhone și iPad.',
                keywords: 'creator cv, cv online, model cv, curriculum vitae, șablon cv, cv pdf, resume builder, cv profesional, exemple cv',
                og_title: 'Creator CV | 100+ șabloane pentru un CV profesional',
                og_description: 'Creează rapid un CV profesional online cu Creator CV. Alege din 100+ șabloane, folosește sugestii utile și exportă CV-ul în PDF direct de pe iPhone sau iPad.',
                og_locale: 'ro_RO',
                twitter_title: 'Creator CV | 100+ șabloane pentru un CV profesional',
                twitter_description: 'Creează un CV profesional online cu aplicația Creator CV. Alege din 100+ șabloane, primești sugestii utile și exporti CV-ul în PDF pe iPhone și iPad.'
            },
            hero: {
                logo_alt: 'Logo aplicație Creator CV',
                logo_text: 'Creator CV',
                title: 'Creează un CV profesional în doar câteva minute',
                subtitle: 'Aplicație pentru CV pe iPhone și iPad',
                subheadline: 'Creator CV te ajută să pregătești rapid un CV clar și profesionist pentru joburi, internshipuri sau schimbări de carieră. Ai la dispoziție 100+ șabloane, sfaturi de redactare și export PDF.',
                download_text: 'Descarcă Creator CV',
                download_alt: 'Descarcă Creator CV din App Store',
                qr_alt: 'Scanează codul QR pentru a descărca Creator CV',
                qr_cta_text: 'Scanează cu telefonul pentru descărcare',
                learn_more_text: 'Află mai multe despre Creator CV',
                phone_text: 'Atinge pentru a crea un CV profesional'
            },
            features: {
                title: 'Funcții esențiale pentru un CV care arată bine',
                subtitle: 'De la alegerea șablonului până la export PDF, găsești într-o singură aplicație instrumentele importante pentru CV-ul tău.',
                items: [
                    { title: 'Creare rapidă pas cu pas', description: 'Completezi experiența, educația și competențele într-un flux simplu, fără să pierzi timp cu formatarea documentului.', icon: '⚡' },
                    { title: 'Peste 100 de șabloane CV', description: 'Alege șabloane moderne, clasice sau minimaliste și personalizează culorile și fonturile pentru un aspect profesional.', icon: '🎨' },
                    { title: 'Sfaturi și exemple de redactare', description: 'Primești idei utile pentru descrierea experienței, a realizărilor și a profilului profesional, astfel încât CV-ul să fie mai clar.', icon: '💡' },
                    { title: 'Fotografie, semnătură și QR code', description: 'Poți adăuga fotografie, semnătură digitală și un QR code către LinkedIn sau portofoliu pentru un CV mai complet.', icon: '📱' },
                    { title: 'Export în PDF', description: 'Salvezi CV-ul în PDF pentru aplicări online, trimitere prin email sau print. Formatul rămâne stabil și ușor de citit.', icon: '📄' },
                    { title: 'Scrisoare de intenție inclusă', description: 'Poți crea și o scrisoare de intenție cu design similar, pentru un pachet de aplicare coerent și profesionist.', icon: '✉️' }
                ]
            },
            faq: {
                title: 'Întrebări frecvente despre Creator CV',
                subtitle: 'Răspunsuri despre crearea CV-ului, șabloane, PDF și utilizarea aplicației pe iPhone și iPad.',
                items: [
                    { question: 'De ce să folosesc această aplicație pentru CV?', answer: 'Pentru că reunește șabloane, sugestii de text și export PDF într-un proces simplu. Astfel creezi mai rapid un CV profesionist.' },
                    { question: 'Pot folosi aplicația fără experiență de design?', answer: 'Da. Alegi un șablon și completezi câmpurile necesare, iar aplicația se ocupă de structură și prezentare.' },
                    { question: 'În ce format pot salva CV-ul?', answer: 'CV-ul poate fi exportat în PDF, un format potrivit pentru trimitere online, email sau imprimare.' },
                    { question: 'Există șabloane pentru mai multe domenii?', answer: 'Da. Șabloanele sunt utile pentru roluri din business, IT, marketing, educație și multe alte domenii.' },
                    { question: 'Funcționează pe iPhone și iPad?', answer: 'Da. Aplicația este optimizată pentru ambele dispozitive, astfel încât poți lucra la CV de oriunde.' },
                    { question: 'Cu ce este diferită față de alte aplicații?', answer: 'Pe lângă șabloane, oferă ajutor pentru conținut, export PDF și suport pentru scrisoare de intenție, ceea ce o face mai practică pentru aplicări reale.' }
                ]
            },
            app_info: {
                name: 'Creator CV',
                alternate_name: 'CV Builder'
            },
            footer: {
                cta_text: 'Descarcă Creator CV',
                privacy_text: 'Politica de confidențialitate',
                terms_text: 'Termeni de utilizare',
                support_text: 'Suport',
                copyright: '© 2025 c-basso. All rights reserved. | Creator CV | Creează un CV profesional online'
            },
            floating_cta: {
                text: '📱 Descarcă Creator CV'
            }
        }
    },
    th: {
        appStoreCountry: 'th',
        geoRegion: 'TH',
        geoPlacename: 'Thailand',
        currency: 'THB',
        overrides: {
            meta: {
                title: 'แอปสร้างเรซูเม่ - สร้าง CV มืออาชีพได้ง่าย | เทมเพลตกว่า 100 แบบ',
                description: 'แอปสร้างเรซูเม่ช่วยให้คุณสร้าง CV และเรซูเม่มืออาชีพได้ง่าย เลือกเทมเพลตกว่า 100 แบบ รับคำแนะนำการเขียน และส่งออกเป็น PDF บน iPhone และ iPad',
                keywords: 'สร้างเรซูเม่, แอปสร้างเรซูเม่, สร้าง cv, เทมเพลตเรซูเม่, resume builder, เรซูเม่ pdf, ตัวอย่างเรซูเม่, cv มืออาชีพ',
                og_title: 'แอปสร้างเรซูเม่ | เทมเพลตกว่า 100 แบบสำหรับ CV มืออาชีพ',
                og_description: 'แอปสร้างเรซูเม่ช่วยให้คุณสร้าง CV และเรซูเม่มืออาชีพได้ง่าย เลือกเทมเพลตกว่า 100 แบบ ใช้คำแนะนำการเขียน และส่งออกเป็น PDF บน iPhone และ iPad ได้สะดวก',
                og_locale: 'th_TH',
                twitter_title: 'แอปสร้างเรซูเม่ | เทมเพลตกว่า 100 แบบสำหรับ CV มืออาชีพ',
                twitter_description: 'แอปสร้างเรซูเม่ช่วยให้คุณสร้าง CV และเรซูเม่มืออาชีพได้ง่าย เลือกเทมเพลตกว่า 100 แบบ รับคำแนะนำการเขียน และส่งออกเป็น PDF บน iPhone และ iPad'
            },
            hero: {
                logo_alt: 'โลโก้แอปสร้างเรซูเม่',
                logo_text: 'สร้างเรซูเม่',
                title: 'สร้างเรซูเม่และ CV ได้ในไม่กี่นาที',
                subtitle: 'แอปสร้างเรซูเม่สำหรับ iPhone และ iPad',
                subheadline: 'แอปสร้างเรซูเม่ช่วยให้คุณเตรียม CV สำหรับสมัครงานได้เร็วขึ้น ด้วยเทมเพลตกว่า 100 แบบ คำแนะนำการเขียน และการส่งออกเป็น PDF เพื่อให้ใช้งานได้จริงทั้งออนไลน์และการพิมพ์',
                download_text: 'ดาวน์โหลดแอปสร้างเรซูเม่',
                download_alt: 'ดาวน์โหลดแอปสร้างเรซูเม่จาก App Store',
                qr_alt: 'สแกน QR เพื่อดาวน์โหลดแอปสร้างเรซูเม่',
                qr_cta_text: 'สแกนด้วยโทรศัพท์เพื่อดาวน์โหลด',
                learn_more_text: 'ดูข้อมูลเพิ่มเติมเกี่ยวกับแอปสร้างเรซูเม่',
                phone_text: 'แตะเพื่อสร้างเรซูเม่มืออาชีพ'
            },
            features: {
                title: 'ฟีเจอร์สำคัญสำหรับการทำเรซูเม่ที่พร้อมสมัครงาน',
                subtitle: 'ตั้งแต่การเลือกเทมเพลตไปจนถึงการส่งออก PDF คุณสามารถทำทุกอย่างได้ในแอปเดียว',
                items: [
                    { title: 'สร้างเรซูเม่แบบเป็นขั้นตอน', description: 'กรอกประวัติการทำงาน การศึกษา และทักษะตามลำดับที่ชัดเจน จึงเหมาะทั้งสำหรับผู้เริ่มต้นและผู้มีประสบการณ์ทำงานแล้ว', icon: '⚡' },
                    { title: 'เทมเพลตกว่า 100 แบบ', description: 'มีทั้งเทมเพลตสมัยใหม่ เรียบง่าย และทางการ สามารถปรับสีและฟอนต์ให้เหมาะกับสายงานของคุณได้', icon: '🎨' },
                    { title: 'คำแนะนำการเขียนเรซูเม่', description: 'ช่วยให้คุณเขียนสรุปประสบการณ์ ความสำเร็จ และทักษะได้ชัดเจนขึ้น เพื่อให้ HR อ่านและเข้าใจได้ง่าย', icon: '💡' },
                    { title: 'เพิ่มรูป ลายเซ็น และ QR code', description: 'เพิ่มรูปโปรไฟล์ ลายเซ็นดิจิทัล หรือ QR code ไปยัง LinkedIn และพอร์ตโฟลิโอ เพื่อให้เรซูเม่ครบถ้วนยิ่งขึ้น', icon: '📱' },
                    { title: 'ส่งออกเป็น PDF คุณภาพสูง', description: 'บันทึกเรซูเม่เป็น PDF เพื่อใช้สมัครงาน ส่งอีเมล หรือพิมพ์ได้ทันที โดยรูปแบบยังคงดูเป็นมืออาชีพ', icon: '📄' },
                    { title: 'รองรับจดหมายสมัครงาน', description: 'สร้างจดหมายสมัครงานในดีไซน์เดียวกับเรซูเม่ เพื่อให้เอกสารสมัครงานของคุณดูสอดคล้องกันมากขึ้น', icon: '✉️' }
                ]
            },
            faq: {
                title: 'คำถามที่พบบ่อยเกี่ยวกับแอปสร้างเรซูเม่',
                subtitle: 'รวมคำตอบเกี่ยวกับการสร้างเรซูเม่ เทมเพลต PDF และการใช้งานบน iPhone และ iPad',
                items: [
                    { question: 'จุดเด่นของแอปนี้คืออะไร?', answer: 'แอปนี้รวมเทมเพลตจำนวนมาก คำแนะนำการเขียน และการส่งออก PDF ไว้ในขั้นตอนที่ใช้งานง่าย ทำให้สร้างเรซูเม่ได้เร็วและดูเป็นมืออาชีพ' },
                    { question: 'ไม่มีพื้นฐานด้านดีไซน์ก็ใช้ได้ไหม?', answer: 'ได้ คุณเพียงเลือกเทมเพลตและกรอกข้อมูลของคุณ แอปจะช่วยจัดเลย์เอาต์ให้เหมาะสมโดยอัตโนมัติ' },
                    { question: 'สามารถบันทึกไฟล์เป็นรูปแบบใดได้บ้าง?', answer: 'คุณสามารถส่งออกเรซูเม่เป็นไฟล์ PDF ซึ่งเหมาะสำหรับการสมัครงานออนไลน์ ส่งอีเมล และพิมพ์ใช้งาน' },
                    { question: 'มีเทมเพลตสำหรับหลายสายงานหรือไม่?', answer: 'มี เทมเพลตสามารถใช้ได้กับสายงานธุรกิจ ไอที การตลาด งานครีเอทีฟ และตำแหน่งระดับเริ่มต้นหรือระดับมืออาชีพ' },
                    { question: 'ใช้งานได้ทั้ง iPhone และ iPad หรือไม่?', answer: 'ใช่ แอปได้รับการปรับให้เหมาะกับทั้ง iPhone และ iPad เพื่อให้คุณทำเรซูเม่ได้ทุกที่' },
                    { question: 'ต่างจากแอปทำเรซูเม่อื่นอย่างไร?', answer: 'นอกจากมีเทมเพลตแล้ว ยังมีคำแนะนำด้านเนื้อหา การส่งออก PDF และการทำจดหมายสมัครงาน จึงเหมาะกับการใช้งานจริงมากกว่า' }
                ]
            },
            app_info: {
                name: 'สร้างเรซูเม่',
                alternate_name: 'CV Builder'
            },
            footer: {
                cta_text: 'ดาวน์โหลดแอปสร้างเรซูเม่',
                privacy_text: 'นโยบายความเป็นส่วนตัว',
                terms_text: 'ข้อกำหนดการใช้งาน',
                support_text: 'ฝ่ายช่วยเหลือ',
                copyright: '© 2025 c-basso. All rights reserved. | แอปสร้างเรซูเม่ | สร้าง CV มืออาชีพได้ง่าย'
            },
            floating_cta: {
                text: '📱 ดาวน์โหลดแอปสร้างเรซูเม่'
            }
        }
    },
    tr: {
        appStoreCountry: 'tr',
        geoRegion: 'TR',
        geoPlacename: 'Turkey',
        currency: 'TRY',
        overrides: {
            meta: {
                title: 'CV Oluşturucu - profesyonel CV hazırlama uygulaması | 100+ CV şablonu',
                description: 'CV Oluşturucu ile profesyonel CV hazırlayın. 100+ CV şablonu, yazım ipuçları ve PDF dışa aktarma özellikleriyle iPhone ve iPad için güçlü bir CV uygulaması.',
                keywords: 'cv oluşturucu, cv hazırlama, özgeçmiş hazırlama, cv şablonu, resume builder, profesyonel cv, pdf cv, cv örneği',
                og_title: 'CV Oluşturucu | 100+ şablonla profesyonel CV hazırlayın',
                og_description: 'CV Oluşturucu ile profesyonel CV hazırlayın. 100+ şablon, içerik önerileri ve PDF çıktısı sayesinde iPhone ve iPad üzerinde başvuru belgesi oluşturabilirsiniz.',
                og_locale: 'tr_TR',
                twitter_title: 'CV Oluşturucu | 100+ şablonla profesyonel CV hazırlayın',
                twitter_description: 'CV Oluşturucu ile profesyonel CV hazırlayın. 100+ CV şablonu, yazım ipuçları ve PDF dışa aktarma özellikleriyle iPhone ve iPad için güçlü bir CV uygulaması.'
            },
            hero: {
                logo_alt: 'CV Oluşturucu uygulama logosu',
                logo_text: 'CV Oluşturucu',
                title: 'Dakikalar içinde profesyonel CV hazırlayın',
                subtitle: 'iPhone ve iPad için CV hazırlama uygulaması',
                subheadline: 'CV Oluşturucu, iş başvuruları için düzenli ve profesyonel bir CV hazırlamanıza yardımcı olur. 100+ şablon, içerik önerileri ve PDF çıktısı ile süreci daha hızlı ve daha kolay hale getirir.',
                download_text: 'CV Oluşturucu uygulamasını indir',
                download_alt: 'CV Oluşturucu uygulamasını App Store’dan indir',
                qr_alt: 'CV Oluşturucu uygulamasını indirmek için QR kodunu tara',
                qr_cta_text: 'İndirmek için telefonunla tara',
                learn_more_text: 'CV Oluşturucu hakkında daha fazla bilgi',
                phone_text: 'Profesyonel CV hazırlamak için dokun'
            },
            features: {
                title: 'Etkili bir CV için gerekli temel özellikler',
                subtitle: 'Şablon seçiminden PDF çıktısına kadar, CV hazırlama sürecindeki ana araçlar tek bir uygulamada bulunur.',
                items: [
                    { title: 'Adım adım hızlı CV hazırlama', description: 'Deneyim, eğitim ve becerilerinizi düzenli biçimde ekleyebilir, karmaşık biçimlendirme ile uğraşmadan CV’nizi tamamlayabilirsiniz.', icon: '⚡' },
                    { title: '100+ profesyonel CV şablonu', description: 'Modern, sade veya kurumsal şablonlar arasından seçim yapın; renkleri ve yazı tiplerini kendi profilinize göre düzenleyin.', icon: '🎨' },
                    { title: 'Yazım ipuçları ve örnek içerik', description: 'Özet, iş deneyimi ve başarılar bölümlerini daha net yazmanıza yardımcı olacak öneriler sunar.', icon: '💡' },
                    { title: 'Fotoğraf, imza ve QR kod desteği', description: 'LinkedIn veya portföy bağlantıları için QR kod ekleyebilir, fotoğraf ve dijital imza ile CV’nizi zenginleştirebilirsiniz.', icon: '📱' },
                    { title: 'Yüksek kaliteli PDF dışa aktarma', description: 'Hazırladığınız CV’yi PDF olarak kaydedebilir, iş başvurularında, e-postalarda veya baskıda kullanabilirsiniz.', icon: '📄' },
                    { title: 'Ön yazı oluşturma desteği', description: 'CV’nizle aynı görsel çizgide bir ön yazı da hazırlayarak başvuru dosyanızı daha tutarlı hale getirebilirsiniz.', icon: '✉️' }
                ]
            },
            faq: {
                title: 'CV Oluşturucu hakkında sık sorulan sorular',
                subtitle: 'CV hazırlama, şablonlar, PDF dışa aktarma ve iPhone ile iPad kullanımı hakkında sık sorulan sorular.',
                items: [
                    { question: 'Bu uygulamanın en önemli avantajı nedir?', answer: 'Çok sayıda şablon, içerik önerileri ve PDF çıktısını tek akışta birleştirir. Bu sayede profesyonel bir CV’yi daha kısa sürede hazırlayabilirsiniz.' },
                    { question: 'Tasarım deneyimim yoksa kullanabilir miyim?', answer: 'Evet. Bir şablon seçip bilgilerinizi girmeniz yeterlidir. Uygulama düzen ve biçimlendirme işini sizin yerinize yapar.' },
                    { question: 'CV’mi hangi dosya formatında indirebilirim?', answer: 'CV’nizi PDF olarak dışa aktarabilirsiniz. Bu format çevrim içi başvurular, e-posta ve baskı için uygundur.' },
                    { question: 'Şablonlar farklı sektörler için uygun mu?', answer: 'Evet. Şablonlar kurumsal roller, teknoloji, pazarlama, yaratıcı işler ve başlangıç seviyesindeki pozisyonlar için uygundur.' },
                    { question: 'Uygulama iPhone ve iPad’de çalışıyor mu?', answer: 'Evet. Uygulama hem iPhone hem de iPad için optimize edilmiştir, böylece hareket halindeyken de CV’nizi düzenleyebilirsiniz.' },
                    { question: 'Diğer CV uygulamalarından farkı nedir?', answer: 'Sadece şablon sunmakla kalmaz; içerik yazımı için destek, PDF çıktısı ve ön yazı hazırlama imkanı da sağlar. Bu da gerçek başvuru sürecinde daha kullanışlı olmasını sağlar.' }
                ]
            },
            app_info: {
                name: 'CV Oluşturucu',
                alternate_name: 'CV Builder'
            },
            footer: {
                cta_text: 'CV Oluşturucu uygulamasını indir',
                privacy_text: 'Gizlilik Politikası',
                terms_text: 'Kullanım Koşulları',
                support_text: 'Destek',
                copyright: '© 2025 c-basso. All rights reserved. | CV Oluşturucu | Profesyonel CV hazırlama uygulaması'
            },
            floating_cta: {
                text: '📱 CV Oluşturucu uygulamasını indir'
            }
        }
    },
    uk: {
        appStoreCountry: 'ua',
        geoRegion: 'UA',
        geoPlacename: 'Ukraine',
        currency: 'UAH',
        overrides: {
            meta: {
                title: 'Конструктор резюме - створити професійне CV онлайн | 100+ шаблонів резюме',
                description: 'Створюйте професійне резюме та CV онлайн з Конструктором резюме. 100+ шаблонів, поради щодо тексту та експорт у PDF для iPhone і iPad.',
                keywords: 'конструктор резюме, створити резюме, cv онлайн, шаблон резюме, резюме pdf, resume builder, професійне резюме, приклади резюме',
                og_title: 'Конструктор резюме | 100+ шаблонів для професійного CV',
                og_description: 'Створюйте професійне резюме та CV онлайн з Конструктором резюме. Використовуйте 100+ шаблонів, поради щодо заповнення та експорт у PDF на iPhone або iPad.',
                og_locale: 'uk_UA',
                twitter_title: 'Конструктор резюме | 100+ шаблонів для професійного CV',
                twitter_description: 'Створюйте професійне резюме та CV онлайн з Конструктором резюме. 100+ шаблонів, поради щодо тексту та експорт у PDF для iPhone і iPad.'
            },
            hero: {
                logo_alt: 'Логотип застосунку Конструктор резюме',
                logo_text: 'Конструктор резюме',
                title: 'Створіть професійне резюме за кілька хвилин',
                subtitle: 'Застосунок для створення CV на iPhone та iPad',
                subheadline: 'Конструктор резюме допомагає швидко підготувати сучасне CV для пошуку роботи, стажування чи зміни кар’єри. Використовуйте 100+ шаблонів, поради щодо тексту та експорт у PDF, щоб швидше подаватися на вакансії.',
                download_text: 'Завантажити Конструктор резюме',
                download_alt: 'Завантажити Конструктор резюме з App Store',
                qr_alt: 'Скануйте QR-код, щоб завантажити Конструктор резюме',
                qr_cta_text: 'Скануйте телефоном, щоб завантажити',
                learn_more_text: 'Дізнатися більше про Конструктор резюме',
                phone_text: 'Натисніть, щоб створити професійне резюме'
            },
            features: {
                title: 'Усе необхідне для сильного резюме в одному застосунку',
                subtitle: 'Від вибору шаблону до експорту у PDF - тут є ключові інструменти для створення якісного CV.',
                items: [
                    { title: 'Швидке створення резюме крок за кроком', description: 'Зручно додавайте досвід, освіту та навички без складного форматування. Навіть новачкам легко створити охайне резюме.', icon: '⚡' },
                    { title: 'Понад 100 шаблонів резюме', description: 'Оберіть сучасний, лаконічний або діловий шаблон і налаштуйте кольори та шрифти відповідно до вашого стилю.', icon: '🎨' },
                    { title: 'Поради та приклади формулювань', description: 'Отримуйте підказки для опису досвіду, досягнень і професійного профілю, щоб зробити CV змістовнішим та зрозумілішим.', icon: '💡' },
                    { title: 'Фото, підпис і QR-код', description: 'Додавайте фото, цифровий підпис або QR-код на LinkedIn чи портфоліо, щоб резюме виглядало сучасніше.', icon: '📱' },
                    { title: 'Експорт у PDF', description: 'Зберігайте готове резюме у PDF для відправки роботодавцям, завантаження на сайти пошуку роботи або друку.', icon: '📄' },
                    { title: 'Супровідний лист у тому ж стилі', description: 'Створюйте супровідний лист з узгодженим дизайном, щоб ваша заявка виглядала цілісно та професійно.', icon: '✉️' }
                ]
            },
            faq: {
                title: 'Поширені запитання про Конструктор резюме',
                subtitle: 'Відповіді на запитання про створення CV, шаблони, PDF та використання застосунку на iPhone й iPad.',
                items: [
                    { question: 'Чому цей застосунок підходить для створення резюме?', answer: 'Він поєднує шаблони, підказки для тексту та експорт у PDF в одному простому процесі. Це допомагає швидше створити професійне CV.' },
                    { question: 'Чи можна користуватися без досвіду в дизайні?', answer: 'Так. Потрібно лише вибрати шаблон і заповнити свої дані, а застосунок подбає про зрозумілу структуру документа.' },
                    { question: 'У якому форматі можна зберегти резюме?', answer: 'Готове резюме можна експортувати у PDF. Це зручний формат для онлайн-відгуків, електронної пошти та друку.' },
                    { question: 'Чи є шаблони для різних професій?', answer: 'Так. Шаблони підходять для бізнесу, ІТ, маркетингу, освіти, креативних напрямів та різних рівнів досвіду.' },
                    { question: 'Чи працює застосунок на iPhone і iPad?', answer: 'Так. Конструктор резюме оптимізований для обох пристроїв, тому ви можете редагувати CV будь-де.' },
                    { question: 'Чим він відрізняється від інших конструкторів CV?', answer: 'Окрім шаблонів, ви отримуєте допомогу з текстом, експорт у PDF та підтримку супровідного листа. Це робить застосунок корисним для повного пакета документів.' }
                ]
            },
            app_info: {
                name: 'Конструктор резюме',
                alternate_name: 'CV Builder'
            },
            footer: {
                cta_text: 'Завантажити Конструктор резюме',
                privacy_text: 'Політика конфіденційності',
                terms_text: 'Умови використання',
                support_text: 'Підтримка',
                copyright: '© 2025 c-basso. All rights reserved. | Конструктор резюме | Професійне CV онлайн'
            },
            floating_cta: {
                text: '📱 Завантажити Конструктор резюме'
            }
        }
    },
    vi: {
        appStoreCountry: 'vn',
        geoRegion: 'VN',
        geoPlacename: 'Vietnam',
        currency: 'VND',
        overrides: {
            meta: {
                title: 'Trình tạo CV - tạo CV chuyên nghiệp online | 100+ mẫu CV',
                description: 'Tạo CV chuyên nghiệp online với Trình tạo CV. Chọn từ hơn 100 mẫu CV, nhận gợi ý nội dung và xuất PDF trên iPhone và iPad.',
                keywords: 'trình tạo cv, tạo cv online, mẫu cv, resume builder, cv chuyên nghiệp, cv pdf, hồ sơ xin việc, cv đẹp',
                og_title: 'Trình tạo CV | 100+ mẫu CV chuyên nghiệp',
                og_description: 'Tạo CV chuyên nghiệp online với Trình tạo CV. Sử dụng hơn 100 mẫu CV, gợi ý viết nội dung và xuất PDF nhanh chóng trên iPhone hoặc iPad để sẵn sàng ứng tuyển.',
                og_locale: 'vi_VN',
                twitter_title: 'Trình tạo CV | 100+ mẫu CV chuyên nghiệp',
                twitter_description: 'Tạo CV chuyên nghiệp online với Trình tạo CV. Chọn từ hơn 100 mẫu CV, nhận gợi ý nội dung và xuất PDF trên iPhone và iPad.'
            },
            hero: {
                logo_alt: 'Logo ứng dụng Trình tạo CV',
                logo_text: 'Trình tạo CV',
                title: 'Tạo CV chuyên nghiệp chỉ trong vài phút',
                subtitle: 'Ứng dụng tạo CV cho iPhone và iPad',
                subheadline: 'Trình tạo CV giúp bạn chuẩn bị CV chuyên nghiệp cho xin việc, thực tập hoặc chuyển nghề nhanh hơn. Ứng dụng cung cấp hơn 100 mẫu CV, gợi ý nội dung và xuất PDF để bạn dễ dàng nộp hồ sơ.',
                download_text: 'Tải Trình tạo CV',
                download_alt: 'Tải Trình tạo CV trên App Store',
                qr_alt: 'Quét mã QR để tải Trình tạo CV',
                qr_cta_text: 'Quét bằng điện thoại để tải xuống',
                learn_more_text: 'Tìm hiểu thêm về Trình tạo CV',
                phone_text: 'Chạm để tạo CV chuyên nghiệp'
            },
            features: {
                title: 'Các tính năng cần thiết để tạo CV ấn tượng',
                subtitle: 'Từ chọn mẫu đến xuất PDF, mọi công cụ quan trọng để làm CV đều có trong một ứng dụng.',
                items: [
                    { title: 'Tạo CV nhanh theo từng bước', description: 'Điền kinh nghiệm, học vấn và kỹ năng theo luồng rõ ràng, giúp bạn hoàn thành CV mà không cần xử lý bố cục phức tạp.', icon: '⚡' },
                    { title: 'Hơn 100 mẫu CV', description: 'Chọn mẫu hiện đại, tối giản hoặc chuyên nghiệp và tùy chỉnh màu sắc, phông chữ theo ngành nghề của bạn.', icon: '🎨' },
                    { title: 'Gợi ý nội dung thực tế', description: 'Nhận gợi ý để viết phần giới thiệu, kinh nghiệm và thành tích rõ ràng hơn, giúp CV thuyết phục nhà tuyển dụng.', icon: '💡' },
                    { title: 'Thêm ảnh, chữ ký và QR code', description: 'Bạn có thể thêm ảnh hồ sơ, chữ ký số hoặc QR code tới LinkedIn hay portfolio để hồ sơ nổi bật hơn.', icon: '📱' },
                    { title: 'Xuất PDF chất lượng cao', description: 'Lưu CV dưới dạng PDF để gửi email, nộp lên website tuyển dụng hoặc in ấn mà vẫn giữ bố cục đẹp.', icon: '📄' },
                    { title: 'Hỗ trợ thư xin việc', description: 'Tạo thư xin việc cùng phong cách với CV để bộ hồ sơ ứng tuyển của bạn đồng nhất và chuyên nghiệp hơn.', icon: '✉️' }
                ]
            },
            faq: {
                title: 'Câu hỏi thường gặp về Trình tạo CV',
                subtitle: 'Giải đáp về tạo CV, mẫu CV, PDF và cách sử dụng ứng dụng trên iPhone và iPad.',
                items: [
                    { question: 'Vì sao nên dùng ứng dụng này để tạo CV?', answer: 'Ứng dụng kết hợp nhiều mẫu CV, gợi ý nội dung và xuất PDF trong một quy trình đơn giản. Nhờ vậy bạn có thể tạo CV chuyên nghiệp nhanh hơn.' },
                    { question: 'Tôi không có kinh nghiệm thiết kế thì có dùng được không?', answer: 'Có. Bạn chỉ cần chọn mẫu và điền thông tin, ứng dụng sẽ hỗ trợ phần bố cục và trình bày.' },
                    { question: 'Tôi có thể lưu CV ở định dạng nào?', answer: 'Bạn có thể xuất CV dưới dạng PDF. Đây là định dạng phù hợp để ứng tuyển online, gửi email và in ra.' },
                    { question: 'Các mẫu có phù hợp với nhiều ngành nghề không?', answer: 'Có. Các mẫu phù hợp với kinh doanh, công nghệ, marketing, sáng tạo và nhiều cấp độ kinh nghiệm khác nhau.' },
                    { question: 'Ứng dụng có dùng được trên iPhone và iPad không?', answer: 'Có. Trình tạo CV được tối ưu cho cả iPhone và iPad để bạn có thể chỉnh sửa CV mọi lúc.' },
                    { question: 'Ứng dụng khác gì so với các công cụ tạo CV khác?', answer: 'Ngoài mẫu CV, bạn còn có gợi ý viết nội dung, xuất PDF và hỗ trợ thư xin việc, nên phù hợp hơn cho quá trình ứng tuyển thực tế.' }
                ]
            },
            app_info: {
                name: 'Trình tạo CV',
                alternate_name: 'CV Builder'
            },
            footer: {
                cta_text: 'Tải Trình tạo CV',
                privacy_text: 'Chính sách quyền riêng tư',
                terms_text: 'Điều khoản sử dụng',
                support_text: 'Hỗ trợ',
                copyright: '© 2025 c-basso. All rights reserved. | Trình tạo CV | Tạo CV chuyên nghiệp online'
            },
            floating_cta: {
                text: '📱 Tải Trình tạo CV'
            }
        }
    },
    cn: {
        appStoreCountry: 'cn',
        geoRegion: 'CN',
        geoPlacename: 'China',
        currency: 'CNY',
        overrides: {
            meta: {
                title: '简历制作器 - 在线制作专业简历和CV | 100+ 简历模板',
                description: '使用简历制作器在线创建专业简历和CV。提供100多种模板、写作建议和PDF导出功能，适用于iPhone和iPad求职使用。',
                keywords: '简历制作, 简历模板, 在线简历, CV 制作, 简历生成器, resume builder, 求职简历, PDF 简历, 专业简历',
                og_title: '简历制作器 | 100+ 模板快速创建专业简历',
                og_description: '使用简历制作器在线创建专业简历和CV。提供100多种模板、内容写作建议和PDF导出功能，让你在iPhone和iPad上更高效地准备求职简历、实习申请材料，并生成适合投递、邮件发送、打印、长期更新、持续优化和反复调整的专业版本。',
                og_locale: 'zh_CN',
                twitter_title: '简历制作器 | 100+ 模板快速创建专业简历',
                twitter_description: '使用简历制作器在线创建专业简历和CV。提供100多种模板、写作建议和PDF导出功能，适用于iPhone和iPad求职使用。'
            },
            hero: {
                logo_alt: '简历制作器应用标志',
                logo_text: '简历制作器',
                title: '几分钟内完成专业简历与CV',
                subtitle: '适用于 iPhone 和 iPad 的简历制作应用',
                subheadline: '简历制作器帮助你更快完成求职简历。应用提供100多种模板、内容写作建议和PDF导出功能，适合求职、跳槽、实习申请等多种场景。',
                download_text: '下载简历制作器',
                download_alt: '在 App Store 下载简历制作器',
                qr_alt: '扫描二维码下载简历制作器',
                qr_cta_text: '用手机扫描即可下载',
                learn_more_text: '了解更多简历制作器信息',
                phone_text: '轻点即可创建专业简历'
            },
            features: {
                title: '制作高质量简历所需的核心功能',
                subtitle: '从选择模板到导出 PDF，制作专业简历需要的关键工具都集成在一个应用中。',
                items: [
                    { title: '分步骤快速制作简历', description: '按照清晰的流程填写工作经历、教育背景和技能，无需手动处理复杂排版，也能快速完成简历。', icon: '⚡' },
                    { title: '100 多种简历模板', description: '提供现代、简洁、商务等多种模板风格，并支持调整颜色和字体，适配不同行业与职位需求。', icon: '🎨' },
                    { title: '写作建议与示例', description: '帮助你优化个人简介、工作经历和成果描述，让简历内容更清晰、更有说服力。', icon: '💡' },
                    { title: '支持照片、签名和二维码', description: '可添加头像、电子签名和指向 LinkedIn 或作品集的二维码，提升简历完整度和现代感。', icon: '📱' },
                    { title: '高质量导出 PDF', description: '完成后的简历可导出为 PDF，方便投递、邮件发送和打印，版式在不同设备上也能保持稳定。', icon: '📄' },
                    { title: '支持求职信制作', description: '除了简历外，还可以创建与简历风格一致的求职信，方便整理完整的求职资料。', icon: '✉️' }
                ]
            },
            faq: {
                title: '关于简历制作器的常见问题',
                subtitle: '这里汇总了关于简历制作、模板、PDF 导出以及 iPhone 和 iPad 使用方式的常见问题。',
                items: [
                    { question: '这款简历应用的优势是什么？', answer: '它将模板、写作建议和 PDF 导出整合到一个简单流程中，帮助你更快做出专业简历。' },
                    { question: '没有设计经验也能使用吗？', answer: '可以。你只需要选择模板并填写内容，应用会帮助你完成版式整理和结构呈现。' },
                    { question: '简历可以导出为哪种格式？', answer: '你可以将简历导出为 PDF。这个格式适合在线投递、邮件发送和打印使用。' },
                    { question: '模板适合不同岗位和行业吗？', answer: '适合。模板覆盖商务、技术、市场、教育、创意等多种岗位和不同职业阶段。' },
                    { question: '应用支持 iPhone 和 iPad 吗？', answer: '支持。简历制作器已针对 iPhone 和 iPad 做了优化，方便你随时编辑和导出简历。' },
                    { question: '和其他简历工具相比有什么区别？', answer: '除了模板外，它还提供内容写作建议、PDF 导出和求职信支持，更适合真正用于求职投递。' }
                ]
            },
            app_info: {
                name: '简历制作器',
                alternate_name: 'CV Builder'
            },
            footer: {
                cta_text: '下载简历制作器',
                privacy_text: '隐私政策',
                terms_text: '使用条款',
                support_text: '支持',
                copyright: '© 2025 c-basso. All rights reserved. | 简历制作器 | 在线制作专业简历和CV'
            },
            floating_cta: {
                text: '📱 下载简历制作器'
            }
        }
    }
};

function main() {
    const baseDocument = stripAlternateMetaFields(readJson(BASE_LOCALE_PATH));

    for (const [code, config] of Object.entries(LOCALES)) {
        const filePath = path.join(__dirname, `${code}.json`);
        const document = createLocaleDocument(baseDocument, code, config);
        writeJson(filePath, document);
        console.log(`Generated ${path.basename(filePath)}`);
    }
}

main();
