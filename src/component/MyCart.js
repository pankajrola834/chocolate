import { useEffect, useState } from "react";
// import choco from './Choco.json';
import Swal from "sweetalert2";
import 'animate.css';

import './MyCart.css'
export default function MyCart(props) {
    const items = props.purchaseItem;
    const [amount, setAmount] = useState(0);
    
    var today = new Date();
    var year = today.getFullYear();
    var mes = today.getMonth();
    var dia = today.getDate()+4;
    var newDate =dia+"-"+mes+"-"+year;

    const makeTotal = () => {
        let sum = 0; // Declare 'sum' inside the function
        for (let i = 0; i < items.length; i++) {
            let number = items[i].price;
            console.log(number)
            console.log(parseInt(items[i].price,10))
            console.log(number.substring(1,number.length))
            sum += parseInt(number.substring(1,number.length));
        }
        setAmount(sum);
    }

    useEffect((() => {
        makeTotal();
    }), [])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h2 className="text-primary">Shopping Cart</h2>
                        <div className="pdcts">
                            {items.map((choco, index) => {
                                return (
                                    // <div className="container">
                                    // <div className="row">
                                    // <div className="mt-3 col-4">
                                    //     <img src={choco.img} style={{ width: "150px" }} alt="chocoImg"/>
                                    //     </div>
                                    //     <div className="col">
                                    //      <span>{choco.name}</span>
                                    //      <br/>
                                    //      <span>{choco.price}</span>
                                    //      </div>
                                    
                                    // </div>
                                    // </div>
                                    <>
                                        <table className="mt-1 ms-3">
                                            <tr>
                                                <td >
                                                    <img src={choco.img} style={{ width: "150px" }} alt="chocoImg"/>
                                                </td>
                                                <td >
                                                    <h4 className="ms-4">{choco.name}</h4>
                                                    
                                                    <h6 className="ms-4">by {choco.brand}</h6>
                                                    
                                                    <h4 className="ms-4">₹{amount}</h4>
                                                </td>
                                                
                                            </tr>
                                            <tr style={{borderBottom:"1px solid gray",width:"550px"}}>
                                                <td colspan="100%"></td>
                                            </tr>
                                        </table>
                                        
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <h2 className="text-primary">Your Order</h2>
                        <table className="table">
                            <tr>
                                <th>
                                    Product
                                </th>
                                <th>
                                    Subtotal
                                </th>
                            </tr>
                            {items.map((choco, index) =>
                                <tr>
                                    <td>
                                        {choco.name}
                                    </td>
                                    <td>
                                        {choco.price}
                                    </td>
                                </tr>)}
                            <tr>
                                <h4>
                                    <td>
                                        Total
                                    </td>
                                    <td>
                                        ₹{amount}
                                    </td>
                                </h4>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <button className="btn btn-outline-dark" onClick={()=>{
                                        Swal.fire({
                                            icon: 'success',
                                            title: `Your Order Placed On ${newDate}`,
                                            showClass: {
                                              popup: 'animate__animated animate__fadeInDown'
                                            },
                                            hideClass: {
                                              popup: 'animate__animated animate__fadeOutUp'
                                            }
                                          })
                                    }}>
                                        Place the Order
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}














// import React, { useState } from "react";
// import MyCart from "./MyCart";

// export default function App() {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: "Item 1", price: 10, quantity: 1 },
//     { id: 2, name: "Item 2", price: 15, quantity: 1 },
//     // Add more items as needed
//   ]);

//   const updateCart = (updatedItems) => {
//     setCartItems(updatedItems);
//   };

//   const placeOrder = () => {
//     // Handle placing the order here
//     alert("Order placed!");
//   };

//   return (
//     <div className="App">
      
//     </div>
//   );
// }
