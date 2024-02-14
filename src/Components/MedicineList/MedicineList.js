import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";
import MedicineListItem from "../MedicineListItem.js/MedicineListItem";

const MedicineList = () => {
  const cartctx = useContext(CartContext);
  return (
    <div>
      <ul>
       
        {cartctx.medItems.map((item) => (
          <MedicineListItem
            key={Math.random().toString()}
           data={item}
        
          />
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;
