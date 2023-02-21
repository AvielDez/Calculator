import React from 'react'

export default function Input({togglePosition, keyInput}){
    const buttonKeysArray = [7, 8, 9, 'DEL', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '/', 'x']

    const buttonKeys = buttonKeysArray.map(key=>{
        if(key === 'DEL'){
            return (
                <button 
                    key={key} 
                    onClick={()=>keyInput(key)}
                    className={`
                        key key-${togglePosition} 
                        key--secondary-${togglePosition} 
                        key--font-size-1-75rem
                `}>{key}</button>
            )
        }
        return (
            <button 
                key={key} 
                onClick={()=>keyInput(key)}
                className={`
                    key 
                    key-${togglePosition} 
                    key--font-size-2-5rem
            `}>{key}</button>
        )
    })
    return (
        <div className={`input input-${togglePosition}`}>
            {buttonKeys}
            <button 
                onClick={()=>keyInput('reset')}
                className={`
                    key 
                    key-${togglePosition} 
                    key--secondary-${togglePosition} 
                    grid-reset-key 
                    key--font-size-1-75rem
                `}>RESET</button>
            <button 
                onClick={()=>keyInput('=')}
                className={`
                    key 
                    key-${togglePosition} 
                    key--tertiary-${togglePosition} 
                    grid-equal-key 
                    key--font-size-1-75rem
                `}>=</button>
        </div>
    )
}