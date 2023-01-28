import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { StoreContext } from "..";
import { languagesOptions } from "../stores/Translations.store";
import images from "../constants/images";
import { savePDF } from "@progress/kendo-react-pdf";

interface OverlayProps {
    resumeRef: React.RefObject<HTMLDivElement>;
}

const Overlay: React.FunctionComponent<OverlayProps> = observer(({ resumeRef }: OverlayProps) => {
    const store = useContext(StoreContext);
    const { overlay } = store.TranslationsStore.translations;
    const [language, setLanguage] = useState<string>("en");

    useEffect(() => {
        const lang: string = navigator.language.split("-")[0];
        setLanguage(lang);
    }, []);

    useEffect(() => {
        store.TranslationsStore.setLanguage(language);
    }, [language]);

    const exportPDF = () => {
        if (resumeRef.current === null) return;
        savePDF(resumeRef.current, {
            paperSize: "auto",
            landscape: false,
            repeatHeaders: true,
            fileName: `zbyszko_sobecki_CV-${language}.pdf`,
        });
    };

    return (
        <div className="overlay">
            <button type="button" className="download" onClick={() => exportPDF()}>
                {overlay.download}
            </button>
            {languagesOptions.map((lang) => (
                <button type="button" key={lang} className="language" onClick={() => setLanguage(lang)}>
                    <img className="flag" src={images.flags[lang]} alt={`${lang} flag`} />
                </button>
            ))}
        </div>
    );
});

export { Overlay };
