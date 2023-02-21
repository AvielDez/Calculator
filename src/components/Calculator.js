import React from 'react'
import Header from './Header'
import Interface from './Interface'

export default function Calculator({toggle, togglePosition}){
    const [userInput, setUserInput] = React.useState('')
   
    React.useEffect(()=>{
        document.addEventListener('keypress', handleInput)
        return () => {
            document.removeEventListener('keypress', handleInput)
        }
        function handleInput(event){
            if(!isNaN(event.key)){
                setUserInput(prevUserInput => prevUserInput + event.key)
            }
        }
    }, [userInput])


    function keyInput(input){
        setUserInput(prevUserInput => prevUserInput + input)
    }

    return(
        <div className='calculator'>
            <Header 
                toggle={toggle} 
                togglePosition={togglePosition}
            />
            <Interface
                keyInput = {keyInput}
                userInput = {userInput}
                togglePosition={togglePosition}
            />
        </div>
    )
}