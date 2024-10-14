import { ITranslations } from '../../interfaces/languages'
export const translations: ITranslations = {
    overlay: {
        download: 'Download CV',
        changeLanguage: 'Change language:',
    },
    about: {
        title: 'Who am I?',
        description:
            'I am an ambitious student looking for new challenges. I am interested in electronics, psychology, game design and video editing. Additionally, I am a very communicative and open person, which is why I enjoy traveling, meeting new people and broadening my horizons. I love analyzing problems and solving them in the best, most optimal way.',
    },
    contact: {
        title: 'Contact',
        address: 'ul. Cegielniana 24/3 <br /> 30-404 Cracow',
        email: 'sobeckizbyszko@gmail.com',
        phone: '+48 600 019 322',
    },
    skills: {
        title: 'Skills',
        list: `<li>HTML5/CSS3 (Sass, Less, Bootstrap)</li>
        <li>JavaScript/TypeScript (React, React Native, Vue, Socket.io, Node, jQuery, Leaflet, Mobx, Next, Astro)</li>
        <li>Module bundlers (Webpack, Parcel, Rollup)</li>
        <li>Version control systems (Github, SVN)</li>
        <li>Databases (MySQL, PostgreSQL, MongoDB)</li>
        <li>Usage of operating systems (Windows, Linux, Windows Server 2008/2012) - Intermediate</li>
        <li>Usage of Microsoft Office (Excel, Word, Access, Powerpoint) - Intermediate</li>
        <li>Basics of Python, PHP, Batch, Shell</li>`,
    },
    languages: {
        title: 'Languages',
        list: `<li>Polish - native</li><li>English - C1</li>`,
    },
    experience: {
        title: 'Experience',
        firstJob: {
            company: 'Żabka Polska',
            position: 'Cashier/Salesman',
            dates: 'December 2023 to present',
            description:
                'My responsibilities included operating the cash register, payment terminal, checking product expiry dates, changing promotions, handling deliveries and keeping the shop clean. I also developed skills in customer service, time management and teamwork.',
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
        title: 'Certificates and courses',
        firstCourse: {
            title: 'Up-to-date sanitary-epidemiological tests',
            description: 'Completion of sanitary-epidemiological tests for work in contact with food',
        },
        secondCourse: {
            title: 'Developing start-up',
            description: 'Development of my own start-up in the SEED project. Cracow',
        },
        thirdCourse: {
            title: `Erasmus+ Youth Exchange "Can I join you?"`,
            description: 'Taking a part in Erasmus+ project in Store Klaus, Denmark<br /> (31 May - 08 June, 2022)',
        },
    },
}
