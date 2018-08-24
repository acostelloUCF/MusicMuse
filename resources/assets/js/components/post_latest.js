import React, { Component } from 'react';
import { renderTag } from './tag_render';
import Truncate from 'react-truncate-html';
import { Link } from 'react-router-dom';

class LatestPost extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { latestPost } = this.props;

        return (
            <section id="latestPost">
                <div className="card">
                    <div className="card-header bg-white text-capitalize h3">{latestPost.title}</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                <Truncate
                                    lines={3}
                                    dangerouslySetInnerHTML={{
                                        __html: latestPost.post,
                                    }}
                                />
                            </div>
                            <div className="col-12 text-center">
                                <Link to={`/posts/${latestPost.id}`} className="btn btn-primary btn-lg text-white mt-4">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-primary bg-white text-right d-none d-block-sm">
                        {_.map(latestPost.tags, renderTag)}
                    </div>
                </div>
            </section>
        );
    }
}

export default LatestPost;
