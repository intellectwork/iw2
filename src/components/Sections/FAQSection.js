import React from 'react'
import { useTranslation } from 'react-i18next'
import { FAQCard } from '../Cards/FAQCard'

import '../../stylesheet/faqsection.scss'

export const FAQSection = () => {
    const { t } = useTranslation()

    return (
        <div className="section question">
            <div className="faq">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>{t('faq_name')}</h2>
                    </div>
                    <div className="faq-list">
                        <ul>
                            <FAQCard 
                                question={t('first_question')} 
                                answer={
                                    <p>{t('first_answer')}</p>
                                }
                                id={'faq-list-1'}
                            />

                            <FAQCard 
                                question={t('second_question')} 
                                answer={
                                    <p>{t('second_answer')}</p>
                                }
                                id={'faq-list-2'}
                            />

                            <FAQCard 
                                question={t('third_question')} 
                                answer={
                                    <p>{t('third_answer')}</p>
                                }
                                id={'faq-list-3'}
                            />

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}