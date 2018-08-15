import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {createPost,fetchTags} from '../../actions';

let PostForm = props => {
    const { fields:{title,post,tags},handleSubmit,tagList } = props;


    console.log(tagList);

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <Field
                    name="title"
                    component="input"
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Title"
                    {...title}
                />
            </div>
            <div className="form-group">
                <Field component="textarea" name="post" className="form-control form-control-lg" placeholder="Post" {...post} />
            </div>
            <div className="form-group">
                <Field component="input" name="tags" className="form-control form-control-lg" placeholder="Tags" {...tags} />
            </div>
            <div className="form-group">
                <button type="submit" className="form-control form-control-lg btn btn-primary text-white">
                    <strong>Create Post</strong>
                </button>
            </div>
        </form>
    );
};

function mapStateToProps({tags}){
    return {tags};
}

export default reduxForm({
    // a unique name for the form
    form: 'post',
    fields: ['title','post','tags']
},mapStateToProps,{createPost,fetchTags})(PostForm);


