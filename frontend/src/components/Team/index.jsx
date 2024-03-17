import React from 'react'
import "./index.scss";
const Team = () => {
  return (
    <>
    <section id='team'>
        <div className='team_container'>
            <div className='team_content'>
                <div className='team_title'>
                    <p>Contacts</p>
                    <h4>Our Team</h4>
                </div>
                <div className='team_cards'>
                    <div className='team_card'>
                        <div className='team_card_img'>
                            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
                        </div>
                        <div className='team_card_text' >
                            <h5>Velva Kopf</h5>
                            <p>Biologist</p>
                        </div>
                    </div>
                    <div className='team_card'>
                        <div className='team_card_img'>
                            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg" alt="" />
                        </div>
                        <div className='team_card_text' >
                            <h5>Sarah Palmer</h5>
                            <p>Sarah Palmer</p>
                        </div>
                    </div>
                    <div className='team_card'>
                        <div className='team_card_img'>
                            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg" alt="" />
                        </div>
                        <div className='team_card_text' >
                            <h5>Jessica Swift</h5>
                            <p>Photographer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Team