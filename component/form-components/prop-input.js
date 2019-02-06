import React, { Component } from 'react';

export default class PropInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prop: '',
            viewTextarea: ''
            };
        this.handlePropInputChange = this.handlePropInputChange.bind(this);
    }
    handleView = (event) => {
        this.setState({ viewTextarea: event.target.name});
    }
    handlePropInputChange(event) {
        var prop = this.refers.value;
        this.props.onHandleProp(prop);            
    }
    render() {
        return(
            <div className="form-group">
                <label>2. Predmet zmluvy </label><br/>
                <label>2.1 Darca týmto daruje Dar špecifikovaný v čl. 1 tejto Zmluvy Obdarovanému a Obdarovaný Dar prijíma do svojho vlastníctva.</label>
                <button className="btn btn-outline-primary" type="button" name="textarea" onClick={this.handleView}>+</button> 
                <div>
                    {this.state.viewTextarea === "textarea" && 
                    <div>
                    <textarea className="form-control" id="inputProp" rows="5" cols="50" name="prop" value={this.state.value}  onChange={this.handlePropInputChange} ref={(ref) => this.refers = ref}></textarea>
                    <button className="btn btn-outline-primary" type="button" name="hide" onClick={this.handleView}>Hide</button>
                    </div>}
                </div>
            </div>
        )
    }
}