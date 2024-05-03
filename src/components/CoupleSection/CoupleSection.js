import React from 'react';
import { Link } from 'react-router-dom'
import coupleImg1 from '../../images/couple/bride.png'
import coupleImg2 from '../../images/couple/Grrom.png'

import shape1 from '../../images/couple/shape-1.png'
import shape2 from '../../images/couple/shape-2.png'
import shape3 from '../../images/couple/shape-3.png'
import shape4 from '../../images/couple/shape-4.png'



const CoupleSection = (props) => {

    return (
        <section className={`couple-section section-padding ${props.cClass}`} id="couple">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col col-lg-11">
                        <div className="couple-area clearfix">
                            <div className="couple-item bride">
                                <div className="row align-items-center">
                                    <div className="col-lg-4">
                                        <div className="couple-img">
                                            <img src={coupleImg1} alt="" />
                                            <div className="couple-shape">
                                                <img src={shape3} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="couple-text">
                                            <h3>Sahana L G</h3>
                                            <p>
                                            Sahana's beauty is more than skin deep; it radiates from her soul, 
                                            a captivating blend of kindness and warmth. She is the embodiment of love, 
                                            her care a warm embrace for all who are lucky enough to know her. With a smile that 
                                            lights up a room and a gentle spirit, she makes the world a more beautiful place. 
                                            </p>
                                            <div className="social">
                                                <ul>
                                                    <li><Link to="https://www.instagram.com/sahanalakshman_g"><i className="ti-instagram"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="couple-item groom">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 order-lg-1 order-2">
                                        <div className="couple-text">
                                            <h3>Deepak Madambi S</h3>
                                            <p>Deepak possesses a rare combination of intelligence and a zest for life. 
                                            He's as comfortable debating philosophy as he is exploring uncharted territories.
                                             His adventurous spirit knows no bounds, and his quick wit keeps everyone on their toes.</p>
                                            <div className="social">
                                                <ul>
                                                    <li><Link to="https://www.instagram.com/deepak_madambi/"><i className="ti-instagram"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 order-lg-2 order-1">
                                        <div className="couple-img">
                                            <img src={coupleImg2} alt="" />
                                            <div className="couple-shape">
                                                <img src={shape4} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <img src={shape1} alt="" />
            </div>
            <div className="shape-2">
                <img src={shape2} alt="" />
            </div>
        </section>

    );
}



export default CoupleSection;