import React, { useContext } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "..";

const Education = observer(() => {
    const store = useContext(StoreContext);
    const { education } = store.TranslationsStore.translations;
    return (
        <div className="education">
            <h1>{education.title}</h1>

            <h2>{education.university}</h2>
            <h3>{education.universityDates}</h3>
            <h4>{education.universityDescription}</h4>

            <h2>{education.school}</h2>
            <h3>{education.dates}</h3>
            <h4>{education.firstExam}</h4>
            <h4>{education.secondExam}</h4>
        </div>
    );
});

export { Education };
