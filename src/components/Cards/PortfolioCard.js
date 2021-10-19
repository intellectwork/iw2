import React from 'react'

export const PortfolioCard = ({name, image}) => {
    return (
        <div className="col-lg-4 col-md-6 portfolio-item" data-aos="zoom-in">
            <div className="portfolio-card">
                <img src={image} className="img-fluid" alt=''/>
                <div className="portfolio-info">
                    <h4>{name}</h4>
                </div>
            </div>
        </div>
    )
}

