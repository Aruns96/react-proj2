
import './App.css';
import Cart from './Components/Cart/Cart';
import MedicineForm from './Components/MedicineForm/MedicineForm';
import MedicineList from './Components/MedicineList/MedicineList';
import CartProvider from './Store/CartProvider';
import React,{useState} from 'react';

function App() {
  const[showCart,setShowCart] = useState(false)
  const showCartHandler =()=>{
    setShowCart(true)
  }
  return (
    <>
    <CartProvider>
    <button onClick={showCartHandler}>Cart</button>
    {showCart && <Cart/>}
    
     <MedicineForm/>
     <MedicineList/>
    </CartProvider>
    </>
   
  );
}

export default App;
