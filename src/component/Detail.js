import { useNavigate, useParams } from "react-router-dom"
import choco from './Choco.json';
import './Detail.css'
import { AddToCartContext } from "./Context";
import { useContext, useState } from "react";
const Detail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const {addToCart, setAddToCart} = useContext(AddToCartContext);
    let idWant = id;
    let chocoimg = "img"
    let chochoname = "name"
    let chochobrand = "brand"
    let chochoprice = "price"
    console.log(idWant);
    let res = choco.filter((item) => {

        return item.id == idWant;
    })
    
    return (
        <>
            <div className="container">
                <div className="row chocodetail">
                    <div className="col-3">
                        <img src={res[0][chocoimg]} alt='chocho' className="chocoimage" />
                    </div>
                    <div className="col choconame">
                        <h2>{res[0][chochoname]}</h2>
                        <span className="brand">Brand: {res[0][chochobrand]}</span>
                        <br />
                        <br />
                        <span className="chocoprice">{res[0][chochoprice]}</span>
                        <div className="btns">
                            <button className="btn btn-outline-warning backbtn" onClick={() => {
                                navigate('/')
                            }}>Back</button>
                            <button className="btn btn-warning addtocartbtn" onClick={() => {
                                setAddToCart(addToCart+1)
                                console.log(res[0])
                            }}>Add to Cart</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Detail;