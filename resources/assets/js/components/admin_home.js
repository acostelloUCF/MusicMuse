import React, { Component } from 'react';
import PostsTable from './admin_posts_table';
import { fetchPostList, fetchBandList, fetchConcerts } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SocialFooter from './social_footer';

class AdminHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 'posts',
        };
        this.props.fetchPostList();
    }

    render() {
        return (
            <section id="adminHome">
                <div className="container h-100 ">
                    <div className="row h-100 justify-content-center align-items-center my-4">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <ul className="nav nav-tabs card-header-tabs rounded" role="tablist">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link active show"
                                                href="#posts"
                                                role="tab"
                                                data-toggle="tab"
                                                onClick={this.props.fetchPostList}
                                            >
                                                <strong>News Posts</strong>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#concerts" role="tab" data-toggle="tab">
                                                <strong>Concerts</strong>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#bands" role="tab" data-toggle="tab">
                                                <strong>Bands</strong>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <div className="tab-content">
                                        <div className="tab-pane fade active show" role="tabpanel" id="posts">
                                            {this.state.activeTab == 'posts' ? (
                                                <PostsTable posts={this.props.posts} />
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                        <div className="tab-pane fade" role="tabpanel" id="concerts">
                                            CONCERTS
                                        </div>
                                        <div className="tab-pane fade" role="tabpanel" id="bands">
                                            BAND
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SocialFooter />
            </section>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPostList }, dispatch);
}

function mapStateToProps({ posts }) {
    return { posts };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminHome);
