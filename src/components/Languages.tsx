import React, { useContext } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "..";

const Languages = observer(() => {
    const store = useContext(StoreContext);
    const { languages } = store.TranslationsStore.translations;
    return (
        <div className="languages">
            <h1>{languages.title}</h1>
            <ul dangerouslySetInnerHTML={{ __html: languages.list }}></ul>
        </div>
    );
});

export { Languages };
