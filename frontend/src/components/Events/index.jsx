import React from 'react'
import EventsCards from '../EventsCards'
import "./index.scss";
const Events = () => {
  return (
    <>
    <section id='events'>
        <div className='events_container'>
            <div className='events_content'>
                <div className='events_title'>
                    <p>Devoted to wonderful beauty</p>
                    <h3>Events Pricing</h3>
                </div>
                <EventsCards/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Events