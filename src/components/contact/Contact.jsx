import React, { useRef, useState, useContext } from 'react'
import "./contact.css"
import Phone from '../../imgs/Phone Icon.png'
import Email from '../../imgs/Email Icon.png'
import Address from '../../imgs/Location Icon.png'
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context'


function Contact() {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_9nvqudb', 'template_tpt58io', formRef.current, '5SUVsAk5nSje9_p5-')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className='c'>
            <div className="c-top-line"
            style={{borderTop: darkMode && '1px solid #FFFFFF'}}
            ></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project.</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                            src={Phone}
                            alt="Phone Icon"
                            className="c-icon"
                            />
                            +1(262) 717-5846
                        </div>
                        <div className="c-info-item">
                            <img
                            src={Email}
                            alt="Email Icon"
                            className="c-icon"
                            />
                            braxtonkappes@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                            src={Address}
                            alt="Address Icon"
                            className="c-icon"
                            />
                            26416 Even Heg Court, Wind Lake, WI
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Got a project in mind?</b> Get in touch.
                    </p>
                    <p className="c-desc-two">
                        I am always available for freelancing if
                        the right project presents itself.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input
                        style={{backgroundColor: darkMode && '#333'}}
                        type="text"
                        placeholder='Name'
                        name="user_name"
                        required
                        />
                        <input
                        style={{backgroundColor: darkMode && '#333'}}
                        type="text"
                        placeholder='Subject'
                        name="user_subject"
                        required
                        />
                        <input
                        style={{backgroundColor: darkMode && '#333'}}
                        type="email"
                        placeholder='Email'
                        name="user_email"
                        required
                        />
                        <textarea
                        style={{backgroundColor: darkMode && '#333'}}
                        rows="5"
                        placeholder='Message'
                        name="message">
                        </textarea>
                        <button>Submit</button>
                        {done && "Thank you!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
