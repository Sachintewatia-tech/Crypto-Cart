import React, { useState } from "react";
import { data } from "../Data/Data";
import Card from "../Cards/Card";
import './Crypto.css';
import Cart from "../Cart/Cart";
const Cryptos = ()=>{
    const [buyData,setBuyData] = useState([]);
    const [cart,setCart] = useState([]);

    const handleBuyData = (props,data)=>{
        setBuyData(data);
        setCart([...cart,props]);
    }

    console.log('data',buyData);
    console.log('cart',cart);
    const handleDelete = (id)=>{
        const deleteCart = cart.filter((ele)=>{
                return ele.id !== id
        });
        setCart(deleteCart);
    }
        
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
                cart.length===0?<h3>Your Cart is Empty!</h3>: 
                cart && cart.map((ele,i)=>{
                    return(
                        <Cart key={i} {...ele} data={buyData} handleDelete={handleDelete} />
                        )
                    })
                }
        </div>
        </>
    )
}

export default Cryptos;