import React, { Component } from 'react';
import {renderLoadingSpinner} from '../components/loading_spinner';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchConcerts} from '../actions';
import ConcertList from '../components/concert_list';
import _ from 'lodash';
import SocialFooter from '../components/social_footer';

class Concerts extends Component {
    constructor(props){
        super(props);

        this.props.fetchConcerts();
    }

    
    render() { 
        const {concerts} = this.props;

        if(_.isEmpty(concerts) || !concerts){
            return renderLoadingSpinner();
        }

        return ( 
            <div>
                <ConcertList concerts={concerts}/>
                <SocialFooter/>
            </div>
         );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchConcerts},dispatch);
}

function mapStateToProps({concerts}){
    return {concerts};
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Concerts);
