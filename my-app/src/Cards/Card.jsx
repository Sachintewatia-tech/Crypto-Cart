import React, { useState } from "react";
import './Card.css';
const Card = ({name,price,img,handleBuyData,id})=>{
    const [quan,setQuan] = useState(false);
    const [data,setData] = useState([]);
    const handleQuan = ()=>{
        setQuan(true);
    }
    const handleBuy = ()=>{
        if(data.length==0){
            alert("Please enter a quantity");
        }else if(data.length!==0) {
            handleBuyData({id,data})
            setQuan(false);
            alert("Your Item is added to your cart")
        }
    }
    return(
        <div className="card">
            <div className="name">
                <img src={img} alt="" />
                <h3>Name : {name}</h3>
                <h4>Price : ${price}</h4>
            </div>
            <div className="btns">
                <button onClick={()=>handleQuan()}>Quantity</button>
                <button onClick={()=>handleBuy()}>BUY</button>
            </div>
                { quan?<input autoFocus value={data} onChange={(e)=>setData(e.target.value)} type="number" placeholder="enter qunatity..."/>:null }
        </div>
    )
}

export default Card;