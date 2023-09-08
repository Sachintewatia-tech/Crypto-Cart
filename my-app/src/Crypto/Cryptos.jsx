import React, { useState } from "react";
import { data } from "../Data/Data";
import Card from "../Cards/Card";
import './Crypto.css';
import Cart from "../Cart/Cart";
const Cryptos = ()=>{
    const [buyData,setBuyData] = useState([]);
    const [cart,setCart] = useState([]);

    const handleBuyData = ({id,data})=>{
        setBuyData({id,data});
    }

    const cartData = data.filter((ele)=>{
            return ele.id === buyData.id
    });
        
    return(
        <>
        <h1>Buy Crypto Currency..!</h1>
        <div id="crypto">
            {
                data && data.map((ele)=>{
                    return(
                        <Card key={ele.id} {...ele} handleBuyData={handleBuyData}/>
                        )
                    })
                }
        </div>
        <div>
            <h1 style={{marginTop:"7%"}}>---YOUR CART---</h1>
            {
                cartData.length===0?<h3>Your Cart is Empty!</h3>: 
                cartData && cartData.map((ele,i)=>{
                    return(
                        <Cart key={i} {...ele} data={buyData.data} />
                        )
                    })
                }
        </div>
        </>
    )
}

export default Cryptos;