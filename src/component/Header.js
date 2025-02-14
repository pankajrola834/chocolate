import React, { useContext } from 'react';
import './Header.css';
import { Link, Outlet } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AddToCartContext } from './Context';
// import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

function Header() {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -4,
            top: 5,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));
    const navigate = useNavigate();
    const { addToCart, setAddToCart } = useContext(AddToCartContext);
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <img src="logo.jpg" alt="" style={{ width: "50px" }} />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" to='/'>Home</Link>
                            </li>
                            <li class="nav-item dropdown">

                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Plain Chocolates</a></li>
                                    <li><a class="dropdown-item" href="#">Milk Chocolates</a></li>
                                    <li><a class="dropdown-item" href="#">Dark Chocolates</a></li>
                                    <li><a class="dropdown-item" href="#">White Chocolates</a></li>
                                    <li><a class="dropdown-item" href="#">Fruit Chocolates</a></li>
                                    <li><a class="dropdown-item" href="#">Dry-fruit Chocolates</a></li>
                                    <li><a class="dropdown-item" href="#">Mint Chocolates</a></li>
                                    <li><a class="dropdown-item" href="#">Nuts Chocolates</a></li>
                                    <li><a class="dropdown-item" href="#">Protein Bar Chocolates</a></li>
                                    <li><a class="dropdown-item" href="#">Eggless Chocolates</a></li>
                                    <li><a class="dropdown-item" href="#">Sugarfree Chocolates</a></li>
                                    <li><a class="dropdown-item" href="#">Vegan Chocolates</a></li>
                                    <li><a class="dropdown-item" href="#">Caramel Chocolates</a></li>
                                    <li><a class="dropdown-item" href="#">Caramilk Chocolates</a></li>
                                    <li><a class="dropdown-item" href="#">Hot Chocolates</a></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">Gifting</a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Business Gift</a></li>
                                    <li><a class="dropdown-item" href="#">Gift Bag</a></li>
                                    <li><a class="dropdown-item" href="#">Gift Box</a></li>
                                    <li><a class="dropdown-item" href="#">Gift Basket</a></li>
                                    <li><a class="dropdown-item" href="#">Love Gift</a></li>

                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">Occasion</a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Birthday</a></li>
                                    <li><a class="dropdown-item" href="#">Party</a></li>
                                    <li><a class="dropdown-item" href="#">Congratulations</a></li>
                                    <li><a class="dropdown-item" href="#">Thank You</a></li>
                                    <li><a class="dropdown-item" href="#">Get Well</a></li>
                                    <li><a class="dropdown-item" href="#">Wedding</a></li>
                                    <li><a class="dropdown-item" href="#">Anniversary</a></li>
                                    <li><a class="dropdown-item" href="#">Baby Shower</a></li>
                                    <li><a class="dropdown-item" href="#">New Baby</a></li>
                                    <li><a class="dropdown-item" href="#">Care Package</a></li>
                                </ul>
                            </li>


                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">Pic & Mix</a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Venchi</a></li>
                                    <li><a class="dropdown-item" href="#">Whittaker</a></li>
                                    <li><a class="dropdown-item" href="#">Lindor</a></li>
                                    <li><a class="dropdown-item" href="#">Loose Lindor</a></li>
                                    <li><a class="dropdown-item" href="#">Pic & Mix Chocolate Squares</a></li>
                                </ul>
                            </li>


                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">Festival & Seasonal</a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Valentine's Day</a></li>
                                    <li><a class="dropdown-item" href="#">Chocolate Day</a></li>
                                    <li><a class="dropdown-item" href="#">Mother Day</a></li>
                                    <li><a class="dropdown-item" href="#">Father Day</a></li>
                                    <li><a class="dropdown-item" href="#">Rakhi Special</a></li>
                                    <li><a class="dropdown-item" href="#">Diwali Special</a></li>
                                    <li><a class="dropdown-item" href="#">New Year Special</a></li>
                                    <li><a class="dropdown-item" href="#">Christmas Special</a></li>
                                    <li><a class="dropdown-item" href="#">Summer Special</a></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">Pairing & Recipes</a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Dark Chocolate</a></li>
                                    <li><a class="dropdown-item" href="#">White Chocolate</a></li>
                                    <li><a class="dropdown-item" href="#">Chocolate Chips</a></li>
                                    <li><a class="dropdown-item" href="#">Vegan</a></li>
                                    <li><a class="dropdown-item" href="#">Baking with Lindt</a></li>
                                </ul>
                            </li>

                            <li className='txtOfSrc'>

                                <input type='text' className='serarchtxt' placeholder='serach your favorite...' />
                                <button className='btn btn-search btn-outline-danger'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search " viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg></button>
                            </li>
                            <li>
                           
                            </li>




                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Header;
