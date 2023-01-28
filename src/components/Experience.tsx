import React, { useContext } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "..";

const Experience: React.FunctionComponent = observer(() => {
    const store = useContext(StoreContext);
    const { experience } = store.TranslationsStore.translations;
    return (
        <div className="experience">
            <h1>{experience.title}</h1>

            <h2>{experience.firstJob.company}</h2>
            <h3>
                {experience.firstJob.position} - {experience.firstJob.dates}
            </h3>
            <p>{experience.firstJob.description}</p>

            <h2>{experience.secondJob.company}</h2>
            <h3>
                {experience.secondJob.position} - {experience.secondJob.dates}
            </h3>
            <p>{experience.secondJob.description}</p>

            <h2>{experience.thirdJob.company}</h2>
            <h3>
                {experience.thirdJob.position} - {experience.thirdJob.dates}
            </h3>
            <p>{experience.thirdJob.description}</p>
        </div>
    );
});

export { Experience };
