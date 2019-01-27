import React, { Component } from 'react';

export default class MailInput extends Component {
    render() {
        return(
            <div className="form-group">
                <label htmlFor="inputMail">Mail</label>
                <input type="email" className="form-control" id="inputMail" placeholder="váš@email.sk"/>
            </div>  
        )
    }
}