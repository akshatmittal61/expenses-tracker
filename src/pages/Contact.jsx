import React from 'react';
import akshat from '../images/akshat.png'
import twitter from '../images/twitter.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import phone from '../images/phone.svg'
import mail from '../images/mail.svg'

const Contact = () => {
    const author = {
        name: "Akshat Mittal",
        image: akshat,
        about: "MERN stack developer",
        socials: [
            {
                username: "@akshatmittal61",
                link: "https://twitter.com/akshatmittal61",
                icon: twitter
            },
            {
                username: "@akshat-mittal-851073202",
                link: "https://www.linkedin.com/in/akshat-mittal-851073202",
                icon: linkedin
            },
            {
                username: "@akshatmittal61",
                link: "https://www.github.com/akshatmittal61",
                icon: github
            },
            {
                username: "+91 94568 49466",
                link: "tel:919456849466",
                icon: phone
            },
            {
                username: "akshatmittal2506@gmail.com",
                link: "mailto:akshatmittal2506@gmail.com",
                icon: mail
            }
        ]
    }
    return (
        <section className="contact">
            <div className="contact-container">
                <div className="card">
                    <div className="card-frame">
                        <div className="card-box">
                            <div className="contact-head">
                                <div className="contact-head-image">
                                    <img src={akshat} alt="Akshat Mittal" className="contact-head__img" />
                                </div>
                                <div className="contact-head-content">
                                    <h2 className="contact-head__h2">
                                        {author.name}
                                    </h2>
                                    <h4 className="contact-head__h4">
                                        {author.about}
                                    </h4>
                                </div>
                            </div>
                            <div className="contact-body">
                                <div className="row">
                                    {
                                        author.socials.map((social, index) => (
                                            <div className="col-lg-50 col-md-100 col-sm-100">
                                                <div className="contact-social">
                                                    <a className="contact-social__link" href={social.link}>
                                                        <span className="contact-social__icon">
                                                            <img src={social.icon} alt={social.username} />
                                                        </span>
                                                        <span className="contact-social__username">{social.username}</span>
                                                    </a>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
