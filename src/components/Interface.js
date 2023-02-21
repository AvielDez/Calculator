import React from 'react'
import Display from './Display'
import Input from './Input'

export default function Interface({togglePosition, keyInput, userInput}){
    return (
        <div className='interface'>
            <Display
                togglePosition={togglePosition}
                userInput = {userInput}

            />
            <Input
                keyInput={keyInput}
                togglePosition={togglePosition}
            />
        </div>
    )
}