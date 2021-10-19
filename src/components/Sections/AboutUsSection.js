import React from 'react'
import { useTranslation } from 'react-i18next'

import '../../stylesheet/aboutusSection.scss'

export const AboutUsSection = () => {
    const { t } = useTranslation()
    return (
        <div className="section service">
            <div className="Services">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>{t('about_us')}</h2>
                        <p>{t('about_us_description')}</p>
                    </div>
                    <div className="section-image">
                        <img className="image-fluid" src="images/svgs/undraw_Team_spirit_re_yl1v.svg" alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}