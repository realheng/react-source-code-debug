import React, { useEffect, useState, useLayoutEffect } from 'react'

const UseEffectExp = () => {
  const [ text, setText ] = useState(0)
    useEffect(() => {
        console.log('effect1')
        return () => {
            console.log('destory1');
        }
    }, [text])
    useLayoutEffect(() => {
        console.log('effect2')
        return () => {
            console.log('destory2');
        }
    }, [])
    const handleClick = () => {
        setText(text)
    }
    return <div>
        <button onClick={handleClick}>{text}</button>
        useEffect
    </div>
}

export default UseEffectExp
