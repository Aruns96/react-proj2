import React ,{useState}from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
    const[items,setItems] = useState([]);
     const[medItems,setMedItems] = useState([]);
    const addItemHandler = item =>{
         setItems(prevState=>[...prevState,item])
    }
    const addMedItemHanler = item =>{
        setMedItems(prevState=>[...prevState,item])
   }
   
    const changeQuantity=(id, value) =>{
        if (value > 1) {
          setItems((oldCartList) => {
            return oldCartList.map((item) => {
              if (item.id === id) {
                item.quantity = value;
              }
              return item;
            });
          });
        }
      }
      const  clearCart=() =>{
       
        setItems([])
        
      }

    const cartContext = {
        items:items,
       medItems:medItems,
        addItem:addItemHandler,
        addMedItem:addMedItemHanler,
        changeQuantity: changeQuantity,
        clearCart:clearCart
        
    }
  return (
  <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
  )
}

export default CartProvider