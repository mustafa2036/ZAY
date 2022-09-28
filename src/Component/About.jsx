import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';


import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import about_img from './images/about-hero.svg'
import brand_1 from './images/brand_01.png'
import brand_2 from './images/brand_02.png'
import brand_3 from './images/brand_03.png'
import brand_4 from './images/brand_04.png'

export default function About() {
  return (
    <>
      <section className="about py-5" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="text-white title">
                <h2 className="fw-bolder">About Us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div>
                <img src={about_img} alt="" className="w-100"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services py-5">
        <div className="container">
            <div className="box-title text-center mb-5">
                <h1>Our Services</h1>
                <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div className="row gy-4 mt-5">
                <div className="col-lg-3 col-md-6">
                    <div className="box py-5">
                        <div className="text-center">
                            <i class="fas fa-truck"></i>
                            <h2 className="mt-4 fw-bold">Delivery Services</h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="box py-5">
                        <div className="text-center">
                            <i class="fas fa-arrow-right-arrow-left"></i>
                            <h2 className="mt-4 fw-bold">Shipping & Return</h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="box py-5">
                        <div className="text-center">
                            <i class="fas fa-percent"></i>
                            <h2 className="mt-4 fw-bold">Promotion</h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="box py-5">
                        <div className="text-center">
                            <i class="fas fa-user"></i>
                            <h2 className="mt-4 fw-bold">24 Hours Service</h2>
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
            items="1" autoplay nav loop smartSpeed={1000} fluidSpeed={1000}>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="d-flex box-images">
                            <Link to="/about">
                                <img src={brand_1} className='w-50' alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="d-flex box-images">
                            <Link to="/about">
                                <img src={brand_2} className='w-50' alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="d-flex box-images">
                            <Link to="/about">
                                <img src={brand_3} className='w-50' alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="d-flex box-images">
                            <Link to="/about">
                                <img src={brand_4} className='w-50' alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="d-flex box-images">
                            <Link to="/about">
                                <img src={brand_1} className='w-50' alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="d-flex box-images">
                            <Link to="/about">
                                <img src={brand_2} className='w-50' alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="d-flex box-images">
                            <Link to="/about">
                                <img src={brand_3} className='w-50' alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="d-flex box-images">
                            <Link to="/about">
                                <img src={brand_4} className='w-50' alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
      </section>
    </>
  );
}
