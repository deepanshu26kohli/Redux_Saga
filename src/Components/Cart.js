import React from 'react'
import { useSelector } from 'react-redux'


const Cart = () => {
    let TotalPrice = 0
    const myCart = useSelector((state)=>state.cartData)
    console.log(myCart)
    myCart.reverse()
  return (
    <div>
      My Cart
      {
        myCart && myCart.map((e)=>{
            TotalPrice = TotalPrice + parseInt(e.price)
            return <div key={e.id}>
            <p>Name : {e.name}</p>
            <p>Price : {e.price}</p>
            <p>Category : {e.category}</p>
            <hr />
          </div>
        })
      }
      {TotalPrice>0?<h3>Total Price : {TotalPrice}</h3>:""}
    </div>
  )
}

export default Cart
