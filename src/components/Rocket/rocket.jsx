import React, { useEffect, useState } from 'react'
import RocketComponent from './RocketComponent/rocketComponent'
import { Hourglass } from 'react-loader-spinner'
import './rocket.style.scss'

const Rocket = () => {
    const [rocketDetails, setRocketDetails] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const data = await fetch('https://api.spacexdata.com/v3/rockets');
        const result = await data.json()
        setRocketDetails(result)
    }
    return (
        rocketDetails.length === 0 ? <div className='launch-card-main__loader'> <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#306cce', '#72a1ed']}
        /></div> : <div className='rocket'>
            {rocketDetails.map((data, index) => {
                return (
                    <RocketComponent
                        {...data}
                        key={index}
                    />
                )
            })}
        </div>
    )
}

export default Rocket
