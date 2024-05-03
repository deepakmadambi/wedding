import React from 'react';
import SectionTitle from '../SectionTitle'
import sImg1 from '../../images/story/s1.jpg'
import sImg2 from '../../images/story/s2.png'
import sImg3 from '../../images/story/s3.png'

import shape1 from '../../images/story/shape-1.png'
import shape2 from '../../images/story/shape-2.png'

const StorySection2 = (props) => {


    return (
        <section className="story-section section-padding" id="story">
            <div className="container">
                <div className="row">
                    <SectionTitle MainTitle={'Our Sweet Story'} />
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="story-timeline">
                            <div className="row">
                                <div className="col offset-lg-6 col-lg-6 col-12 text-holder">
                                    <span className="heart">
                                        <i className="fi flaticon-balloon"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="story-timeline-item s1">
                                <div className="row align-items-center">
                                    <div className="col col-lg-6 col-12">
                                        <div className="img-holder right-align-text fadeInLeftSlow" data-wow-duration="1500ms">
                                            <img src={sImg1} className="img img-responsive" alt="stroy"/>
                                        </div>
                                    </div>
                                    <div className="col col-lg-6 col-12">
                                        <div className="story-text left-align-text fadeInRightSlow" data-wow-duration="2000ms">
                                            <h3>First Time We Meet</h3>
                                            <span className="date">13 Aug 2015</span>
                                            <div className="line-shape">
                                                <div className="outer-ball">
                                                    <div className="inner-ball"></div>
                                                </div>
                                            </div>
                                            <p>The corridors of their college often whispered with the footsteps of students and the echoes of youthful dreams. It was here that their paths crossed again. Deepak, with his laid-back charm and a reputation of roaming the halls, smiled at Sahana as she walked by, her books clutched tightly to her chest. This smile, a simple curve of the lips, carried with it an invitation to a new beginning, one that Sahana, with a mixture of curiosity and caution, was hesitant to accept.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="story-timeline-item">
                                <div className="row align-items-center">
                                    <div className="col col-lg-6 col-12 order-lg-1 order-2 text-holder left-text">
                                        <div className="story-text right-align-text fadeInLeftSlow" data-wow-duration="2000ms">
                                            <h3>Our First Date</h3>
                                            <div className="line-shape s2">
                                                <div className="outer-ball">
                                                    <div className="inner-ball"></div>
                                                </div>
                                            </div>
                                            <p>Our first date was an unexpected adventure right on our college campus. After class, instead of letting Sahana head back to her hostel, I playfully blocked her path and guided us to the college canteen. With a mix of nerves and excitement, she ordered biryani for me. Sitting across from each other, her initial apprehension gave way to enjoyment of the moment, marking the beginning of our unique connection.</p>
                                        </div>
                                    </div>
                                    <div className="col col-lg-6 col-12 order-lg-2 order-1">
                                        <div className="img-holder left-align-text">
                                            <img src={sImg2} alt="stroy" className="img img-responsive fadeInRightSlow" data-wow-duration="1500ms"/>
                                                <span className="heart">
                                                    <i className="fi flaticon-dance"></i>
                                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="story-timeline-item">
                                <div className="row align-items-center">
                                    <div className="col col-lg-6 col-12">
                                        <div className="img-holder right-align-text left-site right-heart">
                                            <img src={sImg3} alt="stroy" className="img img-responsive fadeInLeftSlow" data-wow-duration="1500ms"/>
                                                <span className="heart">
                                                    <i className="fi flaticon-dove"></i>
                                                </span>
                                        </div>
                                    </div>
                                    <div className="col col-lg-6 col-12">
                                        <div className="story-text left-align-text fadeInRightSlow" data-wow-duration="2000ms">
                                            <h3>We Said Yes!</h3>
                                            <span className="date">21 April 2024</span>
                                            <div className="line-shape">
                                                <div className="outer-ball">
                                                    <div className="inner-ball"></div>
                                                </div>
                                            </div>
                                            <p>Years later, as we stood hand in hand, ready to exchange vows, we looked back at our journey—a journey that started with a chance encounter and grew into a profound connection. It was a testament to the fact that love, in its truest form, is a tapestry of moments both monumental and mundane, colored by the hues of companionship, respect, and enduring affection.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <div className="sticky-shape">
                    <img src={shape1} alt=""/>
                </div>
            </div>
            <div className="shape-2">
                <div className="sticky-shape">
                    <img src={shape2} alt=""/>
                </div>
            </div>
        </section>
    )
}


export default StorySection2;