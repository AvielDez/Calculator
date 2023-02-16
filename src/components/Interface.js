import React from 'react'
import Display from './Display'
import Input from './Input'

export default function Interface({togglePosition}){
    return (
        <div className='interface'>
            <Display
                togglePosition={togglePosition}
            />
            <Input
                togglePosition={togglePosition}
            />
        </div>
    )
}