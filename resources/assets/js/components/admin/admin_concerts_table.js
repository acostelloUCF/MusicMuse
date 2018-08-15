import _ from 'lodash';
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ReactTable from 'react-table';
import { fetchConcerts } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ConcertsTable extends Component {
    constructor(props) {
        super(props);

        this.props.fetchConcerts();
    }

    render() {
        const { concerts } = this.props;

        return (
            <div>
                <Link className="btn btn-primary text-white mb-2" to="/admin/concerts/create">
                    <span>
                        <i className="fas fa-plus-circle mr-2" />
                        Add Concert
                    </span>
                </Link>
                <ReactTable
                    data={_.toArray(concerts)}
                    columns={[
                        {
                            Header: 'Posts',
                            columns: [
                                {
                                    Header: 'ID',
                                    accessor: 'id',
                                    Cell: accessor => (
                                        <div className="text-center">
                                            <strong>{accessor.value}</strong>
                                        </div>
                                    ),
                                    maxWidth: 75,
                                },
                                {
                                    Header: 'Title',
                                    accessor: 'title',
                                },
                                {
                                    Header: 'Venue',
                                    accessor: 'venue.name',
                                    Cell: accessor => <div className="text-center">{accessor.value}</div>,
                                },
                                {
                                    Header: 'Date',
                                    accessor: 'start_time',
                                    Cell: accessor => <div className="text-center">{accessor.value}</div>,
                                },
                                {
                                    Header: '',
                                    id: 'editButton',
                                    Cell: accessor => (
                                        <div>
                                            <NavLink
                                                className="btn btn-lg btn-primary text-white"
                                                to={`/admin/concerts/${accessor.row.id}/edit`}
                                            >
                                                <strong>Edit</strong>
                                            </NavLink>
                                        </div>
                                    ),
                                    maxWidth: 75,
                                },
                            ],
                        },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchConcerts }, dispatch);
}

function mapStateToProps({ concerts }) {
    return { concerts };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConcertsTable);
