import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

class Accordian extends Component {
    constructor(props) {
        super(props);
    }

    renderBand(band) {
        return (
            <li key={band.id} className="list-group-item">
                <Link to={`/bands/${band.id}`}>{band.name}</Link>
            </li>
        );
    }

    renderPost(post) {
        return (
            <li key={post.id} className="list-group-item">
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
        );
    }

    renderBandList(bands) {
        return (
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h5>
                        <a
                            href="#bandCollapse"
                            data-parent="#accordian"
                            data-toggle="collapse"
                        >
                            <i className="fa mr-2" aria-hidden="true" />
                            Bands
                        </a>
                    </h5>
                </div>
                <div id="bandCollapse" className="collapse show">
                    <div className="card-body">
                        <ul className="list-group">
                            {_.map(bands, this.renderBand)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    renderPostList(posts) {
        return (
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h5>
                        <a
                            href="#postCollapse"
                            data-parent="#accordian"
                            data-toggle="collapse"
                            className="collapsed"
                        >
                            <i className="fa mr-2" aria-hidden="true" />
                            Posts
                        </a>
                    </h5>
                </div>
                <div id="postCollapse" className="collapse">
                    <div className="card-body">
                        <ul className="list-group">
                            {_.map(posts, this.renderPost)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        //TODO: finish accounting for case when there is no bands or when there is no posts attached
        const { tag } = this.props;

        return (
            <div id="accordian" className="text-center">
                <div className="container">
                    {tag.bands.length > 0 ? this.renderBandList(tag.bands) : ""}
                    {tag.blog_posts.length > 0 ? this.renderPostList(tag.blog_posts) : ""}
                </div>
            </div>
        );
    }
}

export default Accordian;
