import React from 'react'
import { useTranslation } from 'react-i18next'
import { PortfolioCard } from '../Cards/PortfolioCard'

import '../../stylesheet/portfoliosection.scss'

export const PortfolioSection = () => {
    const { t } = useTranslation()

    return (
        <div className="section portfolio">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>{t('our_product')}</h2>
                    <p>{t('our_product_description')}</p>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay="150">
                    <PortfolioCard name={'Project: SOLO'} image={'images/Portfolio/portfolio.png'} />
                    <PortfolioCard name={'Project: Daily Tuition'} image={'images/Portfolio/portfolio 2.png'} />
                    <PortfolioCard name={'Project: SOLO'} image={'images/Portfolio/portfolio 3.png'} />
                </div>
            </div>
        </div>
    )
}