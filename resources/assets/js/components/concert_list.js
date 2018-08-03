import React, { Component } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

class ConcertList extends Component {
    constructor(props) {
        super(props);

        this.renderConcert = this.renderConcert.bind(this);
    }

    renderBand(band) {
        return (
            <li className="list-group-item" key={band.id}>
                <Link to={`/bands/${band.id}`}>
                    {band.name}
                </Link>
            </li>
        );
    }

    renderConcert(concert) {
        return (
            <div
                className="row rounded bg-white mb-2 concert-list-item h-100"
                key={concert.id}

            >
                <div className="col-4 text-center p-2 d-none d-sm-inline">
                    <Link to={`/concerts/${concert.id}`}>
                        <img
                            src="https://source.unsplash.com/random/800x1100"
                            className="img-fluid rounded"
                        />
                    </Link>
                </div>
                <div className="col p-2">
                    <div className="card h-100">
                        <div className="card-header bg-dark concert-title-header">
                            <h2 className="text-capitalize concert-title">
                                <Link className="text-white" to={`/concerts/${concert.id}`}>{concert.title}</Link>
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
                            <p>{concert.description}</p>               
                        </div>
                    </div>
                    
                    <br/>
                </div>
                <div className="col-lg-3 d-none d-lg-block p-2 bg-white rounded">
                    <div className="card h-100">
                        <div className="card-header bg-primary">
                            <h2 className="text-capitalize text-center text-white">Bands</h2>
                        </div>
                        <ul className="list-group">
                            {_.map(concert.bands, this.renderBand)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { concerts } = this.props;

        var orderedConcertList = _.values(concerts);

        orderedConcertList.sort(function compare(concertA, concertwB) {
            var dateA = new Date(concertA.start_time);
            var dateB = new Date(concertwB.start_time);

            return dateA - dateB;
        });

        return (
            <div className="container mt-4">
                {_.map(orderedConcertList, this.renderConcert)}
            </div>
        );
    }
}

export default ConcertList;
