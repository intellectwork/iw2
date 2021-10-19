import React from 'react'
import { useTranslation } from 'react-i18next'
import { FeaturesCard } from '../Cards/FeaturesCard'

import '../../stylesheet/featuresSection.scss'

export const FeaturesSection = () => {
    const { t } = useTranslation()


    return (
        <div className="section features">
            <div className="Features">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>{t('features')}</h2>
                        <p>{t('features_description')}</p>
                    </div>
                    <div className="row" data-aos="fade-up" data-aos-delay="300">
                        <FeaturesCard name={'Javascript'} image={'images/svgs/javascript.svg'} />
                        <FeaturesCard name={'NodeJS'} image={'images/svgs/nodejs.svg'} />
                        <FeaturesCard name={'Angular'} image={'images/svgs/angular.svg'} />
                        <FeaturesCard name={'Java'} image={'images/svgs/java.svg'} />
                        <FeaturesCard name={'Phyton'} image={'images/svgs/python.svg'} />
                        <FeaturesCard name={'| Express'} image={'images/svgs/express.svg'} />
                        <FeaturesCard name={'Django'} image={'images/svgs/django.svg'} />
                        <FeaturesCard name={'.NET'} image={'images/svgs/net.svg'} />
                        <FeaturesCard name={'Kotlin'} image={'images/svgs/kotlin.svg'} />
                        <FeaturesCard name={'C Sharp'} image={'images/svgs/csharp.svg'} />
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="fab fa-react" style={{color: '#61DBFB'}}></i>
                                <h3>React</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="icon-box">
                                <i className="fab fa-react"style={{color: '#ED313D'}}></i>
                                <h3>React Native</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

