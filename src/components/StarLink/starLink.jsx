import React from 'react'
import './starLink.style.scss'
import { starLinkSvg } from '../../utils/logo'

const StarLink = () => {
  return (
    <div className='starlink'>
          <div className='starlink__heading'>Starlink</div>
          <div className='starlink__info'>
              <div className='starlink__info__image'>{starLinkSvg}</div>
              <div className='starlink__info__desc'>There are currently 3268 active Starlink satellites on the low Earth orbit.</div>
          </div>
    </div>
  )
}

export default StarLink
