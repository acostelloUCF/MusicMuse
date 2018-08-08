import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Navbar from './navbar';
import News from '../containers/news';
import Bands from '../containers/bands';
import About from '../components/about';
import Contact from '../components/contact';
import Concerts from '../containers/concerts';
import NoMatch from '../components/no_match';
import Home from '../containers/home'
import BandShow from '../components/band_show';
import Tags from '../containers/tags';
import TagShow from '../components/tag_show';
import PostShow from '../components/post_show';
import ConcertShow from '../components/concert_show';
import AdminLogin from '../components/admin_login';
import AdminHome from './admin_home';


class Routes extends Component {

    render() { 
        return ( 
            <BrowserRouter>
                <div>
                <Route path="/" component={Navbar}/>
                <Switch>
                    <Route path="/posts/:id" component={PostShow}/>
                    <Route path="/news" component={News}/>
                    <Route path="/bands/:id" component={BandShow}/>
                    <Route exact path="/bands" component={Bands}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/concerts/:id" component={ConcertShow}/>
                    <Route path="/concerts" component={Concerts}/>
                    <Route path="/tags/:id" component={TagShow}/>
                    <Route exact path="/tags" component={Tags}/>
                    <Route exact path="/admin" component={AdminLogin}/>
                    <Route exact path="/admin/dashboard" component={AdminHome}/>
                    <Route exact path="/" component={Home}/>
                    <Route component={NoMatch}/>
                </Switch>
                </div>
            </BrowserRouter>
         );
    }
}
 
export default Routes;