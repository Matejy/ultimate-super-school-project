import React, { Component } from 'react';

export default class NationalityInput extends Component {
    render() {
        return(
            <div className="form-group">
                <label htmlFor="inputNationality">Štátna príslušnosť</label>
                <input type="text" className="form-control" id="inputNationality" placeholder="SR"/>
            </div>  
        )
    }
}