import { ITranslations } from '../../interfaces/languages';
export const translations: ITranslations = {
    overlay: {
        download: 'Pobierz CV',
        changeLanguage: 'Zmień język:',
    },
    about: {
        title: 'Kim jestem?',
        description:
            'Jestem ambitnym studentem informatyki, zafascynowanym tworzeniem aplikacji webowych i mobilnych. Interesuję się elektroniką, projektowaniem gier oraz szeroko pojętym światem IT, lubię zgłębiać różne ciekawostki i eksperymentować z nowymi narzędziami. Cechuje mnie duża energia i otwartość – chętnie rozmawiam o pomysłach, wymieniam się doświadczeniami i angażuję w projekty zespołowe. Uwielbiam analizować problemy i znajdować optymalne rozwiązania, a ciekawość i entuzjazm sprawiają, że ciągle poszerzam swoje horyzonty i uczę się nowych rzeczy.',
    },
    contact: {
        title: 'Kontakt',
        address: 'ul. Cegielniana 24/3 <br /> 30-404 Kraków',
        email: 'sobeckizbyszko@gmail.com',
        phone: '+48 600 019 322',
    },
    skills: {
        title: 'Umiejętności',
        list: `<li><strong>Frontend:</strong> HTML5, CSS3 (Sass, Less, Bootstrap), JavaScript/TypeScript</li>
            <li><strong>Frameworki i biblioteki:</strong> React, Next.js, Astro, Vue, React Native, Redux, MobX, Zustand, jQuery, Leaflet, GSAP</li>
            <li><strong>Backend:</strong> Node.js, Express, Socket.io, REST API</li>
            <li><strong>Progresywne Aplikacje Internetowe (PWA):</strong> Service Workery, IndexedDB, Web Push</li>
            <li><strong>Bazy danych:</strong> PostgreSQL, MySQL, MongoDB, IndexedDB</li>
            <li><strong>Narzędzia:</strong> Webpack, Parcel, Rollup, GitHub, SVN</li>
            <li><strong>Systemy operacyjne:</strong> Windows, Linux, Windows Server (2008/2012) – średniozaawansowany</li>
            <li><strong>Pakiet biurowy:</strong> Microsoft Office (Excel, Word, Access, PowerPoint) – średniozaawansowany</li>
            <li><strong>Podstawy języków:</strong> Python, C++, PHP, Batch, Shell</li>`,
    },
    languages: {
        title: 'Języki',
        list: `<li>Polski - ojczysty</li><li>Angielski - B2</li>`,
    },
    experience: {
        firstJob: {
            company: 'Futurum Technology Ltd.',
            position: 'Fullstack Developer',
            dates: 'od kwietnia 2025 do teraz',
            description:
                "Tworzenie Progresywanych Aplikacji Internetowych (PWA) przy użyciu Typescript React 19 z Redux'em, service worker'ów i IndexedDB w celu maksymalizacji funkcjonalności offline. Po stronie serwera używałem Express'a z PostgreSQL oraz wdrożyłem system powiadomień push.",
        },
        secondJob: {
            company: 'Pluscode',
            position: 'Frontend Developer',
            dates: 'od lipca 2023 do listopada 2023',
            description:
                "Tworzenie stron internetowych przy użyciu React'a i Astro. Podczas pracy w tej firmie miałem też styczność z tworzeniem wtyczki przeglądarki zajmującej się scrapingiem. Miałem również okazję popracować nad zaawansowanymi animacjami z użyciem GSAP.",
        },
        title: 'Doświadczenie',
        thirdJob: {
            company: 'Endurance Systems LLC',
            position: 'Frontend Developer',
            dates: 'od lipca 2022 do października 2022',
            description:
                'Praca z dużymi plikami JSON/GeoJSON. Podczas mojego pobytu w tej firmie korzystałem z takich technologii jak React 18, Rollup, różnych bibliotek do obsługi map i SVN jako systemu kontroli wersji. Napisałem wtedy również slider, który jest udostępniony do pobrania na npm.',
        },
    },
    education: {
        title: 'Edukacja',
        school: 'Technikum Łączności nr 14 w Krakowie',
        dates: 'wrzesień 2018 - maj 2022',
        firstExam: 'Egzamin EE.08 90%/100% (teoria/praktyka)',
        secondExam: 'Egzamin EE.09 90%/98% (teoria/praktyka)',
        university: 'Politechnika Krakowska',
        universityDates: 'wrzesień 2022 - obecnie',
        universityDescription: `Studia na kierunku Informatyka Stosowana`,
    },
    courses: {
        title: 'Projekty i szkolenia',
        firstCourse: {
            title: `Zajęcie 2. miejsca w hackathon'ie "Kościuszkon"`,
            description:
                'Podczas hackathonu stworzyliśmy w 24 godziny aplikację GreenJob – narzędzie wspierające ekologiczne podejście do zarządzania energią poprzez inteligentne planowanie zadań',
        },
        secondCourse: {
            title: 'Rozwój start-upu',
            description:
                'Rozwój własnego start-upu w ramach projektu fundacji SEED Kraków',
        },
        thirdCourse: {
            title: 'Kurs AutoCAD',
            description:
                'Kurs AutoCAD 2018 2D w ramach dodatkowych zajęć w szkole',
        },
    },
};
