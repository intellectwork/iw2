import React from 'react'
import { PriceCard } from '../Cards/PriceCard'

import '../../stylesheet/pricesection.scss'

export const PriceSection = () => {
    return (
        <div className="section price">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Pricing</h2>
                    <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint 
                        conseqtetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
                        sit in iste officiis commadi quidem his quas. 
                    </p>
                </div>

                <div className="row">
                    <PriceCard 
                        name="Developer" 
                        className='' 
                        price='29' 
                        information={[
                            {
                                first: 'Aida Dere',
                                second: 'Nec feugiat nisl',
                                third: 'Nulla at volutpat dola',
                                fourth: 'Pharetra Massa',
                                fifth: 'Massa ultricies mi'
                            }
                        ]}
                    />

                    <PriceCard 
                        name="Business" 
                        className='price-blue' 
                        price='19' 
                        information={[
                            {
                                first: 'Aida Dere',
                                second: 'Nec feugiat nisl',
                                third: 'Nulla at volutpat dola',
                                fourth: 'Pharetra Massa',
                                fifth: 'Massa ultricies mi'
                            }
                        ]}
                    />

                    <PriceCard 
                        name="Ultimate" 
                        className='' 
                        price='49' 
                        information={[
                            {
                                first: 'Aida Dere',
                                second: 'Nec feugiat nisl',
                                third: 'Nulla at volutpat dola',
                                fourth: 'Pharetra Massa',
                                fifth: 'Massa ultricies mi'
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}