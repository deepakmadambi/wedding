import React from 'react'
import LocationMap from '../Modal'
import SectionTitleS2 from '../SectionTitleS2'


const Events = [
    {
        title:'Haldi & Sangeet',
        li1:'Saturday, 18 May, 2024 11:00 AM - 10:00 PM',
        li2:'Anvaya The Marquee, Mysore Mangalore Road',
        li3:'near Guddehosur circle, North, Kushalnagar, Madikeri, Karnataka 571234'
    },
    {
        title:'Muhurat',
        li1:'Sunday, 19 May, 2024 8:00 AM - 8:30 AM',
        li2:'Anvaya The Marquee, Mysore Mangalore Road',
        li3:'near Guddehosur circle, North, Kushalnagar, Madikeri, Karnataka 571234'
    },
    {
        title:'Reception',
        li1:'Sunday, 19 May, 2024 11:00 AM - 3:00 PM',
        li2:'Anvaya The Marquee, Mysore Mangalore Road',
        li3:'near Guddehosur circle, North, Kushalnagar, Madikeri, Karnataka 571234'
    },

]

const EventSection = (props) => {
    return (
        <section className={`wpo-event-section section-padding ${props.eClass}`} id="event">
            <div className="container">
                <SectionTitleS2 MainTitle={'When & Where'} />
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Events.map((event, eitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                                <div className="wpo-event-item">
                                    <div className="wpo-event-text">
                                        <h2>{event.title}</h2>
                                        <ul>
                                            <li>{event.li1}</li>
                                            <li>{event.li2}</li>
                                            <li>{event.li3}</li>
                                            <li><LocationMap/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventSection;