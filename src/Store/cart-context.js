import React from 'react'



const CartContext = React.createContext({
    items:[],
    medItems:[],
   
    addItem:(item)=>{

    },
    addMedItem:(item)=>{

    },
    changeQuantity: () => {},
    clearCart:()=>{}
   
})

export default  CartContext;