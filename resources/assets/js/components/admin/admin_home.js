import React, { Component } from 'react';
import PostsTable from './admin_posts_table';
import ConcertsTable from './admin_concerts_table';
import SocialFooter from '../social_footer';
import BandsTable from './admin_bands_table';
export default class AdminHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 'posts',
        };

        this.handlePostsClick = this.handlePostsClick.bind(this);
        this.handleConcertsClick = this.handleConcertsClick.bind(this);
        this.handleBandsClick = this.handleBandsClick.bind(this);
    }

    handlePostsClick() {
        this.setState({
            activeTab: 'posts',
        });
    }

    handleConcertsClick() {
        this.setState({
            activeTab: 'concerts',
        });
    }

    handleBandsClick() {
        this.setState({
            activeTab: 'bands',
        });
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
                                                onClick={this.handlePostsClick}
                                            >
                                                <strong>News Posts</strong>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#concerts"
                                                role="tab"
                                                data-toggle="tab"
                                                onClick={this.handleConcertsClick}
                                            >
                                                <strong>Concerts</strong>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#bands"
                                                role="tab"
                                                data-toggle="tab"
                                                onClick={this.handleBandsClick}
                                            >
                                                <strong>Bands</strong>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <div className="tab-content">
                                        <div className="tab-pane fade active show" role="tabpanel" id="posts">
                                            {this.state.activeTab == 'posts' ? <PostsTable /> : ''}
                                        </div>
                                        <div className="tab-pane fade" role="tabpanel" id="concerts">
                                            {this.state.activeTab == 'concerts' ? <ConcertsTable /> : ''}
                                        </div>
                                        <div className="tab-pane fade" role="tabpanel" id="bands">
                                            {this.state.activeTab == 'bands' ? <BandsTable /> : ''}
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
