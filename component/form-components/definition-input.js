import React, { Component } from 'react';
export default class DefinitionInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            definition: '',
            };
        this.handleDefinitionInputChange = this.handleDefinitionInputChange.bind(this);
    }
    handleDefinitionInputChange(event) {
        var definition = this.refers.value;
        this.props.onHandleDefinition(definition);            
    }
    render() {
        return(
            <div className="form-group">
                <div id="definition">
                    <p>1. Definícia</p>
                    <p>1.1 V tejto zmluve "Dar" znamená</p>
                </div>
                <input type="text" className="form-control" id="inputDefinition" placeholder="Počítač" name="definition" value={this.state.value}  onChange={this.handleDefinitionInputChange} ref={(ref) => this.refers = ref} />
            </div>
        )
    }
}