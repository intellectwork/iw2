import React from 'react'

export const TeamCard = ({name,position,image}) => {
    return (
        <div className="col-lg-3 col-md-6 align-items-stretch" data-aos="fade-up" data-aos-delay="400">
            <div className="member">
                <div className="member-img">
                    <img src={image} className="img-fluid" alt="" />
                    <div className="social">
                        <span><i className="fab fa-twitter-square"></i></span>
                        <span><i className="fab fa-facebook-square"></i></span>
                        <span><i className="fab fa-instagram-square"></i></span>
                        <span><i className="fab fa-linkedin"></i></span>
                    </div>
                </div>
                <div className="member-info">
                    <h4>{name}</h4>
                    <span>{position}</span>
                </div>
            </div>
        </div>
    )
}