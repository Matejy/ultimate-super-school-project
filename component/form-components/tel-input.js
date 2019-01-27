import React, { Component } from 'react';

export default class TelInput extends Component {
    render() {
        return(
            <div className="form-group">
                <label htmlFor="inputTel">Telefónne číslo</label>
                <input type="tel" className="form-control" id="inputTel" placeholder="+421 ~~~ ~~~ ~~~"/>
            </div>  
        )
    }
}