import React, { Component } from 'react';

class BandFilter extends Component {
    constructor(props){
        super(props);

        this.state={term:""}
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
    
    render() { 
        return ( 
            <div className="container mt-5">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i id="bandFilterIcon" className="fas fa-search"></i>
                        </span>
                    </div>
                    <input 
                    type="text" 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} 
                    className="form-control form-control-lg" 
                    placeholder="Search..."/>
                </div>
            </div>
         );
    }
}


export default BandFilter;