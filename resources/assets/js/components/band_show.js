import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBand } from '../actions';
import { renderTag } from './tag_render';
import { renderLoadingSpinner } from './loading_spinner';

class BandShow extends Component {
    componentDidMount() {
        const { bandID } = this.props;
        this.props.fetchBand(bandID);
    }

    render() {
        const { band } = this.props;

        if (!band) {
            return renderLoadingSpinner();
        }

        return (
            <section id="bandShow" className="mt-4">
                <div className="container">
                    <div className="row">
                        <div className="card">
                            <div className="card-header bg-white">
                                <h2 className="text-capitalize">{band.name}</h2>
                                <div className="card-subtitle text-muted">{band.state}</div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img
                                            src="https://source.unsplash.com/random/1200x1100"
                                            alt=""
                                            className="img-fluid rounded py-2"
                                        />
                                    </div>
                                    <div className="col">{band.description}</div>
                                </div>
                            </div>
                            <div className="card-footer bg-white text-right text-primary">
                                {_.map(band.tags, renderTag)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps({ bands }, ownProps) {
    return { band: bands[ownProps.bandID] };
}

export default connect(
    mapStateToProps,
    { fetchBand }
)(BandShow);
