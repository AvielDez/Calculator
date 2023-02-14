import React from 'react'

export default function ToggleThemes({toggle, togglePosition}){
    const themeOnePosition = 'translate(1px, 5px)'
    const themeTwoPosition = 'translate(24px, 5px)'
    const themeThreePosition = 'translate(48px, 5px)'

    function position(){
        if(togglePosition === 1){
            return {transform: themeOnePosition} 
        }
        else if(togglePosition === 2){
            return {transform: themeTwoPosition} 
        }
        else if (togglePosition === 3){
            return {transform: themeThreePosition} 
        }
    }
    return (
        <div className='toggle'>
            <h1 className='toggle__name'>theme</h1>
            <div className='toggle__switch-container'>
                <div className='toggle__switch-numbers'>
                    <span>1</span><span>2</span><span>3</span>
                </div>
                <div className='toggle__switch-bg' onClick={toggle}>
                    <div className='toggle__switch-circle' style={position()}></div>
                </div>
            </div>
        </div>
    )
}