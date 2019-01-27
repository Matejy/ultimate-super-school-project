import React, { Component } from 'react';

export default class BdayInput extends Component {
    render() {
        return(
            <div className="form-group">
                <label htmlFor="inputBday">Dátum narodenia</label>
                <input type="text" className="form-control" id="inputBday" placeholder="1.9.2019"/>
            </div>  
        )
    }
}