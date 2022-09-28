import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "../App.css";

import img1 from "./images/banner_img_01.jpg";
import img2 from "./images/banner_img_02.jpg";
import img3 from "./images/banner_img_03.jpg";
import img4 from './images/category_img_01.jpg'
import img5 from './images/category_img_02.jpg'
import img6 from './images/category_img_03.jpg'
import img7 from './images/feature_prod_01.jpg'
import img8 from './images/feature_prod_02.jpg'
import img9 from './images/feature_prod_03.jpg'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <OwlCarousel
        className="owl-theme home" items="1" autoplay nav dots loop smartSpeed={4000} fluidSpeed={10000}>
        <div className="item vh-100 d-flex justify-content-center px-3 py-5">
          <div className="row">
            <div className="col-lg-5 d-flex align-items-center offset-1">
              <div className="title">
                <h1>
                  {" "}
                  <b>Zay </b> eCommerce
                </h1>
                <h3>Tiny and Perfect eCommerce Template</h3>
                <p className="text-muted">
                  Zay Shop is an eCommerce React template with latest version of
                  Bootstrap 5 (beta 1). This template is 100% free provided by{" "}
                  <Link to="home" target="_blank">
                    TemplateMo{" "}
                  </Link>
                  website. Image credits go to{" "}
                  <Link to="home" target="_blank">
                    Freepik Stories, Unsplash{" "}
                  </Link>
                  and{" "}
                  <Link to="home" target="_blank">
                    Icons 8.
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-lg-5 offset-1">
              <img src={img1} className="w-75" alt="" />
            </div>
          </div>
        </div>
        <div className="item vh-100 d-flex justify-content-center px-3 py-5">
          <div className="row">
            <div className="col-lg-5 d-flex align-items-center offset-1">
              <div className="title">
                <h1>Proident occaecat</h1>
                <h3>Aliquip ex ea commodo consequat</h3>
                <p>
                  You are permitted to use this Zay CSS template for your
                  commercial websites. You are not permitted to re-distribute
                  the template ZIP file in any kind of template collection
                  websites.
                </p>
              </div>
            </div>
            <div className="col-lg-5 offset-1">
              <img src={img2} className="w-75" alt="" />
            </div>
          </div>
        </div>
        <div className="item vh-100 d-flex justify-content-center px-3 py-5">
          <div className="row">
            <div className="col-lg-5 d-flex align-items-center offset-1">
              <div className="title">
                <h1>Repr in voluptate</h1>
                <h3>Ullamco laboris nisi ut</h3>
                <p>
                  We bring you 100% free CSS templates for your websites. If you
                  wish to support TemplateMo, please make a small contribution
                  via PayPal or tell your friends about our website. Thank you.
                </p>
              </div>
            </div>
            <div className="col-lg-5 offset-1">
              <img src={img3} className="w-75" alt="" />
            </div>
          </div>
        </div>
      </OwlCarousel>
      <section className="bg-white py-5 category">
        <div className="container">
            <div className="box-title text-center mb-5">
                <h1>Categories of The Month</h1>
                <p className="mt-3">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="row gy-3">
                <div className="col-lg-4 col-md-6">
                    <div className="category-box text-center">
                        <Link to="/home">
                          <img src={img4} className='w-75 rounded-circle' alt="" />
                        </Link>
                        <h5 className="mt-4 mb-2">Watches</h5>
                        <p>
                          <Link to="/home" className="btn btn-success py-3 px-4 fw-bolder">Go Shop</Link>
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="category-box text-center">
                        <Link to="/home">
                          <img src={img5} className='w-75 rounded-circle' alt="" />
                        </Link>
                        <h5 className="mt-4 mb-2">Shoes</h5>
                        <p>
                            <Link to="/home" className="btn btn-success py-3 px-4 fw-bolder">Go Shop</Link>
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="category-box text-center">
                        <Link to="/home">
                          <img src={img6} className='w-75 rounded-circle' alt="" />
                        </Link>
                        <h5 className="mt-4 mb-2">Accessories</h5>
                        <p>
                          <Link to="/home" className="btn btn-success py-3 px-4 fw-bolder">Go Shop</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="bg-light py-5 feature">
        <div className="container">
            <div className="box-title text-center mb-5">
                <h1>Featured Product</h1>
                <p className="mt-3">
                Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident.
                </p>
            </div>
            <div className="row gy-4">
                <div className="col-lg-4 col-md-6">
                    <div className="feature-box">
                        <Link to="/home">
                            <img src={img7} className='w-100' alt="" />
                        </Link>
                        <div className="feature-title bg-white py-4 px-3">
                            <ul className="p-0 d-flex justify-content-between">
                                <li>
                                    <i class="fa-solid fa-star gold ms-1"></i>
                                    <i class="fa-solid fa-star gold ms-1"></i>
                                    <i class="fa-solid fa-star gold ms-1"></i>
                                    <i class="fa-solid fa-star text-muted ms-1"></i>
                                    <i class="fa-solid fa-star text-muted ms-1"></i>
                                </li>
                                <li className="fw-bold text-muted">$240.00</li>
                            </ul>
                            <h3 className="fw-bold">Gym Weight</h3>
                            <p className="fw-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Exercitationem nam facilis consectetur ipsum totam
                            </p>
                            <p className="fw-bold text-muted">Reviews (24)</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="feature-box">
                        <Link to="/home">
                            <img src={img8} className='w-100' alt="" />
                        </Link>
                        <div className="feature-title bg-white py-4 px-3">
                            <ul className="p-0 d-flex justify-content-between">
                                <li>
                                    <i class="fa-solid fa-star gold ms-1"></i>
                                    <i class="fa-solid fa-star gold ms-1"></i>
                                    <i class="fa-solid fa-star gold ms-1"></i>
                                    <i class="fa-solid fa-star text-muted ms-1"></i>
                                    <i class="fa-solid fa-star text-muted ms-1"></i>
                                </li>
                                <li className="fw-bold text-muted">$480.00</li>
                            </ul>
                            <h3 className="fw-bold">Cloud Nike Shoes</h3>
                            <p className="fw-bold">Aenean gravida dignissim finibus. Nullam ipsum diam, 
                            posuere vitae pharetra sed, commodo ullamcorper.
                            </p>
                            <p className="fw-bold text-muted">Reviews (48)</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="feature-box">
                        <Link to="/home">
                            <img src={img9} className='w-100' alt="" />
                        </Link>
                        <div className="feature-title bg-white py-4 px-3">
                            <ul className="p-0 d-flex justify-content-between">
                                <li>
                                    <i class="fa-solid fa-star gold ms-1"></i>
                                    <i class="fa-solid fa-star gold ms-1"></i>
                                    <i class="fa-solid fa-star gold ms-1"></i>
                                    <i class="fa-solid fa-star text-muted ms-1"></i>
                                    <i class="fa-solid fa-star text-muted ms-1"></i>
                                </li>
                                <li className="fw-bold text-muted">$360.00</li>
                            </ul>
                            <h3 className="fw-bold">Summer Addides Shoes</h3>
                            <p className="fw-bold">Curabitur ac mi sit amet diam luctus porta. 
                            Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
                            </p>
                            <p className="fw-bold text-muted">Reviews (74)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
