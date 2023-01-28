import React, { useContext } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "..";

const Skills = observer(() => {
    const store = useContext(StoreContext);
    const { skills } = store.TranslationsStore.translations;
    return (
        <div className="skills">
            <h1>{skills.title}</h1>
            <ul dangerouslySetInnerHTML={{ __html: skills.list }}></ul>
        </div>
    );
});

export { Skills };
