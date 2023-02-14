import React from 'react'
import ToggleThemes from './ToggleThemes'

export default function Header({toggle, togglePosition}){
    return(
        <div className='header'>
            <h1 className='header__title'>calc</h1>
            <ToggleThemes toggle={toggle} togglePosition={togglePosition}/>
        </div> 
    )
}