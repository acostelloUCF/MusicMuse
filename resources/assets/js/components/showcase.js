import React, { Component } from "react";
import { Link } from "react-router-dom";

class Showcase extends Component {
    render() {
        return (
            <section id="showcase" className="py-5 my-3">
                <div className="primary-overlay text-white">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col text-center">
                                <h1 className="display-2">Hit The Road</h1>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Natus, tempora?
                                </p>
                                <Link
                                    to={"/about"}
                                    className="btn btn-outline-primary btn-lg text-white"
                                >
                                    <i className="fas fa-arrow-right mr-2" />Read
                                    More
                                </Link>
                            </div>
                            <div className="col-lg-8 align-items-center">
                                <img
                                    id="showcaseImage"
                                    src="/img/guitar.jpeg"
                                    alt=""
                                    className="img-fluid d-none d-lg-block mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Showcase;
