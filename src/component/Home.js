import React, { useContext } from 'react';
import choco from './Choco.json';
import './Home.css';
import './Header.js'
import { useNavigate } from 'react-router-dom';
// import List from './List';
// import { Context } from './Context';
// import { useState } from 'react';
import { AddToCartContext } from './Context';

function Home(props) {
    console.log(props.value)
    const navigate = useNavigate();
    const {addToCart, setAddToCart} = useContext(AddToCartContext);
    const addToCartBtn = (index) => {
        let product = choco[index];
        console.log("ChocoIndex: "+choco[0])
        props.purchaseItem(product);
        console.log("product: "+product)
    }
    // const [cart, setCart] = useState([]);
    // let chocoimg = "img"
    // const handleClick = (item) => {
    //   if (cart.indexOf(item) !== -1) return;
    //   setCart([...cart, item]);
    //   console.log(cart);
    // };
    return (
        <>
            <div id="carouselExampleFade" class="carousel slide carousel-fade m-5" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active d-block">
                        <img src="https://img.freepik.com/free-photo/indulgent-dark-chocolate-slice-rustic-wood-table-generated-by-ai_24640-91506.jpg" alt="Chocolate" style={{ width: "100%" }} />
                    </div>
                    <div class="carousel-item d-block">
                        <img src="https://img.freepik.com/free-photo/dark-chocolate-brownie-slice-with-homemade-icing-generated-by-ai_188544-16024.jpg" alt="Chocolate" style={{ width: "100%" }} />
                    </div>
                    <div class="carousel-item d-block">
                        <img src="https://img.freepik.com/free-photo/indulgent-chocolate-dessert-broken-ready-eat-generated-by-ai_24640-86689.jpg" alt="Chocolate" style={{ width: "100%" }} />
                    </div>
                    <div class="carousel-item d-block">
                        <img src="https://img.freepik.com/free-photo/ancient-leather-bound-book-burning-spooky-library-generated-by-ai_188544-31808.jpg" alt="Chocolate" style={{ width: "100%" }} />
                    </div>
                    <div class="carousel-item d-block">
                        <img src="https://img.freepik.com/free-photo/indulgent-chocolate-truffle-snack-gourmet-delight-generated-by-ai_188544-25239.jpg" alt="Chocolate" style={{ width: "100%" }} />
                    </div>
                    <div class="carousel-item d-block">
                        <img src="https://img.freepik.com/free-photo/indulgent-dessert-dark-chocolate-fudge-with-strawberries-generated-by-ai_188544-22763.jpg" alt="Chocolate" style={{ width: "100%" }} />
                    </div>
                    <div class="carousel-item d-block">
                        <img src="https://img.freepik.com/free-photo/indulgent-chocolate-cake-slice-with-creamy-icing-generated-by-ai_188544-24196.jpg" alt="Chocolate" style={{ width: "100%" }} />
                    </div>
                    <div class="carousel-item d-block">
                        <img src="https://img.freepik.com/free-photo/indulgent-dark-chocolate-slice-rustic-wood-plate-generated-by-ai_24640-86380.jpg" alt="Chocolate" style={{ width: "100%" }} />
                    </div>
                    <div class="carousel-item d-block">
                        <img src="https://img.freepik.com/free-photo/chocolate-dessert-gourmet-indulgence-decorated-with-icing-generative-ai_188544-9468.jpg" alt="Chocolate" style={{ width: "100%" }} />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className='container'>
                <h1 className='text-center'>
                    <u>Best Seller</u>
                </h1>
                <div className='row'>
                    <div className='col-sm-2'>
                        <ul class="nav pstion flex-column">

                            
                            <li class='nav-item'><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked /><label class="form-check-label" for="flexCheckChecked">All Chocolates</label></li>
                            {/* <li class="nav-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><label class="form-check-label" for="flexCheckDefault">Dark</label></li>
                            <li class="nav-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><label class="form-check-label" for="flexCheckDefault">Dark</label></li>
                            <li class="nav-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><label class="form-check-label" for="flexCheckDefault">Dark</label></li>
                            <li class="nav-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><label class="form-check-label" for="flexCheckDefault">Dark</label></li>
                            <li class="nav-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><label class="form-check-label" for="flexCheckDefault">Dark</label></li>
                            <li class="nav-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><label class="form-check-label" for="flexCheckDefault">Dark</label></li>
                            <li class="nav-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><label class="form-check-label" for="flexCheckDefault">Dark</label></li>
                            <li class="nav-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><label class="form-check-label" for="flexCheckDefault">Dark</label></li>
                            <li class="nav-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><label class="form-check-label" for="flexCheckDefault">Dark</label></li>
                            <li class="nav-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><label class="form-check-label" for="flexCheckDefault">Dark</label></li>
                            <li class="nav-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><label class="form-check-label" for="flexCheckDefault">Dark</label></li>
                            <li class="nav-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><label class="form-check-label" for="flexCheckDefault">Dark</label></li>
                            <li class="nav-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><label class="form-check-label" for="flexCheckDefault">Dark</label></li>
                            <li class="nav-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><label class="form-check-label" for="flexCheckDefault">Dark</label></li>
                            <li class="nav-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><label class="form-check-label" for="flexCheckDefault">Dark</label></li>
                            <li class="nav-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><label class="form-check-label" for="flexCheckDefault">Dark</label></li>
                            <li class="nav-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><label class="form-check-label" for="flexCheckDefault">Dark</label></li>   */}

                        </ul>
                    </div>
                    <div className='col-sm-10'>
                        <div className='row'>
                            {/* <List purchaseItem = {addToCartBtn}/> */}
                            {choco.map((choco, index) => {
                return (
                    <>
                        <div className='col-sm-3'>
                            <div class="card text-center">
                                <div>
                                    <img class="card-img-top text-center" src={choco.img} alt="Card image" />
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title">{choco.name}</h4>

                                    <p class="card-text"><h5>{choco.price}</h5></p><br />
                                    Quantity:<select id='QuaId'>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                    </select>
                                </div>
                                <div className='card-footer btn-footer'>
                                    <button href="#" class="btn btn-outline-dark" style={{ marginRight: "10px" }} onClick={() => {
                                        navigate('/detail/' + choco.id);
                                    }}>Detail</button>
                                    {/* <a href="#" class="btn btn-outline-dark" onClick={()=>addToCartBtn(index)} style={{ marginLeft: "10px" }}>Add to Cart</a> */}
                                    <button className='btn btn-warning' onClick={()=>{
                                        addToCartBtn(index)
                                        setAddToCart(addToCart+1)       
                                    }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
