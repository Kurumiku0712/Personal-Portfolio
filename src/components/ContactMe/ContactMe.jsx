import React from "react";
import './ContactMe.css';
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

function ContactMe() {

    return (
        <section className="contact-container" id="contact">
            <h5>Contact Me</h5>

            <div className="contact-content">
                <div style={{ flex: 1 }}>
                    <a
                        href="mailto:kurumiku0712@gmail.com">
                        <ContactInfoCard
                            iconUrl="./assets/images/email-icon.png"
                            text="kurumiku0712@gmail.com"
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=61551402966597" target="_blank"
                        rel="noreferrer">
                        <ContactInfoCard
                            iconUrl="./assets/images/facebook-icon.png"
                            text="facebook"
                        />
                    </a>
                    <a
                        href="https://space.bilibili.com/16071539"
                        target="_blank"
                        rel="noreferrer">
                        <ContactInfoCard
                            iconUrl="./assets/images/bilibili-icon.png"
                            text="bilibili"
                        />
                    </a>
                </div>

                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactMe;
