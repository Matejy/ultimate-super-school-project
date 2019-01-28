import React, { Component } from 'react';

export default class BdayInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bday: ''};
        this.handleBdayInputChange = this.handleBdayInputChange.bind(this);
    }
    handleBdayInputChange(event) {
        var bday = this.refers.value;
        this.props.onHandleBday(bday);
    }
    render() {
        return(
            <div className="form-group">
                <label htmlFor="inputBday">Dátum narodenia</label>
                <input ref={(ref) => this.refers = ref} value={this.state.value}  onChange={this.handleBdayInputChange} type="text" className="form-control" id="inputBday" placeholder="1.9.2019" name="bday"/>
            </div>  
        )
    }
}