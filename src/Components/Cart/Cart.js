import React,{useContext} from 'react'
import CartContext from '../../Store/cart-context';
import CartItem from './CartItem';

const Cart = () => {
    const cartCtx = useContext(CartContext);
    const total = cartCtx.items.reduce((sum, item) => {
        return sum + +item.price * +item.quantity;
      }, 0);
    const cartItems = (
      <ul >
        {cartCtx.items.map((item) => {
          return  <CartItem
            key={item.id}
           
             data={item}
            
            
          />
        }
          
        )}
      </ul>
    );
  
 
    
  return (
   <div>
     
      {cartItems}
      
      <div >
        <span>Total amount: </span>
        <h3>{total}</h3> 
      </div>
      <div >
        <button onClick={()=>{
           cartCtx.clearCart()
        }} >
          clearCart
        </button>
       
      </div>
    
   </div>
  )
}

export default Cart