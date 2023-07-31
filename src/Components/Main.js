import React, { useEffect } from 'react'
import { addToCart, removeFromCart, emptyCart } from '../Redux/Action'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../Redux/ProductAction'
const Main = () => {
  const dispatch = useDispatch()
  const result = useSelector((state) => state.productData)
  useEffect(() => {
    dispatch(productList())
  }, [])
  return (
    <div>
      <h1>Main Component</h1>
      <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      <div>
        {
          result.map((e) => {
            return <div key={e.id}>
              <p>Name : {e.name}</p>
              <p>Price : {e.price}</p>
              <p>Category : {e.category}</p>
              <button onClick={() => dispatch(addToCart(e))}>Add to cart</button>
              <button onClick={() => dispatch(removeFromCart(e.id))}>Remove from cart</button>
              <hr />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Main
