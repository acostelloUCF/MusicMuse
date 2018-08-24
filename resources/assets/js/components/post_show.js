import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPost} from '../actions';
import { renderLoadingSpinner } from "./loading_spinner";
import { renderTag } from "./tag_render";
import SocialFooter from './social_footer';
import {Link} from 'react-router-dom';



class PostShow extends Component {
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }
    
    render() { 
        const {post} = this.props;

        if(!post){
            return renderLoadingSpinner();
        }

        return ( 
            <section id="postShow">
                <div className="container  mt-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header bg-white text-capitalize h2">
                                    <h2>{post.title}</h2>
                                </div>
                                <div className="card-body">
                                    {post.post}
                                </div>
                                <div className="card-footer text-primary bg-white text-right">
                                    {_.map(post.tags,renderTag)}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center my-3">
                            <Link to="/news" className="btn btn-primary btn-lg text-white">See All News</Link>
                        </div>
                    </div>
                </div>
                <SocialFooter/>
            </section>
         );
    }
}
 
function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}
  
export default connect(mapStateToProps, { fetchPost })(PostShow);
  