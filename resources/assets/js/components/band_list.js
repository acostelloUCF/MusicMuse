import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class BandList extends Component {
    constructor(props) {
        super(props);
    }

    renderBand(band) {
        return (
            <div className="col-lg-4 mb-3 mt-2" key={band.id}>
                <div className="card">
                    <Link to={`/bands/${band.id}`}>
                        <img
                            src="https://source.unsplash.com/random/700x700"
                            className="card-img-top img-fluid"
                            alt=""
                        />
                    </Link>
                    <div className="card-body text-dark">
                        <Link to={`/bands/${band.id}`}>
                            <h4 className="card-title text-truncate">
                                {band.name}
                            </h4>
                        </Link>
                        <h6 className="card-subtitle text-muted">
                            {band.state}
                        </h6>
                        <p className="card-text">{band.description}</p>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { bands } = this.props;

        //TODO: Build out sorting
        const orderedBandList = _.sortBy(bands, ["name"], ["asc"]);

        return (
            <section id="bandList">
                <div className="container">
                    <div className="row text-white mt-5">
                        {_.map(orderedBandList, this.renderBand)}
                    </div>
                </div>
            </section>
        );
    }
}

export default BandList;
