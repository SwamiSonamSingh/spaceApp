import React, { useState } from 'react'
import Overlay from '../../overlayView/overlayView'
import './rocketComponent.style.scss'

const RocketComponent = (props) => {
    const { rocket_name, flickr_images, active,description } = props  
    const[openOverlay,setopenOverlay]=useState(false)
    const className=active?'rocket-component__wrapper__status--active':'rocket-component__wrapper__status--inDevelopment'
  return (
    <div className='rocket-component'>
          <div className='rocket-component__heading'>{rocket_name}</div>
          <div className='rocket-component__wrapper' onClick={()=>setopenOverlay(true)}>
              <img className='rocket-component__wrapper__image' src={flickr_images[0]} alt='Loading' />
              <div className={className}>
                  <div className='title'>STATUS</div>
                  {active ? <div className='text'>Active</div>:<div className='text'>In development</div>}
              </div>
          </div>
          {openOverlay && <Overlay
              setopenOverlay={setopenOverlay}
              rocketName={rocket_name}
              images={flickr_images}
              description={description}
          />}
    </div>
  )
}

export default RocketComponent
