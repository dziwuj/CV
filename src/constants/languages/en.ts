import { ITranslations } from '../../interfaces/languages';
export const translations: ITranslations = {
    overlay: {
        download: 'Download CV',
        changeLanguage: 'Change language:',
    },
    about: {
        title: 'Who am I?',
        description:
            'I am an ambitious computer science student passionate about developing web and mobile applications. I have a keen interest in electronics, game design, and the broader world of IT, and I enjoy exploring interesting topics and experimenting with new tools. Energetic and outgoing by nature, I like discussing ideas, exchanging insights, and contributing to team projects. I thrive on analyzing problems and finding optimal solutions, and my curiosity and enthusiasm drive me to continuously expand my knowledge and skills.',
    },
    contact: {
        title: 'Contact',
        address: 'ul. Cegielniana 24/3 <br /> 30-404 Cracow',
        email: 'sobeckizbyszko@gmail.com',
        phone: '+48 600 019 322',
    },
    skills: {
        title: 'Skills',
        list: `<li><strong>Frontend:</strong> HTML5, CSS3 (Sass, Less, Bootstrap), JavaScript/TypeScript</li>
            <li><strong>Frameworks and libraries:</strong> React, Next.js, Astro, Vue, React Native, Redux, MobX, Zustand, Three.js jQuery, Leaflet, GSAP</li>
            <li><strong>Backend:</strong> Node.js, Express, Socket.io, REST APIs</li>
            <li><strong>Progressive Web Apps (PWA):</strong> Service Workers, IndexedDB, Web Push</li>
            <li><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, IndexedDB</li>
            <li><strong>Tools:</strong> Webpack, Parcel, Rollup, GitHub, SVN</li>
            <li><strong>Operating systems:</strong> Windows, Linux, Windows Server (2008/2012) – Intermediate</li>
            <li><strong>Office suite:</strong> Microsoft Office (Excel, Word, Access, PowerPoint) – Intermediate</li>
            <li><strong>Basics of languages:</strong> Python, C++, PHP, Batch, Shell</li>`,
    },
    languages: {
        title: 'Languages',
        list: `<li>Polish - native</li><li>English - B2</li>`,
    },
    experience: {
        title: 'Experience',
        firstJob: {
            company: 'Futurum Technology Ltd.',
            position: 'Fullstack Developer',
            dates: 'from April 2025 to now',
            description:
                'Creating Progressive Web Applications (PWA) using Typescript React 19 with Redux, service workers and IndexedDB to maximalize offline capabilites. For backend used Express with PostgreSQL and implemented push notifications system.',
        },
        secondJob: {
            company: 'Pluscode',
            position: 'Frontend Developer',
            dates: 'from July 2023 to November 2023',
            description:
                'Made websites using React and Astro. While working for this company I was also exposed to creating a browser plugin dealing with scraping. I also had the opportunity to work on advanced animations using GSAP.',
        },
        thirdJob: {
            company: 'Endurance Systems LLC',
            position: 'Frontend Developer',
            dates: 'from July 2022 to October 2022',
            description:
                'Working with large JSON/GeoJSON files. During my time in this company I used technologies like TypeScript, React 18, Rollup, different map libraries and SVN as version control system. I also wrote a slider at the time, which is available for download on npm.',
        },
    },
    education: {
        title: 'Education',
        school: 'Technical Highschool of Communications No. 14 in Krakow',
        dates: 'September 2018 - May 2022',
        firstExam: 'EE.08 Exam 90%/100% (theory/practice)',
        secondExam: 'EE.09 Exam 90%/98% (theory/practice)',
        university: 'Cracow University of Technology',
        universityDates: 'September 2022 - now',
        universityDescription: `Faculty of Applied Computer Science`,
    },
    courses: {
        title: 'Projects and Courses',
        firstCourse: {
            title: `2nd place at "Kościuszkon" hackathon`,
            description:
                'During the hackathon, we created the GreenJob app in 24 hours – a tool supporting an eco-friendly approach to energy management through intelligent task scheduling',
        },
        secondCourse: {
            title: 'Developing start-up',
            description:
                'Development of my own start-up in the SEED project. Cracow',
        },
        thirdCourse: {
            title: 'AutoCAD course',
            description:
                'AutoCAD 2018 2D course as part of additional classes at school',
        },
    },
};
