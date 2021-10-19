import React from 'react'
import PropTypes from 'prop-types'

export const PriceCard = ({name,className, price, information}) => {
    return (
        <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className={`pricing-table ${className}`} style={{border: "whitesmoke solid 1px"}}>
                <div className="price-type">
                    <h4>{name}</h4>
                </div>
                <ul className="pricing-ul">
                    <h2><span className="dollar">$</span>{price}<span className="dash">/</span><span className="month">month</span></h2>
                    <li>{information[0].first}</li>
                    <li>{information[0].second}</li>
                    <li>{information[0].third}</li>
                    <li>{information[0].fourth}</li>
                    <li>{information[0].fifth}</li>
                </ul>
                <div id="price-pricing-block">
                    <span className="btn btn-general price-btn-blue" href="#">Buy Now</span>
                </div>
            </div>
        </div>
    )
}

PriceCard.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    price: PropTypes.string,
    information: PropTypes.array
} 