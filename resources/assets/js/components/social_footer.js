import React, { Component } from 'react';

const SocialFooter = () => {
    return (
        <footer id="socialMediaFooter" className="footer bg-black">
            <div className="container text-center mt-3">
                <a href="https://twitter.com">
                    <i className="fab fa-twitter-square fa-3x" />
                </a>

                <a href="https://instagram.com" className="p-2">
                    <i className="fab fa-instagram fa-3x" />
                </a>

                <a href="https://facebook.com">
                    <i className="fab fa-facebook-square fa-3x" />
                </a>
            </div>
        </footer>
    );
};

export default SocialFooter;
