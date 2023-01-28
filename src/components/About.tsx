import React, { useContext } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "..";

const About: React.FunctionComponent = observer(() => {
    const store = useContext(StoreContext);
    const { about } = store.TranslationsStore.translations;
    return (
        <div className="about">
            <h1>{about.title}</h1>
            <p>{about.description}</p>
        </div>
    );
});

export { About };
