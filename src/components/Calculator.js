import React from 'react'
import Header from './Header'
import Interface from './Interface'

export default function Calculator(){
    const positionOne = 1
    const positionTwo = 2
    const positionThree = 3
    
    const [togglePosition, setTogglePosition] = React.useState(positionOne)

    function toggle(){
        if(togglePosition === positionOne){
            setTogglePosition(prevTogglePosition=> positionTwo)
        }
        else if(togglePosition === positionTwo){
            setTogglePosition(prevTogglePosition=> positionThree)
        }
        else{
            setTogglePosition(prevTogglePosition=> positionOne)
        }
    }
    
    return(
        <div className='calculator'>
            <Header 
                toggle={toggle} 
                togglePosition={togglePosition}
            />
            <Interface/>
        </div>
    )
}