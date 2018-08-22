import React, { Component } from 'react';
import SocialFooter from './social_footer';
import BandShow from './band_show';

class Band extends Component {
    render() {
        const { id } = this.props.match.params;
        return (
            <div>
                <BandShow bandID={id} />
                <SocialFooter />
            </div>
        );
    }
}
export default Band;
