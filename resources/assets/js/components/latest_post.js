import React, { Component } from "react";
import { renderTag } from "../components/tag_render";
import { renderLoadingSpinner } from "../components/loading_spinner";

class LatestPost extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { latestPost } = this.props;

        return (
            <section id="latestPost">
                <div className="container mt-4 mb-3">
                    <div className="row my-2">
                        <div className="card">
                            <div className="card-header bg-white text-capitalize h2">
                                {latestPost.title}
                            </div>
                            <div className="card-body">
                                <p>{latestPost.post}</p>
                            </div>
                            <div className="card-footer text-primary bg-white text-right">
                                {_.map(latestPost.tags, renderTag)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LatestPost;
