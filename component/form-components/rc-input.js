import React, { Component } from 'react';

export default class RcInput extends Component {
    render() {
        return(
            <div className="form-group">
                <label htmlFor="inputRc">Rodné číslo</label>
                <input type="text" className="form-control" id="inputRc" placeholder="123456/7890 "/>
            </div>  
        )
    }
}