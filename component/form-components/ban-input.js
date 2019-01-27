import React, { Component } from 'react';

export default class BanInput extends Component {
    render() {
        return(
            <div className="form-group">
                <label htmlFor="inputBan">Číslo bankového účtu</label>
                <input type="text" className="form-control" id="inputBan" placeholder="9033 0330 3030"/>
            </div>  
        )
    }
}