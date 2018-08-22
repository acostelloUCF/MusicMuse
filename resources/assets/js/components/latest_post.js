import React, { Component } from 'react';
import { renderTag } from './tag_render';

class LatestPost extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { latestPost } = this.props;

        return (
            <section id="latestPost">
                <div className="card">
                    <div className="card-header bg-white text-capitalize h2">{latestPost.title}</div>
                    <div className="card-body">
                        <p>{latestPost.post}</p>
                    </div>
                    <div className="card-footer text-primary bg-white text-right">
                        {_.map(latestPost.tags, renderTag)}
                    </div>
                </div>
            </section>
        );
    }
}

export default LatestPost;
