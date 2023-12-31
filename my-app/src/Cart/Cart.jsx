import React from "react";
import './Cart.css';
const Cart = ({img,name,data,price,id,handleDelete})=>{
    return(
        <div className="cart">
            <img src={img} alt="image" />
            <h4>Name : {name}</h4>
            <h4> Price : ${price} </h4>
            <h4>Quantity : {data} </h4>
            <h4>Total Price : ${price*data}</h4>
            <button onClick={()=>handleDelete(id)}>Remove</button>
        </div>
    )
}

export default Cart;