import React from 'react'
import Header from './Header'
import Interface from './Interface'

export default function Calculator({toggle, togglePosition}){
    return(
        <div className='calculator'>
            <Header 
                toggle={toggle} 
                togglePosition={togglePosition}
            />
            <Interface
                togglePosition={togglePosition}
            />
        </div>
    )
}