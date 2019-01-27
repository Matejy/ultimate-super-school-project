import React, { Component } from 'react';

export default class CityInput extends Component {
    render() {
        return(
            <div className="form-group">
                <label htmlFor="inputCity">Mesto</label>
                <input type="text" className="form-control" id="inputCity" placeholder="Bratislava"/>
            </div>
        )
    }
}