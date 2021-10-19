import React from 'react'
import i18next from 'i18next'
import cookie from 'js-cookie'
import { useTranslation } from 'react-i18next'

import '../stylesheet/header.scss'
import 'flag-icon-css/css/flag-icon.min.css'


export const Header = () => {
    const { t } = useTranslation()
    const currentLanguage = cookie.get('i18next') || 'en'

    const languages = [
        {
            code: 'ge',
            name: t('ge_name'),
            country_code: 'ge'
        },
        {
            code: 'en',
            name: t('eng_name'),
            country_code: 'gb'
        }
    ]

    return (
        <div className="main-menu">
            <nav className="navbar navbar-expand-lg navbar-light navbar_fixed">
                <div className="brand">
                    <a className="navbar-brand" href="/"><img src="navbarlogo.jpg" alt="logo123" /></a>
                    <a className="navbar-brand header-text" href="/">Intelect Software Work</a>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#Section-Services">{t('about_us')}</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#Section-Team-Members">Team</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#Section-Portfolio">{t('our_product')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Section-Features">{t('features')}</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#Section-Price">Price</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#Section-FAQ">{t('faq')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Section-Location">{t('location')}</a>
                        </li>
                        <div className="dropdown">
                            <button 
                                className="btn btn-link dropdown-toggle" 
                                type="button" id="dropdownMenuButton" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false"
                            >
                                <img className="globe-img mx-2" src="/images/svgs/globe.svg" alt=''/>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {languages.map(({code,name,country_code}) => (
                                    <button
                                        disabled={code === currentLanguage} 
                                        key={country_code} 
                                        className="dropdown-item" 
                                        onClick={() => i18next.changeLanguage(code)}
                                    >
                                        <span 
                                            className={`flag-icon flag-icon-${country_code} mx-2`}
                                            style={{opacity: code === currentLanguage ? 0.5 : 1}}
                                        />
                                        {name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}