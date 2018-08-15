import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchConcert } from '../actions';
import { renderLoadingSpinner } from './loading_spinner';
import SocialFooter from './social_footer';
import ConcertMap from './concert_map';
import Moment from 'react-moment';

class ConcertShow extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchConcert(id);
    }

    renderPrice(price) {
        if (price) {
            return (
                <div className="d-flex justify-content-end mt-auto">
                    <div className="display-4 bg-primary text-white rounded p-2">${price}</div>
                </div>
            );
        }
    }

    render() {
        const { concert } = this.props;

        if (!concert) {
            return renderLoadingSpinner();
        }

        return (
            <section id="showConcert" className="my-5">
                <div className="container bg-white rounded">
                    <div className="row d-flex">
                        <div className="col-md-4 py-1 text-center d-none d-md-block align-self-center">
                            <img
                                src="https://source.unsplash.com/random/800x1100"
                                alt=""
                                className="img-fluid rounded"
                            />
                        </div>

                        <div className="col p-1">
                            <div className="card h-100">
                                <div className="card-header bg-dark concert-title-header">
                                    <h2 className="text-capitalize text-white concert-title">{concert.title}</h2>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <div className="card-title">
                                        <h4>
                                            <Moment format="dddd, MMMM Do YYYY h:mm A">{concert.start_time}</Moment>
                                        </h4>
                                    </div>
                                    <h5 className="card-subtitle text-muted text-capitalize">{concert.venue.name}</h5>
                                    <br />
                                    <p>
                                        <a href={concert.venue.website}>{concert.venue.website}</a>
                                    </p>
                                    <p>{concert.venue.phone}</p>
                                    <p>{concert.venue.street}</p>
                                    <p>
                                        {concert.venue.city +
                                            ', ' +
                                            concert.venue.state +
                                            ' ' +
                                            concert.venue.postal_code}
                                    </p>
                                    <p />
                                    {this.renderPrice(concert.price)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row bg-dark text-white concert-description-box">
                        <div className="col p-2 m-2">
                            {concert.description}
                            <p className="lead" />
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4 p-2 m-2">
                            <ConcertMap isMarkerShown={true} lat={concert.venue.lat} lng={concert.venue.lng} />
                        </div>
                    </div>
                </div>
                <SocialFooter />
                <div style={{height:60}}></div>
            </section>
        );
    }
}

function mapStateToProps({ concerts }, ownProps) {
    return { concert: concerts[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps,
    { fetchConcert }
)(ConcertShow);
