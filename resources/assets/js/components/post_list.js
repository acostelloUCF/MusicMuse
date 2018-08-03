import _ from 'lodash';
import React, { Component } from 'react';
import {renderTag} from './tag_render';
import {Link} from 'react-router-dom';

class PostList extends Component {
    constructor(props){
        super(props);
        
        this.renderPost = this.renderPost.bind(this);
    }

    renderPost(post){
        return (
            <div className="card mb-3" key={post.id}>
                <div className="card-header bg-white text-capitalize h2 text-secondary"><Link to={`/posts/${post.id}`}>{post.title}</Link></div>
                <div className="card-body">
                    <p>
                        {post.post}
                    </p>
                </div>
                <div className="card-footer text-primary bg-white text-right">
                    {_.map(post.tags,renderTag)}
                </div>
            </div>
        );
    }
    
    render() { 
        const {posts} = this.props;

        //TODO: Build out sorting
        const orderedPostList = _.orderBy(posts,['id'],['desc']);

        return (
            <section id="postList">
                <div className="container">
                    <div className="row text-white mt-5">
                        {_.map(orderedPostList,this.renderPost)}
                    </div>
                </div>
            </section>
         );
    }
}

export default PostList;
