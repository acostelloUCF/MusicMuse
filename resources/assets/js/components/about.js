import React, { Component } from 'react';
import AboutBoxes from './about_boxes';
import SocialFooter from './social_footer';

class About extends Component {

    render() { 
        return ( 
            <div>
                <AboutBoxes/>
                <SocialFooter/>
            </div>
         );
    }
}
 
export default About;