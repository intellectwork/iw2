import React from 'react'
import emailjs from 'emailjs-com'
import swal from 'sweetalert'
import { useTranslation } from 'react-i18next'

import '../../stylesheet/locationsection.scss'

export const LocationSection = () => {
    const { t } = useTranslation()

    const emailSendHandler = (e) => {
        e.preventDefault()

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
        .then(() => {
            swal({
                title: t('alert_title'),
                text: t('alert_text'),
                icon: "success",
                button: t('alert_button'),
            })
        },
        (error) => {
            if(error) {
                swal({
                    title: t('error_alert_title'),
                    text: t('error_alert_text'),
                    icon: "error",
                    button: t('alert_button'),
                })
            }
        })
    }

    return (
        <div className="section location">
            <div className="contact">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>{t('location')}</h2>
                        </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-6">
                            <div className="info-box mb-4">
                                <i className="fas fa-location-arrow"></i>
                                <h3>{t('address')}</h3>
                                <p>{t('location_addres')}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="info-box mb-4">
                                <i className="fas fa-envelope"></i>
                                <h3>{t('email')}</h3>
                                <p>info@intellectwork.com</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="info-box mb-4">
                                <i className="fas fa-phone"></i>
                                <h3>{t('phone')}</h3>
                                <p>(+995) 599-38-00-07</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
                            <iframe
                                className="mb-4 mb-lg-0"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                frameBorder="0"
                                style={{border: 0, width: '100%', height: '100%'}}
                                allowFullScreen
                                title="myFrame"
                            />
                        </div>

                        <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
                            <form className="email-form" onSubmit={emailSendHandler}>
                                <div className="row">
                                    <div className="col form-group">
                                        <input required type="text" name="name" className="form-control" placeholder={t('name_placeholder')}/>
                                        <input required type="email" name='user_email' className="form-control" placeholder={t('email_placeholder')}/>
                                    </div>

                                    <div className="col form-group">
                                        <input required type="text" name='subject' className="form-control" placeholder={t('subject_placeholder')}/>
                                    </div>

                                    <div className="col form-group">
                                        <textarea required className="form-control" name="message" placeholder={t('message_placeholder')}></textarea>
                                    </div>
                                    
                                    <div className="col text-center">
                                        <button type="submit">{t('send_button')}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}