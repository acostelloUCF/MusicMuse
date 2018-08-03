import _ from 'lodash';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class TagList extends Component {
    constructor(props){
        super(props);
    }

    renderTags(tag){
        return (
            <li className="list-group-item text-primary" key={tag.id}>
                <Link to={`/tags/${tag.id}`}>#{tag.name}</Link>
            </li>
        );
    }

    render() { 
        const {tags} = this.props;

        return ( 
            <div className="container mt-4">
                    <div className="d-flex">
                        <ul className="list-group mx-auto justify-content-center">
                            {_.map(tags,this.renderTags)}
                        </ul>
                    </div>
            </div>
         );
    }
}
 
export default TagList;