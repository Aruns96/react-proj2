import React ,{useState,useContext} from 'react'
import CartContext from '../../Store/cart-context';

const MedicineForm = () => {
      const cartctx = useContext(CartContext)
    const[name,setName] = useState("");
    const[description,setDescription] = useState("");
    const[price,setPrice] = useState("")
    const addMedicineHandler = (e)=>{
      e.preventDefault();
      const data = {
        name:name,
        description:description,
        price:price,
        quantity:1,
        id:Math.random().toString()
      }
      cartctx.addMedItem(data)
      setName("");
      setDescription("");
      setPrice("");

    }
    const nameChangeHandler = (e)=>{
       setName(e.target.value)
      
    }
    const descChangeHandler = (e)=>{
        setDescription(e.target.value)
        
    }
    const priceChangeHandler = (e)=>{
         setPrice(e.target.value)
         
    }
  return (
    <form>
     <label>Medicine Name</label>
     <input type='text' value={name} onChange={nameChangeHandler}/>
     <label>Description</label>
     <input type='text' value={description} onChange={descChangeHandler}/>
     <label>Price</label>
     <input type='number'value={price} onChange={priceChangeHandler}/>

     <button onClick={addMedicineHandler}>Add Medicine</button>
    </form>
  )
}

export default MedicineForm