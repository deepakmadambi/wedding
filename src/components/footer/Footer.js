import React from 'react'
import {Link}  from 'react-router-dom'


const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) =>{
        e.preventDefault()
     }

  return(

    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="widget-title">
                                <Link onClick={ClickHandler} className="logo" to="/"><small>Sahana</small>Deepak<span></span></Link>
                            </div>
                            <ul>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact Us</h3>
                            </div>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-email"></i>deepakmadambi8@gmail.com</li>
                                    <li><i className="fi flaticon-phone-call"></i>+91-897104278-</li>
                                    <li><i className="fi flaticon-maps-and-flags"></i>Hosapatna
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> &copy; 2024 sahanawedsdeepak <Link onClick={ClickHandler}
                                to="/"></Link>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;