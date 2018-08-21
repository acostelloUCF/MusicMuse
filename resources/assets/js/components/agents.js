import React, { Component } from 'react';

export default class Agents extends Component {
    render() {
        return (
            <div className="container mt-3 text-center" id="authors">
                <div className="display-3 text-white p-3 m-5">Staff</div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <img
                                    src="https://source.unsplash.com/random/80x80"
                                    alt=""
                                    className="img-fluid rounded-circle w-50 mb-3"
                                />
                                <h3>Susan Williams</h3>
                                <h5 className="font-light">Lead Writer</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab
                                    libero voluptas officia.
                                </p>
                                <div className="d-flex justify-content-center">
                                    <div className="p-4">
                                        <a href="http://facebook.com">
                                            <i className="fab fa-facebook" />
                                        </a>
                                    </div>
                                    <div className="p-4">
                                        <a href="http://twitter.com">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </div>
                                    <div className="p-4">
                                        <a href="http://instagram.com">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <img
                                    src="https://source.unsplash.com/random/80x80"
                                    alt=""
                                    className="img-fluid rounded-circle w-50 mb-3"
                                />
                                <h3>Pepper Pots</h3>
                                <h5 className="font-light">Management</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab
                                    libero voluptas officia.
                                </p>
                                <div className="d-flex justify-content-center">
                                    <div className="p-4">
                                        <a href="http://facebook.com">
                                            <i className="fab fa-facebook" />
                                        </a>
                                    </div>
                                    <div className="p-4">
                                        <a href="http://twitter.com">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </div>
                                    <div className="p-4">
                                        <a href="http://instagram.com">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <img
                                    src="https://source.unsplash.com/random/80x80"
                                    alt=""
                                    className="img-fluid rounded-circle w-50 mb-3"
                                />
                                <h3>Tony Stark</h3>
                                <h5 className="font-light">Agent</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi nostrum, ab
                                    libero voluptas officia.
                                </p>
                                <div className="d-flex justify-content-center">
                                    <div className="p-4">
                                        <a href="http://facebook.com">
                                            <i className="fab fa-facebook" />
                                        </a>
                                    </div>
                                    <div className="p-4">
                                        <a href="http://twitter.com">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </div>
                                    <div className="p-4">
                                        <a href="http://instagram.com">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
