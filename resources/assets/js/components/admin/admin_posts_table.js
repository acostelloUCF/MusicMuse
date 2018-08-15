import _ from 'lodash';
import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
import ReactTable from 'react-table';
import {  fetchPostList } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PostsTable extends Component {
    constructor(props) {
        super(props);

        this.props.fetchPostList();
    }

    render() {
        const {posts} = this.props;

        return (
            <div>
                <Link className="btn btn-primary text-white mb-2" to="/admin/posts/create"><span><i className="fas fa-plus-circle mr-2"></i>Add News Post</span></Link>
                <ReactTable
                    data={_.toArray(posts)}
                    columns={[
                        {
                            Header: 'Posts',
                            columns: [
                                {
                                    Header: 'ID',
                                    accessor:'id',
                                    Cell: accessor => (
                                        <div className="text-center">
                                            <strong>{accessor.value}</strong>
                                        </div>  
                                    ),
                                    maxWidth:75
                                },
                                {
                                    Header: 'Title',
                                    accessor:'title'
                                },
                                {
                                    Header: 'Post',
                                    accessor:'post'
                                   
                                },
                                {
                                    Header: 'Date',
                                    accessor:'created_at',
                                    Cell: accessor => (
                                        <div className="text-center">
                                            {accessor.value}
                                        </div>  
                                    ),
                                },
                                {
                                    Header: '',
                                    id:'editButton',
                                    Cell: accessor => (
                                        <div>
                                            <NavLink className="btn btn-lg btn-primary text-white" to={`/admin/posts/${accessor.row.id}/edit`}><strong>Edit</strong></NavLink>
                                        </div>  
                                    ),
                                    maxWidth:75
                                },
                            ],
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>
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
)(PostsTable);
