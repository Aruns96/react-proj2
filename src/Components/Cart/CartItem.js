import React,{useRef,useContext} from 'react'
import CartContext from '../../Store/cart-context';

const CartItem = (props) => {
    const cartCtx = useContext(CartContext)
    const inputQuantity = useRef();
  return (
    <li>
        {props.data.name}-{props.data.description}-{props.data.price}---
        <label>quantity:</label>
        <input
          ref={inputQuantity}
          type="number"
          
          defaultValue={props.data.quantity}
          onChange={() => {
            cartCtx.changeQuantity(props.data.id, inputQuantity.current.value);
          }}
        />
    </li>
  )
}

export default CartItem