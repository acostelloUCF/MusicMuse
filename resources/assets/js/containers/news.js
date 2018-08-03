import React, { Component } from 'react';
import PostList from '../components/post_list';
import SocialFooter from '../components/social_footer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPostList} from '../actions';
import {renderLoadingSpinner} from '../components/loading_spinner';
import _ from 'lodash';



class News extends Component {
    constructor(props){
        super(props);

        this.props.fetchPostList();
    }

    render() { 
        const {posts} = this.props;

        if(_.isEmpty(posts)){
            return renderLoadingSpinner();
        }

        return ( 
            <div>
                <PostList posts={posts}/>
                <SocialFooter/>
            </div>
         );
    }
}
 
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchPostList},dispatch);
}

function mapStateToProps({posts}){
    return {posts};
}

export default connect(mapStateToProps,mapDispatchToProps)(News);