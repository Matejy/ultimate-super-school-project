import React, { Component } from 'react';

export default class AddressInput extends Component {
    render() {
        return(
            <div className="form-group">
                <label htmlFor="inputAddress">Adresa trvalého bydliska</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Saratovská 26/b"/>
            </div>  
        )
    }
}