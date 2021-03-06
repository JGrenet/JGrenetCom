import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import useStores from "../../stores";
import Button from "../button/Button";
import TextField from "../textfield/TextField";
import clsx from "clsx";
import emailjs from 'emailjs-com';
import { emailjs_userId } from "../../ressources";
import { observer } from "mobx-react-lite";
import LoadingButton from "../loadingButton/LoadingButton";

const Contact = observer((): JSX.Element => {
    const { responsiveStore, localeStore } = useStores();
    const contactRef = useRef<HTMLDivElement>(null);
    const [sentSuccess, setSentSuccess] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const appKeys = localeStore.keys;

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
    ]);

    const handleSubmit = useCallback(() => {
        let hasErrors = false;

        setSentSuccess(null);

        /* First name */
        if (firstName) {
            hasFirstNameErrors && setHasFirstNameErrors("");
        } else {
            hasErrors = true;
            setHasFirstNameErrors(appKeys["CONTACT_FORM_ERROR_REQUIRED"]);
        }

        /* Last name */
        if (lastName) {
            hasLastNameErrors && setHasLastNameErrors("");
        } else {
            hasErrors = true;
            setHasLastNameErrors(appKeys["CONTACT_FORM_ERROR_REQUIRED"]);
        }

        /* Email */
        const isEmailValid = email && email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g);
        if (isEmailValid) {
            hasEmailErrors && setHasEmailErrors("");
        } else {
            hasErrors = true;
            setHasEmailErrors(email
                ? appKeys["CONTACT_FORM_ERROR_MAIL_INVALID"]
                : appKeys["CONTACT_FORM_ERROR_REQUIRED"]
            );
        }

        /* Object */
        if (object) {
            hasObjectErrors && setHasObjectErrors("");
        } else {
            hasErrors = true;
            setHasObjectErrors(appKeys["CONTACT_FORM_ERROR_REQUIRED"]);
        }

        /* Content */
        if (content) {
            hasContentErrors && setHasContentErrors("");
        } else {
            hasErrors = true;
            setHasContentErrors(appKeys["CONTACT_FORM_ERROR_REQUIRED"]);
        }

        if (!hasErrors) {
            setIsLoading(true);
            emailjs.send('default_service', 'template_20lp063', {
                from_name: `${firstName} ${lastName}`,
                object: object,
                message: content,
                email: email
            }, emailjs_userId).then(() => {
                handleFirstNameChange("");
                handleLastNameChange("");
                handleEmailChange("");
                handleObjectChange("");
                handleContentChange("");

                setSentSuccess(true);
            }, () => {
                setSentSuccess(false);
            }).finally(() => {
                setIsLoading(false);
            });
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
        setHasContentErrors,
        handleFirstNameChange,
        handleLastNameChange,
        handleEmailChange,
        handleObjectChange,
        handleContentChange,
        appKeys,
        setIsLoading
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

    const handleDownloadCV = useCallback(() => {
        window.open(`/files/CV-jeremy-grenet-${localeStore.locale}.pdf`, "_blank");
    }, [localeStore.locale]);

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
                <h2>{appKeys["CONTACT_TAB_TITLE"]}</h2>
            </div>
            <div className="contact_content">
                <div className="contact_content__container content">
                    <span className={clsx(
                            "content_title",
                            {["content_title--black"]: responsiveStore.backgroundColor === "white"}
                        )}
                    >
                        {appKeys["CONTACT_FORM_TITLE"]}
                    </span>

                    <form action="#" className="content_form">
                        <TextField
                            placeholder={appKeys["CONTACT_FORM_FIRSTNAME_PLACEHOLDER"]}
                            className="form-firstname"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            hasErrors={hasFirstNameErrors}
                            autoComplete={false}
                            disabled={isLoading}
                        />
                        <TextField
                            placeholder={appKeys["CONTACT_FORM_LASTNAME_PLACEHOLDER"]}
                            className="form-lastname"
                            value={lastName}
                            onChange={handleLastNameChange}
                            hasErrors={hasLastNameErrors}
                            autoComplete={false}
                            disabled={isLoading}
                        />
                        <TextField
                            placeholder={appKeys["CONTACT_FORM_EMAIL_PLACEHOLDER"]}
                            className="form-email"
                            value={email}
                            onChange={handleEmailChange}
                            hasErrors={hasEmailErrors}
                            autoComplete={false}
                            disabled={isLoading}
                        />
                        <TextField
                            placeholder={appKeys["CONTACT_FORM_OBJECT_PLACEHOLDER"]}
                            className="form-object"
                            value={object}
                            onChange={handleObjectChange}
                            hasErrors={hasObjectErrors}
                            autoComplete={false}
                            disabled={isLoading}
                        />
                        <TextField
                            placeholder={appKeys["CONTACT_FORM_CONTENT_PLACEHOLDER"]}
                            className="form-content"
                            value={content}
                            onChange={handleContentChange}
                            hasErrors={hasContentErrors}
                            autoComplete={false}
                            disabled={isLoading}
                            textarea
                        />
                        <div className="form-submit">
                            <LoadingButton
                                onClick={handleSubmit}
                                size="medium"
                                isLoading={isLoading}
                                label={appKeys["CONTACT_FORM_SUBMIT"]}
                            />
                            {sentSuccess !== null && (
                                <div className={clsx(
                                        "form-submit_status",
                                        sentSuccess && "form-submit_status--success",
                                        !sentSuccess && "form-submit_status--failed"
                                    )}
                                >
                                    {sentSuccess ? appKeys["CONTACT_SENDING_SUCCESS"] : appKeys["CONTACT_SENDING_FAILED"]}
                                </div>
                            )}
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
                            {appKeys["CONTACT_FORM_INFOS"]}
                        </div>
                        <div className="content_contact">
                            <div className="content_contact__meta">
                                <span className="content_contact__meta___title">
                                    {appKeys["CONTACT_FORM_INFOS_EMAIL"]}
                                </span>
                                <span className="content_contact__meta___infos">
                                    contact@jeremygrenet.com
                                </span>
                            </div>
                            <div className="content_contact__meta">
                                <span className="content_contact__meta___title">
                                    {appKeys["CONTACT_FORM_INFOS_PHONE"]}
                                </span>
                                <span className="content_contact__meta___infos">
                                    {localeStore.locale === "fr" && "06 08 89 58 17"}
                                    {localeStore.locale === "en" && "+33 6 08 89 58 17"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="content_infos__block block-socials">
                        <div className={clsx(
                                "content_title content_title--align-right",
                                {["content_title--black"]: responsiveStore.backgroundColor === "white"}
                            )}
                        >
                            {appKeys["CONTACT_FORM_NETWORKS"]}
                        </div>
                        <div className="content_socials">
                            <div className={clsx(
                                    "content_socials__item",
                                    {["content_socials__item--black"]: responsiveStore.backgroundColor === "white"}
                                )}
                            >
                                <a
                                    className="content_socials__item___logo"
                                    target="_blank"
                                    href={`https://www.linkedin.com/in/j%C3%A9r%C3%A9my-grenet-652144b6/?locale=${localeStore.locale === "en" ? "en_US" : "fr_FR"}`}
                                >
                                    <img src="/icon/linkedin.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {responsiveStore.isMobile && (
                    <div className="contact_content__container content_cv">
                        <Button label={appKeys["ACTION_DOWNLOAD_CV"]} onClick={handleDownloadCV} size="medium" />
                    </div>
                )}
            </div>
        </div>
    )
});

export default Contact;