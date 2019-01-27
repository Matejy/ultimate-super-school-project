import React, { Component } from 'react';

export default class BidInput extends Component {
    render() {
        return(
            <div className="form-group">
                <label htmlFor="inputBID">IČO</label>
                <input type="text" className="form-control" id="inputBID" placeholder="~~~~~~~"/>
            </div>  
        )
    }
}