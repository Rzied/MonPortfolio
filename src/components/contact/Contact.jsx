import { useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

export default function Contact() {
    const [message, setMessage] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        emailjs.sendForm('service_yxpsnfo', 'template_rjcsufc', e.target, 'user_YYQsv2zw1GmFfvScItSdv').then(res => {
            console.log(res);
        }).catch(err => console.log(err));

        setMessage(true);
    };

    return (
        <div className="contact" id="contact">

            <div className="left">

                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">

                <h2>Contact.</h2>
                <form
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label htmlFor="name">NOM & Prénom :</label>
                        <input type="text" name="name" placeholder="NOM & prénom" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="user_email" placeholder="Email" />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" placeholder="Message"></textarea>
                    </div>

                    <button type="submit">Send</button>

                    {message && <span>Merci, Je repondrais bientôt :)</span>}
                </form>
            </div>
        </div>
    );
}
