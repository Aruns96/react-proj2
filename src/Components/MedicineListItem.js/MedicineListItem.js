import React ,{useContext} from 'react';
import CartContext from '../../Store/cart-context';

const MedicineListItem = (props) => {
    const cartctx = useContext(CartContext)
    
  return (
   
    <li>
        
        {props.data.name}-{props.data.description}-{props.data.price}
        <button onClick={()=>{
            
          cartctx.addItem(props.data)
        }}>Add to Cart</button>
    </li>
  )
}

export default MedicineListItem