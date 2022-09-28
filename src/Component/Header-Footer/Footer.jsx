import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Style.css'

export default function Footer() {
  return (
    <>
    <footer className='py-5'>
        <div className="container">
            <div className="row after-bottom">
                <div className="col-lg-4 col-md-6">
                    <div className="footer-content">
                        <h2 className='fw-bold green mb-4'>Zay Shop</h2>
                        <div className='mt-5'>
                            <ul className='p-0'>
                                <li>
                                    <i class="fa-solid fa-globe me-2 mb-3"></i>
                                    123 Consectetur at ligula 10660
                                </li>
                                <li>
                                    <Link className="nav-icons" aria-current="page" to="home">
                                        <i className='fas fa-phone me-2 mb-3'></i> 010-020-0340
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-icons" aria-current="page" to="home">
                                    <i className="fas fa-envelope me-2 mb-3"></i> info@company.com</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="footer-content">
                        <h2 className='mb-4'>Products</h2>
                        <div className='mt-5'>
                            <ul className='p-0'>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="home">Luxury</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="home">Sport Wear</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="home">Woman's Shoes</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="home">Men's Shoes</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="home">Popular Dress</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="home">Gym Accessories</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="home">Sport Shoes</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="footer-content">
                        <h2 className='mb-4'>Further Info</h2>
                        <div className='mt-5'>
                            <ul className='p-0'>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="home">Home</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="about">About Us</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="shop">Shop Locations</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="home">FAQs</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link className="nav-links" aria-current="page" to="Contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-6">
                    <ul className='p-0'>
                        <li>
                            <a href="#home" className='href'> <i className='fab fa-facebook-f me-3'></i> </a>
                            <a href="#home" className='href'> <i className='fab fa-instagram me-3'></i> </a>
                            <a href="#home" className='href'> <i className='fab fa-twitter me-3'></i> </a>
                            <a href="#home" className='href'> <i className='fab fa-linkedin me-3'></i> </a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul className='p-0'>
                        <li>
                            <input type="text" placeholder='Email address' 
                            className='form-control rounded-0 py-3 px-lg-2' />
                            <div className='btn btn-success py-3 rounded-0 px-lg-5'>
                                <p className='d-flex justify-content-center align-items-center'>Subscribe</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <section className='bg-dark py-4'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className='text-white custom'>
                        <p>Copyright &copy; 2022 Company Name | Designed by
                            <Link to="home"> TemplateMo</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
