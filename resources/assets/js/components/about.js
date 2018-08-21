import React, { Component } from 'react';
import AboutBoxes from './about_boxes';
import SocialFooter from './social_footer';
import Agents from './agents';

class About extends Component {

    render() { 
        return ( 
            <div>
                <Agents/>
                <AboutBoxes/>
                <SocialFooter/>
            </div>
         );
    }
}
 
export default About;