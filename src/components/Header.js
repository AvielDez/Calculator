import React from 'react'
import ToggleThemes from './ToggleThemes'

export default function Header(){
    return(
        <div className='header'>
            <h1 className='header__title'>calc</h1>
            <ToggleThemes/>
        </div> 
    )
}