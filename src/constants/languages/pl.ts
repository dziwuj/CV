import { ITranslations } from '../../interfaces/languages'
export const translations: ITranslations = {
    overlay: {
        download: 'Pobierz CV',
        changeLanguage: 'Zmień język:',
    },
    about: {
        title: 'Kim jestem?',
        description:
            'Jestem ambitnym studentem szukającym nowych wyzwań. Interesuję się elektroniką, psychologią, projektowaniem gier oraz montażem wideo. Dodatkowo jestem osobą bardzo komunikatywną i otwartą, dlatego lubię podróżować, poznawać nowych ludzi i poszerzać swoje horyzonty. Uwielbiam analizować problemy i rozwiązywać je w najlepszy, optymalny sposób.',
    },
    contact: {
        title: 'Kontakt',
        address: 'ul. Cegielniana 24/3 <br /> 30-404 Kraków',
        email: 'sobeckizbyszko@gmail.com',
        phone: '+48 600 019 322',
    },
    skills: {
        title: 'Umiejętności',
        list: `<li>HTML5/CSS3 (Sass, Less, Bootstrap)</li>
          <li>JavaScript/TypeScript (React, React Native, Vue, Socket.io, Node, jQuery, Leaflet, Mobx, Next, Astro)</li>
          <li>Module bundlers (Webpack, Parcel, Rollup)</li>
          <li>Systemy kontroli wersji (Github, SVN)</li>
          <li>Bazy danych (MySQL, PostgreSQL, MongoDB)</li>
          <li>Obsługa systemów operacyjnych (Windows, Linux, Windows Server 2008/2012) - Intermediate</li>
          <li>Obsługa aplikacji pakietu Microsoft Office (Excel, Word, Access, Powerpoint) - Intermediate</li>
          <li>Podstawy języków Python, PHP, Batch, Shell</li>`,
    },
    languages: {
        title: 'Języki',
        list: `<li>Polski - ojczysty</li><li>Angielski - C1</li>`,
    },
    experience: {
        title: 'Doświadczenie',
        firstJob: {
            company: 'Żabka Polska',
            position: 'Kasjer/Sprzedawca',
            dates: 'od grudnia 2023 do obecnie',
            description:
                'Do moich obowiązków należało m.in. obsługa kasy fiskalnej, terminala płatniczego, sprawdzanie terminów ważności produktów, zmiana promocji, obsługa dostaw i dbanie o czystość sklepu. Rozwinąłem również umiejętności w zakresie obsługi klienta, zarządzania czasem oraz pracy zespołowej.',
        },
        secondJob: {
            company: 'Pluscode',
            position: 'Frontend Developer',
            dates: 'od lipca 2023 do listopada 2023',
            description:
                "Tworzenie stron internetowych przy użyciu React'a i Astro. Podczas pracy w tej firmie miałem też styczność z tworzeniem wtyczki przeglądarki zajmującej się scrapingiem. Miałem również okazję popracować nad zaawansowanymi animacjami z użyciem GSAP.",
        },
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
        title: 'Certyfikaty i szkolenia',
        firstCourse: {
            title: 'Aktualne badania sanitarno-epidemiologiczne',
            description: 'Wykonanie badań  sanitarno-epidemiologicznych na potrzeby pracy w kontakcie z żywnością',
        },
        secondCourse: {
            title: 'Rozwój start-upu',
            description: 'Rozwój własnego start-upu w ramach projektu fundacji SEED Kraków',
        },
        thirdCourse: {
            title: `Wymiana młodzieży w ramach programu Erasmus+ "Can I join you?"`,
            description: 'Udział w projekcie Erasmus+ w Store Klaus, Dania <br /> (31 maja - 08 czerwca, 2022)',
        },
    },
}
