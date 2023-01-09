import React,{ useEffect } from 'react'

const Alert = ({ type, msg, removeAlert, list }) => {

    useEffect(()=>{
        const timeout= setTimeout(()=>{
            removeAlert()
        }, 3000)
        return ()=> clearTimeout(timeout)
    },[list])
    return (
        <p className='bg-green-200 rounded-sm text-center text-sm font-semibold py-1'>{msg}</p>
    )
}



export default Alert
