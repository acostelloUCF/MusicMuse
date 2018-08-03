import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchConcert } from "../actions";
import { renderLoadingSpinner } from "../components/loading_spinner";
import SocialFooter from "./social_footer";
import ConcertMap from "./concert_map";
import Moment from "react-moment";


class ConcertShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchConcert(id);
    }

    render() {
        const { concert } = this.props;

        if (!concert) {
            return renderLoadingSpinner();
        }

        return (
            <section id="showConcert" className="mt-4">
                <div className="container">
                    <div className="row mb-2 concert-list-item h-100">
                        <div className="col-md-4 text-center d-none d-sm-inline">
                            <img
                                src="https://source.unsplash.com/random/800x1100"
                                alt=""
                                className="img-fluid rounded"
                            />
                        </div>

                        <div className="col">
                            <div className="card h-100">
                                <div className="card-header bg-dark concert-title-header">
                                    <h2 className="text-capitalize text-white concert-title">
                                        {concert.title}
                                    </h2>
                                </div>
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4>
                                            <Moment format="dddd, MMMM Do YYYY h:mm A">
                                                {concert.start_time}
                                            </Moment>
                                        </h4>
                                    </div>
                                    <p>{}</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {concert.description}
                        </div>
                        <div className="col-md-4">
                            <ConcertMap isMarkerShown={true} lat={concert.lat} lng={concert.lng}/>
                        </div>
                    </div>

                    
                </div>
                <SocialFooter />
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
