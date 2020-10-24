import React from "react";
import TextField from "../textfield/TextField";

const Contact = (): JSX.Element => {
    return (
        <div className="contact tab-content">
            <div className="contact_title">
                <h2>Contact</h2>
            </div>
            <div className="contact_content">
                <div className="contact_content__container content">
                    <span className="content_title">
                        Formulaire de contact
                    </span>

                    <form action="#" className="content_form">
                        <TextField
                            placeholder="Prenom"
                        />
                    </form>
                </div>
                <div className="contact_content__container content">
                    <div className="content_title">
                        Vous pouvez me contacter également via
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;