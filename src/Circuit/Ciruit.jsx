import React from 'react'
import { useState } from 'react'

function Ciruit() {
    const [game,setGame] = useState(true)

    const MyGame =()=>{
        return(
            <div>
                <h2>I like cricketer Dhoni</h2>
            </div>
        )
    }
  return (
    <div>
     {game && <MyGame />}
    </div>
  )
}

export default Ciruit