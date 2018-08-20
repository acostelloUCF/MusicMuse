import React, { Component } from 'react';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { createPost, fetchTags } from '../../actions';
import { WithContext as ReactTags } from 'react-tag-input';
class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state={
            tags:[],
            suggestions:this.props.tags
            // suggestions:_.map(this.props.tags,(tag)=>{
            //     return tag;
            // })
        }
    }

    componentWillReceiveProps(nextProps) {
        //Update state if props change
        const prevState = this.state;
        if (nextProps.tags !== prevState.suggestions) {
          this.setState({ tags:prevState.tags,suggestions: nextProps.tags });
        }
      }

    render() {
        
        const {
            fields: { title, post, tags },
            handleSubmit,
        } = this.props;

        const tagList = this.props.tags;
        const KeyCodes = {
            comma: 188,
            enter: 13,
        };
        const delimiters = [KeyCodes.comma, KeyCodes.enter];
        console.log(this.state);
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
                    <Field
                        component="textarea"
                        name="post"
                        className="form-control form-control-lg"
                        placeholder="Post"
                        {...post}
                    />
                </div>
                {/* <div className="form-group">
                    <Field
                        component="input"
                        name="tags"
                        className="form-control form-control-lg"
                        placeholder="Tags"
                        {...tags}
                    />
                </div> */}
                <div className="form-group">
                    <button type="submit" className="form-control form-control-lg btn btn-primary text-white">
                        <strong>Create Post</strong>
                    </button>
                </div>
            </form>
        );
    }
}

function mapStateToProps({ tags }) {
    return { tags };
}



export default reduxForm(
    {
        // a unique name for the form
        form: 'post',
        fields: ['title', 'post', 'tags'],
    },
    mapStateToProps,
    { createPost, fetchTags }
)(PostForm);
