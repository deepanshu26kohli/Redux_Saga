import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { productSearch } from '../Redux/ProductAction'

const Header = () => {
    const result = useSelector((state)=>state.cartData)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Header Component</h1>
      <input type="text" placeholder='Search Products' onChange={(event)=>{dispatch(productSearch(event.target.value))}}/>
      <Link to='/'>Back to home</Link><br/>
      <Link to="/Cart" >MyCart Count : </Link>{result.length}
      <hr />
 
    </div>
  )
}

export default Header
