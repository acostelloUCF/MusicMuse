import React, { Component } from 'react';
import PostForm from './post_form';
import SocialFooter from '../social_footer';
import { createPost,fetchTags } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Autosuggest from 'react-autosuggest';

class AdminPostsCreate extends Component {
    constructor(props){
        super(props);

        this.props.fetchTags();
    }

    render() {
        const {tags} = this.props;
        console.log(tags);
        return (
            <div>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-10">
                            <PostForm onSubmit={this.props.createPost} />
                        </div>
                    </div>
                </div>

                <SocialFooter />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createPost,fetchTags }, dispatch);
}

function mapStateToProps({tags}){
    return {tags};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminPostsCreate);

