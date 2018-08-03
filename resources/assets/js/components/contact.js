import React, { Component } from "react";
import SocialFooter from "./social_footer";

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="contact" className="mt-1">
                <div className="container">
                    <div className="row pt-5 justify-content-center">
                        <div className="col-md-4 mb-3">
                            <div className="card bg-primary h-100">
                                <div className="card-body text-white">
                                    <h3>Reach out</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et officiis laudantium omnis veritatis eius nisi suscipit eum, dolor repudiandae ut ea. Vero, perspiciatis excepturi?
                                    </p>
                                    <h3>Address</h3>
                                    <p>
                                        1234 West Main St, Somewhere FL
                                    </p>
                                    <h3>Email</h3>
                                    <p>
                                        Email@email.com
                                    </p>
                                    <h3>Phone</h3>
                                    <p>
                                        (555)-555-5555
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 mb-3">
                            <div className="card h-100">
                                <div className="card-header bg-white text-capitalize">
                                    <h3>Contact Us</h3>
                                </div>
                                <div className="card-body">
                                    <p className="lead">
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Provident vero dolorum
                                        dolorem impedit possimus unde.
                                    </p>
                                    <form action="">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-user contact-icon" />
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-envelope contact-icon" />
                                                </span>
                                            </div>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-pencil-alt contact-icon" />
                                                </span>
                                            </div>
                                            <textarea
                                                className="form-control"
                                                placeholder="Message"
                                                rows="5"
                                            />
                                        </div>
                                        <input
                                            type="submit"
                                            className="btn btn-primary btn-block btn-lg"
                                            value="Submit"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SocialFooter/>
            </section>
        );
    }
}

export default Contact;
