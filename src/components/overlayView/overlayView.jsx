import React, { useState } from 'react';
import './overlayView.style.scss';
import SliderComponent from '../sliderComponent/sliderComponent';

const navItems = [
    {
        name: 'overview',
        title: 'Overview'
    },
    {
        name: 'photos',
        title: 'Photos'
    }
]

const Overlay = (props) => {
    const { setopenOverlay, rocketName, images, description } = props
    const [navItem, setNavItem] = useState('overview')
    return (
        <div className="overlay">
            <div className="overlay__content">
                <div className='overlay__content__top'>
                    <div className='overlay__content__top__left'>
                        <div className='overlay__content__top__left__title'>{rocketName}</div>
                        <li className='overlay__content__top__left__nav'>
                            {navItems.map((nav, index) => {
                                const className = nav.name === navItem ? `overlay__content__top__left__nav--${nav.name}--selected` : `overlay__content__top__left__nav--${nav.name}`
                                return (
                                    <ul key={index} className={className} onClick={() => setNavItem(nav.name)} >{nav.title}</ul>
                                )
                            })}
                        </li>
                    </div>
                    <div className='overlay__content__top__right' onClick={() => setopenOverlay(false)}><svg x="0px" y="0px" width="25px" height="25px" viewBox="0 0 357 357" fill="#353535"><g><g id="close"><polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
 214.2,178.5"></polygon></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>
                </div>
                {navItem === 'overview' ? <div className='overlay__content__bottom'>
                    <div className='overlay__content__bottom__left'>
                        <img src={images[0]} alt='Loding' />
                    </div>
                    <div className='overlay__content__bottom__right'>
                        <div className='overlay__content__bottom__right__title'>DESCRIPTION</div>
                        <div className='overlay__content__bottom__right__value'>{description}</div>
                    </div>
                </div> : <SliderComponent
                    images={images}
                />}
            </div>
        </div>
    );
};

export default Overlay;