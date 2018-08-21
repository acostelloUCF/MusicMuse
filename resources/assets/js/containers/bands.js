import _ from 'lodash';
import React, { Component } from 'react';
import BandList from '../components/band_list';
import BandFilter from '../components/band_filter';
import { fetchBandList } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { renderLoadingSpinner } from '../components/loading_spinner';
import SocialFooter from '../components/social_footer';

class Bands extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
        this.bandSearch = this.bandSearch.bind(this);
    }

    componentDidMount() {
        this.bandSearch(this.state.term);
    }

    bandSearch(term) {
        this.setState({ term });
        this.props.fetchBandList(term);
    }

    render() {
        const { bands } = this.props;

        //The state check prevents loading spinner from showing when a user filters down to 0 bands found
        if (_.isEmpty(bands) && this.state.term == '') {
            return renderLoadingSpinner();
        }

        const bandSearch = _.debounce(term => {
            this.bandSearch(term);
        }, 300);

        return (
            <section id="bandOverview">
                <div className="container">
                    <BandFilter onSearchTermChange={bandSearch} />
                    <BandList bands={bands} />
                </div>

                <SocialFooter />
            </section>
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
)(Bands);
