import React from 'react'
import Kolkata from './Kolkata'
import { useData } from '../Context/ExampleContext'

const Bombay = ({gift}) => {
    const {surprise} = useData()
  return (
    <div>
        Bombay
        <h2>My name is {surprise}</h2>
        <Kolkata gift={gift}/>
    </div>
  )
}

export default Bombay