import React from 'react'
import DeleteKey from './DeleteKey'
import EqualKey from './EqualKey'
import NumberKey from './NumberKey'
import OperatorKey from './OperatorKey'
import ResetKey from './ResetKey'


export default function Input(){
    return (
        <div className='input'>
            <NumberKey value='7'/>
            <NumberKey value='8'/>
            <NumberKey value='9'/>
            <DeleteKey/>
            <NumberKey value='4'/>
            <NumberKey value='5'/>
            <NumberKey value='6'/>
            <OperatorKey value='+'/>
            <NumberKey value='1'/>
            <NumberKey value='2'/>
            <NumberKey value='3'/>
            <OperatorKey value='-'/>
            <NumberKey value='.'/>
            <NumberKey value='0'/>
            <OperatorKey value='/'/>
            <OperatorKey value='x'/>
            <ResetKey/>
            <EqualKey/>
        </div>
    )
}