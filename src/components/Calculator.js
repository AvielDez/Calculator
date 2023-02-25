import React from 'react'
import Header from './Header'
import Interface from './Interface'

export default function Calculator({toggle, togglePosition}){
    const [userInput, setUserInput] = React.useState('0')

    React.useEffect(()=>{
        if(userInput === ''){
            setUserInput('0')
        }
        // else{
        //     const stringNum = userInput.split(',').join('')
        //     const formattedNumber = Number(stringNum).toLocaleString("en-US")
        //     setUserInput(formattedNumber)
        // }
        document.addEventListener('keydown', handleInput)

        return () => {
            document.removeEventListener('keydown', handleInput)
        }

        function handleInput(event){
            const key = event.key
            numberInput(key)
            deleteInput(key)
        }
    }, [userInput])

    function keyInput(input){
            numberInput(input)
            deleteInput(input)
    }

    function numberInput(input){
        //Checks if the userInput equals 0
        if((!isNaN(input) || input === '.') && userInput === '0'){
            //Will place a Zero in front of the decimal point
            if(input === '.'){
                setUserInput(`0${input}`)
            } else{
                setUserInput(input)
            }
        }
        //Checks if the userInput does not equal 0
        else if((!isNaN(input) || input === '.') && userInput !== '0') {
            //Checks if userInput contains a decimal point
            let userInputSplit = userInput.split('')
            if(input === '.' && !userInputSplit.includes('.')){
                setUserInput(prevUserInput => prevUserInput + input)
            }
            else if(!isNaN(input)){
                setUserInput(prevUserInput => prevUserInput + input)
            }
        }
    }

    function deleteInput(input){
        if(input === 'DEL' || input === 'Delete' || input === 'Backspace'){
            let userInputSplit = userInput.split('')
            userInputSplit.pop()
            let deletedUserInput = userInputSplit.join('')
            setUserInput(deletedUserInput)
        }
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