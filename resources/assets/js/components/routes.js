import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './navbar';
import News from '../containers/news';
import Bands from '../containers/bands';
import About from './about';
import Contact from './contact';
import Concerts from '../containers/concerts';
import NoMatch from './no_match';
import Home from '../containers/home';
import BandShow from './band_show';
import Tags from '../containers/tags';
import TagShow from './tag_show';
import PostShow from './post_show';
import ConcertShow from './concert_show';
import AdminLogin from './admin/admin_login';
import AdminHome from './admin/admin_home';
import AdminPostsCreate from './admin/admin_posts_create';
import PasswordReset from './admin/password_reset';

class Routes extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={Navbar} />
                    <Switch>
                        {/* POSTS ROUTES */}
                        <Route path="/posts/:id" component={PostShow} />
                        <Route path="/news" component={News} />

                        {/* BANDS ROUTES */}
                        <Route path="/bands/:id" component={BandShow} />
                        <Route exact path="/bands" component={Bands} />

                        {/* CONCERTS ROUTES */}
                        <Route path="/concerts/:id" component={ConcertShow} />
                        <Route path="/concerts" component={Concerts} />

                        {/* STATIC PAGE ROUTES */}
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />

                        {/* TAGS ROUTES */}
                        <Route path="/tags/:id" component={TagShow} />
                        <Route exact path="/tags" component={Tags} />

                        {/* ADMIN ROUTES */}
                        <Route path="/admin/posts/create" component={AdminPostsCreate} />
                        <Route exact path="/admin/dashboard" component={AdminHome} />
                        <Route exact path="/admin" component={AdminLogin} />
                        <Route path="/password_reset/:token" component={PasswordReset} />


                        {/* ROOT & 404/NOMATCH */}
                        <Route exact path="/" component={Home} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Routes;
