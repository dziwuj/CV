import React, { useContext } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "..";

const Courses: React.FunctionComponent = observer(() => {
    const store = useContext(StoreContext);
    const { courses } = store.TranslationsStore.translations;
    return (
        <div className="courses">
            <h1>{courses.title}</h1>

            <h2>{courses.firstCourse.title}</h2>
            <h3>{courses.firstCourse.description}</h3>

            <h2>{courses.secondCourse.title}</h2>
            <h3>{courses.secondCourse.description}</h3>

            <h2>{courses.thirdCourse.title}</h2>
            <h3 dangerouslySetInnerHTML={{ __html: courses.thirdCourse.description }}></h3>
        </div>
    );
});

export { Courses };
