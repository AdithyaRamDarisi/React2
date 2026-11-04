import React from 'react'

let fruits = ["Apple","Orange","Grapes"]

let players = [
    {
       cricket:"Dhoni",
       FootBall:"Messi",
       Boxing:"Tyson",
       Chess:"Marcus"
 },
 {
       cricket:"Dhoni",
       FootBall:"Messi",
       Boxing:"Tyson",
       Chess:"Marcus"
 }

]

function ArraysObjects() {
  return (
    <div>
        {players.map((item)=>{
           return(
            <div>
                <h1>My Favorite Cricket player is {item.cricket}</h1> <br/>
                <h1>My Favorite FootBall player is {item.FootBall}</h1>  <br/>
                <h1>My Favorite Chess player is {item.Chess}</h1> <br/>
                <h1>My Favorite Boxer is {item.Boxing}</h1>  <br/>
            </div>
           )
        })}
        {players[0].cricket} <br/>
        {players[0].FootBall} <br/>
        {players[0].Boxing} <br/>
        {players[0].Chess} <br/>

        {players[1].cricket} <br/>
        {players[1].FootBall} <br/>
        {players[1].Boxing} <br/>
        {players[1].Chess} <br/>
    </div>
    
  )
}

export default ArraysObjects