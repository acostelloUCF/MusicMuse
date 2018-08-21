import React, { Component } from 'react';
import SocialFooter from './social_footer';

class NoMatch extends Component {
    render() {
        return (
            <div className="flex-container">
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div>
                            <div className="text-white display-1 text-center">404</div>
                            <h1 className="align-self-end text-white">Sorry, the page could not be found.</h1>
                        </div>
                    </div>
                </div>
                <SocialFooter />
            </div>
        );
    }
}

export default NoMatch;
