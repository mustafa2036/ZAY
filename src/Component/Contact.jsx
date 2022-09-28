import React from "react";
import "../App.css";

export default function Contact() {
  return (
    <>
      <section className="contact bg-light pt-5 pb-3" id="contact">
        <div className="container">
          <div className="box-title text-center mb-5">
            <h1>Contact Us</h1>
            <p className="mt-3">
              Proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </section>
      <section className="form py-5">
        <div className="container">
          <div className="w-75 mx-auto">
            <div className="row">
                <div className="col-lg-6">
                    <label htmlFor="Name" className="fw-bold mb-2">Name</label>
                    <input id="Name" type="text" placeholder="Name" 
                    className="form-control py-3 w-100 px-2 mb-3" />
                </div>
                <div className="col-lg-6">
                    <label htmlFor="Email" className="fw-bold mb-2">Email</label>
                    <input id="Email" type="email" placeholder="Eamil" 
                    className="form-control py-3 w-100 px-2 mb-3" />
                </div>
                <div className="col-lg-12">
                    <div>
                        <label htmlFor="subject" className="fw-bold mb-2">Subject</label>
                        <textarea id="subject" 
                        className="form-control py-3 px-2 mb-3">Subject</textarea>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div>
                        <label htmlFor="message" className="fw-bold mb-2">Message</label>
                        <textarea id="message"
                        className="form-control py-3 px-2 mb-3">Message</textarea>
                    </div>
                </div> 
                <div className="d-flex justify-content-end">
                    <button className="btn btn-success py-3 px-4">Let's Talk</button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
