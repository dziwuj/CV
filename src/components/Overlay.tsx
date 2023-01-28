import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { StoreContext } from "..";
import { languagesOptions } from "../stores/Translations.store";
import images from "../constants/images";
import { savePDF } from "@progress/kendo-react-pdf";

interface OverlayProps {
    resumeRef: React.RefObject<HTMLDivElement>;
    setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
    isShown: boolean;
}

const Overlay: React.FunctionComponent<OverlayProps> = observer(({ resumeRef, setIsShown, isShown }: OverlayProps) => {
    const store = useContext(StoreContext);
    const { overlay } = store.TranslationsStore.translations;
    const [language, setLanguage] = useState<string>("en");

    useEffect(() => {
        const lang: string = navigator.language.split("-")[0];
        setLanguage(lang);
    }, []);

    useEffect(() => {
        store.TranslationsStore.setLanguage(language);
        setIsShown(false);
    }, [language]);

    const exportPDF = () => {
        resumeRef.current?.parentElement?.classList.add("export");
        if (resumeRef.current === null) return;
        savePDF(resumeRef.current, {
            paperSize: "auto",
            landscape: false,
            repeatHeaders: true,
            fileName: `zbyszko_sobecki_CV-${language}.pdf`,
        });
        resumeRef.current?.parentElement?.classList.remove("export");
        setIsShown(false);
    };

    return (
        <div className={`overlay${isShown ? " show" : " hidden"}`}>
            <button type="button" className="download" onClick={() => exportPDF()}>
                {overlay.download}
            </button>
            <div className="language-title">{overlay.changeLanguage}</div>
            {languagesOptions.map((lang) => (
                <button type="button" key={lang} className="language" onClick={() => setLanguage(lang)}>
                    <img className="flag" src={images.flags[lang]} alt={`${lang} flag`} />
                </button>
            ))}
        </div>
    );
});

export { Overlay };
