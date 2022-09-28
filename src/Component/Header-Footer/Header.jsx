import React from 'react'
import '../style/Style.css'
import ZayImage from '../images/apple-icon.png'
import $ from 'jquery'
import { Link } from 'react-router-dom';

export default function Header() {
    $(document).ready(() => {
        $("#fa-search").click(function(){
            console.log('Hello');
            $('.search').css({'transform' : 'translateY(0%)'});
            $("body").css('overflow','hidden')
        });
        $(".fa-close").click(()=>{
            $('.search').css({'transform' : 'translateY(-100%)'});
            $("body").css('overflow','auto')
        })
    });
  return (
    <>
    <section className="search py-5" id="search">
        <div className='close'>
            <i className='fas fa-close'></i>
        </div>
        <div className='d-flex justify-content-center mt-5'>
        <input type="text" placeholder='Search ....' className='rounded-0 form-control w-50 p-3' />
        <div className='btn btn-success rounded-0 p-3 d-flex justify-content-center align-items-center'> 
        <i className='fas fa-search'></i> </div>
        </div>
    </section>
    <nav className="navbar navbar-expand-lg bg-dark py-3">
        <div className="container">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                    <Link className="nav-icons active text-white" aria-current="page" to="home">
                    <i className="fa-solid fa-envelope me-2"></i> info@company.com</Link>
                </li>
                <li>
                    <Link className="nav-icons text-white" to="home">
                        <i className='fas fa-phone me-1 ms-3'></i> 010-020-0340
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li>
                    <Link className="nav-links mx-4" aria-current="page" to="home">
                        <i className='fab fa-facebook-f mx-2'></i>
                        <i className='fab fa-instagram mx-2'></i>
                        <i className='fab fa-twitter mx-2'></i>
                        <i className='fab fa-linkedin mx-2'></i>
                    </Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    <nav className="navbar navbar-expand-lg py-1">
        <div className="container">
            <Link className="navbar-brand" to="">
                <img src={ZayImage} alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active mx-lg-5" aria-current="page" to="home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mx-lg-5" to="about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mx-lg-5" to="shop">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mx-lg-5" to="contact">Contact</Link>
                    </li>
                </ul>
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <i className='fas fa-search me-4' id='fa-search'></i>
                        <i class="fas fa-cart-shopping me-4"></i>
                        <i className="fas fa-user me-4"></i>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
