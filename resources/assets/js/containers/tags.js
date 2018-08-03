import React, { Component } from 'react';
import TagList from '../components/tag_list';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTags} from '../actions/index';
import {renderLoadingSpinner} from '../components/loading_spinner';
import _ from 'lodash';
import SocialFooter from '../components/social_footer';


class Tags extends Component {
    constructor(props){
        super(props);

        this.props.fetchTags();
    }

    render() { 
        const {tags} = this.props;

        if(_.isEmpty(tags)){
            return renderLoadingSpinner();
        }

        return ( 
            <div>
                <TagList tags={tags}/>
                <SocialFooter/>
            </div>
         );
    }
}
 
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchTags},dispatch);
}

function mapStateToProps({tags}){
    return {tags};
}

export default connect(mapStateToProps,mapDispatchToProps)(Tags);