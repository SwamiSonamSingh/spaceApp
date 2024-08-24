import React, { useEffect, useState } from 'react'
import LaunchCardComponent from './launchCardComponent/launchCardComponent'
import LaunchFacilities from '../LaunchFaclities/launchFacilities'
import StarLink from '../StarLink/starLink'
import { Hourglass } from 'react-loader-spinner'
import './launchCard.style.scss'

const LaunchCard = () => {
    const [upcomingLaunch, setUpcomingLaunch] = useState([])
    const [previousLaunch, setPreviousLaunch] = useState([])

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const upcomingLaunch = await fetch('https://api.spacexdata.com/v3/launches/upcoming')
        const upcomingLaunchData = await upcomingLaunch.json()
        const previousLaunch = await fetch('https://api.spacexdata.com/v3/launches/past')
        const previousLaunchData = await previousLaunch.json()
        setUpcomingLaunch(upcomingLaunchData)
        setPreviousLaunch(previousLaunchData)
    }
    return (
        <div className='launch-card-main'>
            {(upcomingLaunch.length === 0 || previousLaunch.length === 0) ?<div className='launch-card-main__loader'> <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#306cce', '#72a1ed']}
            /></div> : <React.Fragment>
                <div className='launch-card-main__left'>
                    <LaunchCardComponent
                        launches={upcomingLaunch}
                        type={'upcomingLaunch'}
                    />
                    <LaunchCardComponent
                        launches={previousLaunch}
                        type={'previousLaunch'}
                    />
                </div>
                <div className='launch-card-main__right'>
                    <LaunchFacilities />
                    <StarLink />
                </div>
            </React.Fragment>}
        </div>
    )
}

export default LaunchCard
