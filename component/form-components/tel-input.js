import React, { Component } from 'react';

export default class TelInput extends Component {
    constructor(props) {
        super(props);
        this.state = {tel: ''};
        this.handleTelInputChange = this.handleTelInputChange.bind(this);
    }
    handleTelInputChange(event) {
        var tel = this.refers.value;
        this.props.onHandleTel(tel);            
    }
    render() {
        return(
            <div className="form-group">
                <label htmlFor="inputTel">Telefónne číslo</label>
                <input type="tel" className="form-control" id="inputTel" placeholder="+421 ~~~ ~~~ ~~~" name="tel" value={this.state.value}  onChange={this.handleTelInputChange} ref={(ref) => this.refers = ref}/>
            </div>  
        )
    }
}