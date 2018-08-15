import React, { Component } from 'react';
import TagList from '../components/tag_list';
import SocialFooter from '../components/social_footer';


export default class Tags extends Component {
    constructor(props){
        super(props);
    }

    render() { 
        return ( 
            <div>
                <TagList />
                <SocialFooter/>
            </div>
         );
    }
}
 
