import React, { Component } from 'react';

export default class RcInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rc: ''};
        this.handleRcInputChange = this.handleRcInputChange.bind(this);
    }
    handleRcInputChange(event) {
        var rc = this.refers.value;
        this.props.onHandleRc(rc);            
    }
    render() {
        return(
            <div className="form-group">
                <label htmlFor="inputRc">Rodné číslo</label>
                <input type="text" className="form-control" id="inputRc" placeholder="123456/7890 " ref={(ref) => this.refers = ref} value={this.state.value}  onChange={this.handleRcInputChange} name="rc"/>
            </div>  
        )
    }
}