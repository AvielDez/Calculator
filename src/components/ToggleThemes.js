import React from 'react'

export default function ToggleThemes(){
    return (
        <div className='toggle'>
            <h1 className='toggle__name'>theme</h1>
            <div className='toggle__switch-container'>
                <div className='toggle__switch-numbers'>
                    <span>1</span><span>2</span><span>3</span>
                </div>
                <div className='toggle__switch-bg'>
                    <div className='toggle__switch-circle'></div>
                </div>
            </div>
        </div>
    )
}