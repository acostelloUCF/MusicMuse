import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTag } from "../actions";
import Accordian from "./accordian";
import { renderLoadingSpinner } from "./loading_spinner";
import SocialFooter from "./social_footer";

class TagShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchTag(id);
    }

    render() {
        const { tag } = this.props;

        if (!tag) {
            return renderLoadingSpinner();
        }

        return (
            <section id="tagShow" className="mt-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-white h2">
                                    #{tag.name}
                                </div>
                                <div className="card-body">
                                    <Accordian tag={tag} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SocialFooter/>
            </section>
        );
    }
}

function mapStateToProps({ tags }, ownProps) {
    return { tag: tags[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps,
    { fetchTag }
)(TagShow);
