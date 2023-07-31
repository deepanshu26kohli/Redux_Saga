import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import {Route,Routes} from 'react-router-dom'
import Cart from './Components/Cart'
const App = () => {
  
  return (
    <div>
      
      <Header/>
      <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/cart" element={<Cart/>}/>
      </Routes>
    
    </div>
  )
}

export default App
