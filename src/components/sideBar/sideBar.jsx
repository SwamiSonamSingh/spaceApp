import React, { useState } from 'react'
import { mainLogo } from '../../utils/logo'
import './sideBar.style.scss'
import { Link } from 'react-router-dom'

const navItems = [
    {
        path:'/',
        name: 'dashboard',
        title: 'Dashboard'
    },
    {
        path:'/rockets',
        name: 'rocket',
        title: 'Rocket'
    }
]

const SideBar = () => {
    const [selectedTab, setSelectedTab] = useState('dashboard')
    const [path, setPath] = useState('/')
    return (
        <div className='side-bar'>
            <div className='side-bar__logo'>{mainLogo}</div>
            <ul className='side-bar__navBar'>
                {navItems.length !== 0 && navItems.map((items, index) => {
                    const itemClassName = items.name ? `side-bar__navBar__items--${items.name}` : 'side-bar__navBar__items'
                    const seletedClassName = selectedTab === items.name ? `${itemClassName}--selected`:itemClassName
                    return (
                        <Link to={path}><li onClick={() => { setSelectedTab(items.name); setPath(items.path) }} className={seletedClassName} key={index}>{items.title}</li></Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideBar
