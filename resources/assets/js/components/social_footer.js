import React, { Component } from "react";

const SocialFooter = () => {
    return (
        <footer id="socialMediaFooter" className="footer bg-black py-2">
            <div className="container">
                <div className="row justify-content-center">
                    <span className="p-2">
                        <a href="https://twitter.com">
                            <i className="fab fa-twitter-square fa-3x" />
                        </a>
                    </span>
                    <span className="p-2">
                        <a href="https://instagram.com">
                            <i className="fab fa-instagram fa-3x" />
                        </a>
                    </span>
                    <span className="p-2">
                        <a href="https://facebook.com">
                            <i className="fab fa-facebook-square fa-3x" />
                        </a>
                    </span>
                </div>
                <div className="row justify-content-center text-white">
                    Copyright &copy; 2018 MusicMuse
                </div>
            </div>
        </footer>
    );
};

export default SocialFooter;
