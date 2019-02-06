import React, { Component } from 'react';

export default class IcoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {ico: ''};
        this.handleIcoInputChange = this.handleIcoInputChange.bind(this);
    }
    handleIcoInputChange(event) {
        var ico = this.refers.value;
        this.props.onHandleIco(ico);            
    }
    render() {
        return(
            <div className="form-group">
                <label htmlFor="inputBID">IČO</label>
                <input type="text" className="form-control" id="inputBID" placeholder="~~~~~~~" value={this.state.value}  onChange={this.handleIcoInputChange} ref={(ref) => this.refers = ref} name="ico"/>
            </div>  
        )
    }
}