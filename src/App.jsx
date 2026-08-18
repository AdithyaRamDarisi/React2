// import React from 'react'
// import Click from './Events/Click'

// function App() {
//   return (
//     <div>
//       <Click/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import FormExample from './Forms/FormExample'

// function App() {
//   return (
//     <div>
//       <FormExample/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Arrays from './Arrays/Arrays'

// function App() {
//   return (
//     <div>
//       <Arrays/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import ArraysObjects from './Arrays/ArraysObjects'

// function App() {
//   return (
//     <div>
//       <ArraysObjects/>
//     </div>
//   )
// }

// export default App

// console.log(userData[0])

// import React from 'react'
// import { userData } from './NestedObjects/Nestedobjects'

// function App() {
//   return (
//     <div>
//       {userData.map((user)=>{
//         return(
//           <div style={{border:"1px solid black"}}>
//             <div>{user.username}</div>
//             <div>{user.email}</div>
//             <div>{user.address.city}</div>
//           </div>
//         )
//       })}
//     </div>
//   )
// }
// export default App

// import React from 'react'
// import Templatelit from './TemplateLiterals/Templatelit'

// function App() {
//   return (
//     <div>
//       <Templatelit/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Userpage from './FetchAPI/Userpage'

// function App() {
//   return (
//     <div><Userpage/></div>
//   )
// }

// export default App

// import React from 'react'
// import Ciruit from './Circuit/Ciruit'
// import MultiState from './useReducer/MultiState'

// function App() {
//   return (
//     <div>
//       <MultiState/>
//     </div>
//   )
// }

// export default App
import React from 'react'
import Firstpage from './Routing/Firstpage'
import SecondPage from './Routing/SecondPage'
import ThirdPage from './Routing/ThirdPage'
import FourthPage from './Routing/FourthPage'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/abc' element = {<h1><Firstpage/></h1>}/>
        <Route path='/xyz' element = {<h1><SecondPage/></h1>}/>
      </Routes>
      {/* <Firstpage/>
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/> */}
    </div>
  )
}

export default App