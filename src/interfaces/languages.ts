export interface ITranslations {
    overlay: {
        download: string;
    };
    about: {
        title: string;
        description: string;
    };
    contact: {
        title: string;
        address: string;
        phone: string;
        email: string;
    };
    skills: {
        title: string;
        list: string;
    };
    languages: {
        title: string;
        list: string;
    };
    experience: {
        title: string;
        firstJob: IJob;
        secondJob: IJob;
        thirdJob: IJob;
    };
    education: {
        title: string;
        school: string;
        dates: string;
        firstExam: string;
        secondExam: string;
    };
    courses: {
        title: string;
        firstCourse: ICourse;
        secondCourse: ICourse;
        thirdCourse: ICourse;
    };
}

interface IJob {
    company: string;
    position: string;
    dates: string;
    description: string;
}

interface ICourse {
    title: string;
    description: string;
}
