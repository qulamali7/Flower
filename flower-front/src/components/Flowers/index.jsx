import React, { useState } from 'react'
import "./index.scss";
import FlowersCards from '../FlowersCards';
const Flowers = () => {
  return (
    <>
    <section id='flowers'>
        <div className='flowers_container'>
            <div className='flowers_content'>
                <div className='flowers_content_title'>
                    <p>Devoted to wonderful beauty</p>
                    <h2>Flowers Pricing</h2>
                </div>
                <FlowersCards/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Flowers