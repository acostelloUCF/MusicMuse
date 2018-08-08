import _ from 'lodash';
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import ReactTable from 'react-table';

export default class PostsTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {posts} = this.props;

        return (
            <div>
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
                                    accessor:'id',
                                    Cell: accessor => (
                                        <div>
                                            <NavLink className="btn btn-lg btn-primary text-white" to={`/admin/posts/edit/${accessor.value}`}><strong>Edit</strong></NavLink>
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
