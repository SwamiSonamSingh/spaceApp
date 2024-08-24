import React, { useState } from 'react'
import './launchFacilities.style.scss'

const launchFacilitiesData = [
    [
        {
            name: 'image',
            value: 'https://live.staticflickr.com/65535/51134975562_11a63a62d7_h.jpg'
        },
        {
            name: 'baseName',
            title: 'Cape Canaveral',
            value: 'LC-39A & SLC-40'
        },
        {
            name: 'region',
            title: 'REGION',
            value: 'Florida'
        },
        {
            name: 'temprature',
            title: 'TEMPRATURE',
            value: '25°C'
        },
        {
            name: 'weather',
            title: 'WEATHER',
            value: 'Mist'
        },
        {
            name: 'windSpeed',
            title: 'WIND',
            value: '3 m/s'
        }
    ],
    [
        {
            name: 'image',
            value: 'https://live.staticflickr.com/65535/50906488116_c44db82fc1_k.jpg'
        },
        {
            name: 'baseName',
            title: 'Cape Canaveral',
             value: 'LC-39A & SLC-40'
        },
        {
            name: 'region',
            title: 'REGION',
            value: 'Florida'
        },
        {
            name: 'temprature',
            title: 'TEMPRATURE',
            value: '25°C'
        },
        {
            name: 'weather',
            title: 'WEATHER',
            value: 'Cloud'
        },
        {
            name: 'windSpeed',
            title: 'WIND',
            value: '3 m/s'
        }
    ],
    [
        {
            name: 'image',
            value: 'https://live.staticflickr.com/982/42290930181_480260c49b_k.jpg'
        },
        {
            name: 'baseName',
            title: 'Cape Canaveral',
             value: 'LC-39A & SLC-40'
        },
        {
            name: 'region',
            title: 'REGION',
            value: 'Florida'
        },
        {
            name: 'temprature',
            title: 'TEMPRATURE',
            value: '25°C'
        },
        {
            name: 'weather',
            title: 'WEATHER',
            value: 'Mist'
        },
        {
            name: 'windSpeed',
            title: 'WIND',
            value: '3 m/s'
        }
    ]
]


const LaunchFacilities = () => {
    const [visibleListLength, setVisibleListLength] = useState(2)
    const [buttonText, setButtonText] = useState('more')
    const handleListLength = (text) => {
        if (text === 'less') {
            setButtonText('more')
            setVisibleListLength(2)
        } else {
            setButtonText('less')
            setVisibleListLength(launchFacilitiesData.length)
        }
    }
    const svgClassName = buttonText==='less' ? 'launch-facilities__button__icon--open' : 'launch-facilities__button__icon--close'
    return (
        <div className='launch-facilities'>
            <div className='launch-facilities__heading'>Launch facilities</div>
            {launchFacilitiesData.slice(0, visibleListLength).map((data) => {
                const backgroundImageStyle = {
                    backgroundImage: `url(${data[0].value})`,
                    backgroundSize: 'cover',
                    height: '104px',
                    width: '294px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    borderRadius: '15px',
                    padding: '0.5rem 1rem',
                    marginBottom:'10px'
                };
                return (
                    <div style={backgroundImageStyle}>
                        {data.map((res, index) => {
                            return (
                                res.name!=='image'&&<div className={`launch-facilities__wrapper--${res.name}`} key={index}>
                                   {res.title && <div className='launch-facilities__wrapper__title'>{res.title}</div>}
                                    <div className='launch-facilities__wrapper__value'>{res.value}</div>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
            <div className='launch-facilities__button' onClick={() => handleListLength(buttonText)}>
                <span className={svgClassName}><svg version="1.1" width="18px" height="18px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" fill="#fff"><path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M335.083,271.083 L228.416,377.749c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251c-8.341-8.341-8.341-21.824,0-30.165 L289.835,256l-91.584-91.584c-8.341-8.341-8.341-21.824,0-30.165s21.824-8.341,30.165,0l106.667,106.667 C343.424,249.259,343.424,262.741,335.083,271.083z"></path></svg></span>
                <span className='launch-facilities__button__text'>{buttonText}</span>
            </div>
        </div>
    )
}

export default LaunchFacilities
