import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchTags } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TagList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);

        this.props.fetchTags();
    }

    renderTags(tag) {
        return (
            <div className="col-md-auto m-1 text-primary bg-white rounded" key={tag.id}>
                <Link to={`/tags/${tag.id}`}>#{tag.name}</Link>
            </div>
        );
    }

    handleInputChange(event) {
        const term = event.target.value;
        this.setState({ term });
        this.props.fetchTags(term);
    }

    renderSearchBar() {
        return (
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i id="bandFilterIcon" className="fas fa-search" />
                    </span>
                </div>
                <input
                    type="text"
                    value={this.state.term}
                    onChange={this.handleInputChange}
                    className="form-control form-control-lg"
                    placeholder="Search..."
                />
            </div>
        );
    }

    render() {
        const { tags } = this.props;

        return (
            <div className="container mt-4">
                {this.renderSearchBar()}
                <div className="row">{_.map(tags, this.renderTags)}</div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTags }, dispatch);
}

function mapStateToProps({ tags }) {
    return { tags };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagList);
