import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import useStores from "../../stores";
import Button from "../button/Button";
import TextField from "../textfield/TextField";
import clsx from "clsx";

const Contact = (): JSX.Element => {
    const { responsiveStore } = useStores();
    const contactRef = useRef<HTMLDivElement>(null);

    /* First name */
    const [firstName, setFirstName] = useState<string>("");
    const [hasFirstNameErrors, setHasFirstNameErrors] = useState<string>("");
    const handleFirstNameChange = useCallback((value: string) => {
        setFirstName(value);
        hasFirstNameErrors && setHasFirstNameErrors("");
    }, [
        setFirstName,
        hasFirstNameErrors,
        setHasFirstNameErrors
    ])

    /* Last name */
    const [lastName, setLastName] = useState<string>("");
    const [hasLastNameErrors, setHasLastNameErrors] = useState<string>("");
    const handleLastNameChange = useCallback((value: string) => {
        setLastName(value);
        hasLastNameErrors && setHasLastNameErrors("");
    }, [
        setLastName,
        hasLastNameErrors,
        setHasLastNameErrors
    ])

    /* Email */
    const [email, setEmail] = useState<string>("");
    const [hasEmailErrors, setHasEmailErrors] = useState<string>("");
    const handleEmailChange = useCallback((value: string) => {
        setEmail(value);
        hasEmailErrors && setHasEmailErrors("");
    }, [
        setEmail,
        hasEmailErrors,
        setHasEmailErrors
    ])

    /* Object */
    const [object, setObject] = useState<string>("");
    const [hasObjectErrors, setHasObjectErrors] = useState<string>("");
    const handleObjectChange = useCallback((value: string) => {
        setObject(value);
        hasObjectErrors && setHasObjectErrors("")
    }, [
        setObject,
        hasObjectErrors,
        setHasObjectErrors
    ])

    /* Content */
    const [content, setContent] = useState<string>("");
    const [hasContentErrors, setHasContentErrors] = useState<string>("");
    const handleContentChange = useCallback((value: string) => {
        setContent(value);
        hasContentErrors && setHasContentErrors("")
    }, [
        setContent,
        hasContentErrors,
        setHasContentErrors
    ])

    const handleSubmit = useCallback(() => {
        let hasErrors = false;

        /* First name */
        if (firstName) {
            hasFirstNameErrors && setHasFirstNameErrors("");
        } else {
            hasErrors = true;
            setHasFirstNameErrors("Ce champ est requis");
        }

        /* Last name */
        if (lastName) {
            hasLastNameErrors && setHasLastNameErrors("");
        } else {
            hasErrors = true;
            setHasLastNameErrors("Ce champ est requis");
        }

        /* Email */
        const isEmailValid = email && email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g);
        if (isEmailValid) {
            hasEmailErrors && setHasEmailErrors("");
        } else {
            hasErrors = true;
            setHasEmailErrors(email
                ? "L'adresse email est invalide"
                : "Ce champ est requis"
            );
        }

        /* First name */
        if (object) {
            hasObjectErrors && setHasObjectErrors("");
        } else {
            hasErrors = true;
            setHasObjectErrors("Ce champ est requis");
        }

        /* First name */
        if (content) {
            hasContentErrors && setHasContentErrors("");
        } else {
            hasErrors = true;
            setHasContentErrors("Ce champ est requis");
        }

        if (!hasErrors) {
            // submit
        }
    }, [
        firstName,
        hasFirstNameErrors,
        setHasFirstNameErrors,
        lastName,
        hasLastNameErrors,
        setHasLastNameErrors,
        email,
        hasEmailErrors,
        setHasEmailErrors,
        object,
        hasObjectErrors,
        setHasObjectErrors,
        content,
        hasContentErrors,
        setHasContentErrors
    ]);

    const handleContactsScroll = useCallback(() => {
        if (contactRef.current) {
            const offset = contactRef.current?.offsetTop - window.scrollY;
            if (offset <= 400 && responsiveStore.backgroundColor === "white") {
                responsiveStore.updateBackgroundColor("black");
            } else if (responsiveStore.backgroundColor === "black" && offset > 400 && offset < 600) {
                responsiveStore.updateBackgroundColor("white");
            }
        }
    }, [contactRef, responsiveStore]);

    useLayoutEffect(() => {
        window.addEventListener("scroll", handleContactsScroll);

        return () => window.removeEventListener("scroll", handleContactsScroll);
    }, [handleContactsScroll]);

    return (
        <div
            id="contact"
            className={clsx(
                "contact tab-content",
                {["contact--black"]: responsiveStore.backgroundColor === "white"}
            )}
            ref={contactRef}
        >
            <div className="contact_title">
                <h2>Contact</h2>
            </div>
            <div className="contact_content">
                <div className="contact_content__container content">
                    <span className={clsx(
                            "content_title",
                            {["content_title--black"]: responsiveStore.backgroundColor === "white"}
                        )}
                    >
                        Formulaire de contact
                    </span>

                    <form action="#" className="content_form">
                        <TextField
                            placeholder="Prenom"
                            className="form-firstname"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            hasErrors={hasFirstNameErrors}
                        />
                        <TextField
                            placeholder="Nom"
                            className="form-lastname"
                            value={lastName}
                            onChange={handleLastNameChange}
                            hasErrors={hasLastNameErrors}
                        />
                        <TextField
                            placeholder="Email"
                            className="form-email"
                            value={email}
                            onChange={handleEmailChange}
                            hasErrors={hasEmailErrors}
                        />
                        <TextField
                            placeholder="Objet"
                            className="form-object"
                            value={object}
                            onChange={handleObjectChange}
                            hasErrors={hasObjectErrors}
                        />
                        <TextField
                            placeholder="Texte libre"
                            className="form-content"
                            value={content}
                            onChange={handleContentChange}
                            hasErrors={hasContentErrors}
                            textarea
                        />
                        <div className="form-submit">
                            <Button label="Envoyer" onClick={handleSubmit} size="medium" />
                        </div>
                    </form>
                </div>
                <div className="contact_content__container content content_infos">
                    <div className="content_infos__block block-contact">
                        <div className={clsx(
                                "content_title content_title--align-right",
                                {["content_title--black"]: responsiveStore.backgroundColor === "white"}
                            )}
                        >
                            Vous pouvez me contacter également via
                        </div>
                        <div className="content_contact">
                            <div className="content_contact__meta-title">
                                <div>Email :</div>
                                <div>Téléphone :</div>
                            </div>
                            <div className="content_contact__meta-infos">
                                <div>contact@jeremygrenet.com</div>
                                <div>06.08.89.58.17</div>
                            </div>
                        </div>
                    </div>
                    <div className="content_infos__block block-socials">
                        <div className={clsx(
                                "content_title content_title--align-right",
                                {["content_title--black"]: responsiveStore.backgroundColor === "white"}
                            )}
                        >
                            Ou me retrouver sur mes réseaux :
                        </div>
                        <div className="content_socials">
                            <div className={clsx(
                                    "content_socials__item",
                                    {["content_socials__item--black"]: responsiveStore.backgroundColor === "white"}
                                )}
                            >
                                <div className="content_socials__item___logo" />
                            </div>
                            <div className={clsx(
                                    "content_socials__item",
                                    {["content_socials__item--black"]: responsiveStore.backgroundColor === "white"}
                                )}
                            >
                                <div className="content_socials__item___logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;