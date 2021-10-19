import React from 'react'
import { TeamCard } from '../Cards/TeamCard'

import '../../stylesheet/teamsection.scss'

export const TeamSection = () => {
    return (
        <div className="section team-members">
            <div id="team" className="team section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Our Team</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                            quisquam enim ipsam?
                        </p>
                    </div>
                    <div className="row">
                        <TeamCard name={'Ana Bulashvili'} position={'UI / UX Designer'} image={"images/Team/img_1.jpg"} />
                        <TeamCard name={'Davit Gigauri'} position={'CTO & MERN Developer'} image={"images/Team/img_2.jpg"} />
                        <TeamCard name={'Luka Shergelashvili'} position={'Front-End Developer'} image={"images/Team/team-1.jpg"} />
                        <TeamCard name={'Irakli Khintibidze'} position={'C# / JAVA Developer'} image={"images/Team/team-3.jpg"} />
                    </div>
                </div>
            </div>
        </div>
    )
}