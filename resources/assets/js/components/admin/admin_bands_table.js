import _ from 'lodash';
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ReactTable from 'react-table';
import { fetchBandList } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class BandsTable extends Component {
    constructor(props) {
        super(props);

        this.props.fetchBandList();
    }

    render() {
        const { bands } = this.props;

        return (
            <div>
                <Link className="btn btn-primary text-white mb-2" to="/admin/bands/create">
                    <span>
                        <i className="fas fa-plus-circle mr-2" />
                        Add Band
                    </span>
                </Link>
                <ReactTable
                    data={_.toArray(bands)}
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
                                    Header: 'Name',
                                    accessor: 'name',
                                },
                                {
                                    Header: 'State',
                                    accessor: 'state',
                                    maxWidth: 75,
                                },
                                {
                                    Header: '',
                                    id: 'editButton',
                                    Cell: accessor => (
                                        <div>
                                            <NavLink
                                                className="btn btn-lg btn-primary text-white"
                                                to={`/admin/bands/${accessor.row.id}/edit`}
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
    return bindActionCreators({ fetchBandList }, dispatch);
}

function mapStateToProps({ bands }) {
    return { bands };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BandsTable);
