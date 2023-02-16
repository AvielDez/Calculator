import React from 'react'

export default function Display({togglePosition}){
    return(
        <div className={`display display-${togglePosition}`}>
            <p className='display__upper-line'>20 x 20 =</p>
            <p className='display__main-line'>400</p>
        </div>
    )
}