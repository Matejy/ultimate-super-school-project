import React, { Component } from 'react';

export default class MailInput extends Component {
    constructor(props) {
        super(props);
        this.state = {mail: ''};
        this.handleMailInputChange = this.handleMailInputChange.bind(this);
    }
    handleMailInputChange(event) {
        var mail = this.refers.value;
        this.props.onHandleMail(mail);            
    }
    render() {
        return(
            <div className="form-group">
                <label htmlFor="inputMail">Mail</label>
                <input type="email" className="form-control" id="inputMail" placeholder="váš@email.sk" value={this.state.value}  onChange={this.handleMailInputChange} ref={(ref) => this.refers = ref} name="mail"/>
            </div>  
        )
    }
}