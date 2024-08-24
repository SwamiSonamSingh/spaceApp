import React from 'react'
import './launchCardComponent.style.scss'
import { redditSvg, youtubeSvg, wikipediaSvg, crewSvg } from '../../../utils/logo'

const dateTimeResolver = (payload) => {
    const date = new Date(payload);
    const optionsDate = {
        month: 'long',
        day: 'numeric',
    };
    const optionsTime = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    const formattedDate = date.toLocaleString('en-US', optionsDate);
    const formattedTime = date.toLocaleString('en-US', optionsTime);
    return `${formattedDate}, ${formattedTime}`
}

const crewSvgResolver = (count) => {
    let items =[]
    for (let i = 0; i < count; i++){
        items.push(crewSvg)
    }
    return items
}

const LaunchCardComponent = (props) => {
    const { launches, type } = props
    return (
        <div className='launch-card'>
            {launches.map((launchDetails, index) => {
                return (
                    <div key={index} className='launch-card__details'>
                        <h3 className='launch-card__details__heading'>{type === 'upcomingLaunch' ? 'Upcoming launch' : 'Previous launch'}</h3>
                        <div className='launch-card__details__wrapper'>
                            <div className='launch-card__details__wrapper__left'>
                                <div className='launch-card__details__wrapper__left__section'>
                                    <h4 className='launch-card__details__wrapper__left__section__title'>MISSION NAME</h4>
                                    <p className='launch-card__details__wrapper__left__section__value'>{launchDetails.mission_name}</p>
                                </div>
                                <div className='launch-card__details__wrapper__left__section'>
                                    <h4 className='launch-card__details__wrapper__left__section__title'>Rocket</h4>
                                    <p className='launch-card__details__wrapper__left__section__value'>{launchDetails.rocket.rocket_name}</p>
                                </div>
                                <div className='launch-card__details__wrapper__left__section'>
                                    <h4 className='launch-card__details__wrapper__left__section__title'>Flight Number</h4>
                                    <p className='launch-card__details__wrapper__left__section__value'>{launchDetails.flight_number}</p>
                                </div>
                                <div className='launch-card__details__wrapper__left__section'>
                                    <h4 className='launch-card__details__wrapper__left__section__title'>Time (UTC)</h4>
                                    <p className='launch-card__details__wrapper__left__section__value'>{dateTimeResolver(launchDetails.launch_date_utc)}</p>
                                </div>
                                <div className='launch-card__details__wrapper__left__section'>
                                    <h4 className='launch-card__details__wrapper__left__section__title'>Links</h4>
                                    <div className='launch-card__details__wrapper__left__section__values'>
                                        <a className={launchDetails.links.wikipedia === null ? 'launch-card__details__wrapper__left__section__values__wiki--disabled' : 'launch-card__details__wrapper__left__section__values__wiki'} href={launchDetails.links.wikipedia} target='blank'>{wikipediaSvg}</a>
                                        <a className={launchDetails.links.video_link === null ? 'launch-card__details__wrapper__left__section__values__youtube--disabled' : 'launch-card__details__wrapper__left__section__values__youtube'} href={launchDetails.links.video_link} target='blank'>{youtubeSvg}</a>
                                        <a className={launchDetails.links.reddit_media === null ? 'launch-card__details__wrapper__left__section__values__reddit--disabled' : 'launch-card__details__wrapper__left__section__values__reddit'} href={launchDetails.links.reddit_media} target='blank'>{redditSvg}</a>
                                    </div>
                                </div>
                            </div>
                            <div className='launch-card__details__wrapper__right'>
                                <div className='launch-card__details__wrapper__right__section'>
                                    <h4 className='launch-card__details__wrapper__right__section__title'>{type === 'upcomingLaunch' ? 'ROCKET LOGO' : 'MISSION PATCH'}</h4>
                                    {launchDetails.links.mission_patch === null ? <div className='launch-card__details__wrapper__right__section__noImage'>No Image</div> : <img className='launch-card__details__wrapper__right__section__image' src={launchDetails.links.mission_patch} alt='Loading...' />}
                                </div>
                                {type === 'upcomingLaunch' ? <div className='launch-card__details__wrapper__right__section'>
                                    <h4 className='launch-card__details__wrapper__right__section__title'>LAUNCHPAD</h4>
                                    <p className='launch-card__details__wrapper__right__section__value'>{launchDetails.launch_site.site_name}</p>
                                </div> : <div className='launch-card__details__wrapper__right__section'>
                                    <h4 className='launch-card__details__wrapper__right__section__title'>CREW</h4>
                                    <div>
                                            { crewSvgResolver(3)}
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default LaunchCardComponent
