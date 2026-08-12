import React from 'react'

const Array = ["Apple","Orange",{userName:"Adithya"},23]

function Arrays() {
  return (
    <div>
        {Array[0]}
       <h1>{Array[1]} tastes very good</h1> 
       <h2>My Age is {Array[3]}</h2>
       {/* <h2>{Array[2]}</h2> */}
       <h1> Hello! Happy Wednesday</h1>
    </div>
  )
}

export default Arrays