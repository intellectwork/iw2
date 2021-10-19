import React from 'react'

export const FeaturesCard = ({name, image}) => {
    return (
        <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
                <img src={image} alt='' />     
                <h3>{name}</h3>
            </div>
        </div>
    )
}