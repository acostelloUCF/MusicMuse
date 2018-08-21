import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Showcase from '../components/showcase';
import LatestPost from '../components/latest_post';
import SocialFooter from '../components/social_footer';
import {fetchLatestPost} from '../actions';
import { renderLoadingSpinner } from "../components/loading_spinner";
import _ from 'lodash';
import HomeCarousel from '../components/home_carousel';


class Home extends Component {
    constructor(props) {
        super(props);

        this.props.fetchLatestPost();
    }


    render() { 
        const {latestPost} = this.props;

        if(_.isEmpty(latestPost)){
            return renderLoadingSpinner();
        }

        return ( 
            <div>
                <LatestPost latestPost={latestPost}/>
                <HomeCarousel/>
                <Showcase/>
                <SocialFooter/>
            </div>
         );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchLatestPost},dispatch);
}

function mapStateToProps({latestPost}){
    return {latestPost};
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);