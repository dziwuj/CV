import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { observer } from "mobx-react";
import { StoreContext } from "..";

const Contact: React.FunctionComponent = observer(() => {
    const store = useContext(StoreContext);
    const { contact } = store.TranslationsStore.translations;
    return (
        <div className="contact">
            <h1>{contact.title}</h1>
            <address>
                <p dangerouslySetInnerHTML={{ __html: contact.address }}></p>
                <a href={`tel:${contact.phone}`}>
                    <p>{contact.phone}</p>
                </a>

                <a href={`mailto:${contact.email}`}>
                    <p>{contact.email}</p>
                </a>
                <a href="https://github.com/dziwuj" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="brand" color="#171515" icon={faGithub} />
                </a>
                <a href="https://linkedin.com/in/zbyszkosobecki" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="brand" color="#0072b1" icon={faLinkedin} />
                </a>
            </address>
        </div>
    );
});

export { Contact };
