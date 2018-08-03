import React from 'react';
import {Link} from 'react-router-dom';

export function renderTag(tag){
    return (
        <span className="align-bottom ml-1 d-inline-block" key={tag.id}><Link to={`/tags/${tag.id}`}>#{tag.name}</Link></span>
    );
}

