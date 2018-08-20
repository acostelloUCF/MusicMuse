import _ from 'lodash';
import React, {Component} from 'react';

class PasswordReset extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {token} = this.props.match.params;

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="form">
                            <input type="hidden" value={token}/>
                            <input type="text"/>
                        </div>
                    </div>
                </div>
            </div>
        );

    };
}

export default PasswordReset;