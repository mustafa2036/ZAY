import React from 'react'
import "../App.css";

import shop_1 from './images/shop_01.jpg'
import shop_2 from './images/shop_02.jpg'
import shop_3 from './images/shop_03.jpg'
import shop_4 from './images/shop_04.jpg'
import shop_5 from './images/shop_05.jpg'
import shop_6 from './images/shop_06.jpg'
import shop_7 from './images/shop_07.jpg'
import shop_8 from './images/shop_08.jpg'
import shop_9 from './images/shop_09.jpg'

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import brand_1 from './images/brand_01.png'
import brand_2 from './images/brand_02.png'
import brand_3 from './images/brand_03.png'
import brand_4 from './images/brand_04.png'
import { Link } from 'react-router-dom';

export default function Shop() {
  return (
    <>
    <section className='shop py-5'>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="box">
                        <h2 className='mb-3'>Categories</h2>
                        <div className="dropdown py-2 fw-bold">
                            <a className="btn dropdown-toggle pe-3 py-2" 
                                href="#home" role="button" id="dropdownMenuLink" 
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Gender
                            </a>
                            <ul className="dropdown-menu py-2 px-1" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item py-2" href="#home">Man</a></li>
                                <li><a className="dropdown-item py-2" href="#home">Woman</a></li>
                            </ul>
                        </div>
                        <div className="dropdown py-2 fw-bold">
                            <a className="btn dropdown-toggle pe-3 py-2" 
                                href="#home" role="button" id="dropdownMenuLink" 
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Sale
                            </a>
                            <ul className="dropdown-menu py-1 px-1" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item py-2" href="#home">Sport</a></li>
                                <li><a className="dropdown-item py-2" href="#home">Luxury</a></li>
                            </ul>
                        </div>
                        <div className="dropdown py-2 fw-bold">
                            <a className="btn dropdown-toggle pe-3 py-2" 
                                href="#home" role="button" id="dropdownMenuLink" 
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Product
                            </a>
                            <ul className="dropdown-menu py-1 px-1" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item py-2" href="#home">Bag</a></li>
                                <li><a className="dropdown-item py-2" href="#home">Sweather</a></li>
                                <li><a className="dropdown-item py-2" href="#home">Sunglass</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="big-box">
                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <Link to="/shop">
                                    <span className='fw-bold mx-3'>All's</span>
                                </Link>
                                <Link to="/shop">
                                    <span className='fw-bold mx-3'>Men's</span>
                                </Link>
                                <Link to="/shop">
                                    <span className='fw-bold mx-3'>Woman's</span>
                                </Link>
                            </div>
                            <select class="form-select w-50 fw-bold" aria-label="Default select example">
                                <option value="1">Featured</option>
                                <option value="2">A to Z</option>
                                <option value="3">Item</option>
                            </select>
                        </div>
                    </div>
                    <div className="row gy-4 py-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <div className="box-item">
                                    <img src={shop_1} alt="" className='w-100' />
                                    <div className="overviwe">
                                        <ul className=''>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-heart"></i>
                                                </Link>
                                            </li>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-eye"></i>
                                                </Link>
                                            </li>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-cart-shopping"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="title-images py-4 px-4">
                                    <h3>Oupidatat non</h3>
                                    <h5 className='mb-3'>M/L/X/XL</h5>
                                    <ul>
                                        <li className='d-felx justify-content-center'>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star mx-1"></i>
                                            <i className="fas fa-star mx-1"></i>
                                        </li>
                                        <li>
                                            <span className='d-flex mt-3 justify-content-center text-center'>$250</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <div className="box-item">
                                    <img src={shop_2} alt="" className='w-100' />
                                    <div className="overviwe">
                                        <ul className=''>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-heart"></i>
                                                </Link>
                                            </li>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-eye"></i>
                                                </Link>
                                            </li>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-cart-shopping"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="title-images py-4 px-4">
                                    <h3>Oupidatat non</h3>
                                    <h5 className='mb-3'>M/L/X/XL</h5>
                                    <ul>
                                        <li className='d-felx justify-content-center'>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star mx-1"></i>
                                            <i className="fas fa-star mx-1"></i>
                                        </li>
                                        <li>
                                            <span className='d-flex mt-3 justify-content-center text-center'>$250</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <div className="box-item">
                                    <img src={shop_3} alt="" className='w-100' />
                                    <div className="overviwe">
                                        <ul className=''>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-heart"></i>
                                                </Link>
                                            </li>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-eye"></i>
                                                </Link>
                                            </li>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-cart-shopping"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="title-images py-4 px-4">
                                    <h3>Oupidatat non</h3>
                                    <h5 className='mb-3'>M/L/X/XL</h5>
                                    <ul>
                                        <li className='d-felx justify-content-center'>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star mx-1"></i>
                                            <i className="fas fa-star mx-1"></i>
                                        </li>
                                        <li>
                                            <span className='d-flex mt-3 justify-content-center text-center'>$250</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <div className="box-item">
                                    <img src={shop_4} alt="" className='w-100' />
                                    <div className="overviwe">
                                        <ul className=''>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-heart"></i>
                                                </Link>
                                            </li>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-eye"></i>
                                                </Link>
                                            </li>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-cart-shopping"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="title-images py-4 px-4">
                                    <h3>Oupidatat non</h3>
                                    <h5 className='mb-3'>M/L/X/XL</h5>
                                    <ul>
                                        <li className='d-felx justify-content-center'>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star mx-1"></i>
                                            <i className="fas fa-star mx-1"></i>
                                        </li>
                                        <li>
                                            <span className='d-flex mt-3 justify-content-center text-center'>$250</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <div className="box-item">
                                    <img src={shop_5} alt="" className='w-100' />
                                    <div className="overviwe">
                                        <ul className=''>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-heart"></i>
                                                </Link>
                                            </li>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-eye"></i>
                                                </Link>
                                            </li>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-cart-shopping"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="title-images py-4 px-4">
                                    <h3>Oupidatat non</h3>
                                    <h5 className='mb-3'>M/L/X/XL</h5>
                                    <ul>
                                        <li className='d-felx justify-content-center'>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star mx-1"></i>
                                            <i className="fas fa-star mx-1"></i>
                                        </li>
                                        <li>
                                            <span className='d-flex mt-3 justify-content-center text-center'>$250</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <div className="box-item">
                                    <img src={shop_6} alt="" className='w-100' />
                                    <div className="overviwe">
                                        <ul className=''>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-heart"></i>
                                                </Link>
                                            </li>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-eye"></i>
                                                </Link>
                                            </li>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-cart-shopping"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="title-images py-4 px-4">
                                    <h3>Oupidatat non</h3>
                                    <h5 className='mb-3'>M/L/X/XL</h5>
                                    <ul>
                                        <li className='d-felx justify-content-center'>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star mx-1"></i>
                                            <i className="fas fa-star mx-1"></i>
                                        </li>
                                        <li>
                                            <span className='d-flex mt-3 justify-content-center text-center'>$250</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <div className="box-item">
                                    <img src={shop_7} alt="" className='w-100' />
                                    <div className="overviwe">
                                        <ul className=''>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-heart"></i>
                                                </Link>
                                            </li>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-eye"></i>
                                                </Link>
                                            </li>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-cart-shopping"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="title-images py-4 px-4">
                                    <h3>Oupidatat non</h3>
                                    <h5 className='mb-3'>M/L/X/XL</h5>
                                    <ul>
                                        <li className='d-felx justify-content-center'>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star mx-1"></i>
                                            <i className="fas fa-star mx-1"></i>
                                        </li>
                                        <li>
                                            <span className='d-flex mt-3 justify-content-center text-center'>$250</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <div className="box-item">
                                    <img src={shop_8} alt="" className='w-100' />
                                    <div className="overviwe">
                                        <ul className=''>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-heart"></i>
                                                </Link>
                                            </li>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-eye"></i>
                                                </Link>
                                            </li>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-cart-shopping"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="title-images py-4 px-4">
                                    <h3>Oupidatat non</h3>
                                    <h5 className='mb-3'>M/L/X/XL</h5>
                                    <ul>
                                        <li className='d-felx justify-content-center'>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star mx-1"></i>
                                            <i className="fas fa-star mx-1"></i>
                                        </li>
                                        <li>
                                            <span className='d-flex mt-3 justify-content-center text-center'>$250</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <div className="box-item">
                                    <img src={shop_9} alt="" className='w-100' />
                                    <div className="overviwe">
                                        <ul className=''>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-heart"></i>
                                                </Link>
                                            </li>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-eye"></i>
                                                </Link>
                                            </li>
                                            <li className='py-3'>
                                                <Link to="/shop">
                                                    <i class="fas fa-cart-shopping"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="title-images py-4 px-4">
                                    <h3>Oupidatat non</h3>
                                    <h5 className='mb-3'>M/L/X/XL</h5>
                                    <ul>
                                        <li className='d-felx justify-content-center'>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star gold mx-1"></i>
                                            <i className="fas fa-star mx-1"></i>
                                            <i className="fas fa-star mx-1"></i>
                                        </li>
                                        <li>
                                            <span className='d-flex mt-3 justify-content-center text-center'>$250</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className='d-flex justify-content-end btns'>
                                <button className='btn border-0 active rounded-0 py-3 px-4'>1</button>
                                <button className='btn border-0 rounded-0 py-3 px-4'>2</button>
                                <button className='btn border-0 rounded-0 py-3 px-4'>3</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="brand bg-light py-5">
        <div className="container">
            <div className="box-title text-center mb-5">
                <h1>Our Brands</h1>
                <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                Lorem ipsum dolor sit amet.
                </p>
            </div>
            <OwlCarousel className="owl-theme w-50 mx-auto" 
            items="1" autoplay nav dots loop smartSpeed={1000} fluidSpeed={1000}>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="d-flex box-images">
                            <Link to="/shop">
                                <img src={brand_1} className='w-50' alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="d-flex box-images">
                            <Link to="/shop">
                                <img src={brand_2} className='w-50' alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="d-flex box-images">
                            <Link to="/shop">
                                <img src={brand_3} className='w-50' alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="d-flex box-images">
                            <Link to="/shop">
                                <img src={brand_4} className='w-50' alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="d-flex box-images">
                            <Link to="/shop">
                                <img src={brand_1} className='w-50' alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="d-flex box-images">
                            <Link to="/shop">
                                <img src={brand_2} className='w-50' alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="d-flex box-images">
                            <Link to="/shop">
                                <img src={brand_3} className='w-50' alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="d-flex box-images">
                            <Link to="/shop">
                                <img src={brand_4} className='w-50' alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    </section>
    </>
  )
}
