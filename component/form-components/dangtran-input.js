import React, { Component } from 'react';

export default class Dangtran extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        var type = this.refers.value;
        this.props.onHandleTypeDang(type);
        this.setState({type: event.target.value})
    }
    render() {
        return(
            <div className="form-group">
                <div id="dangtran">
                    <p>5. Prechod nebezpečenstva zmluvy</p>
                    <p>5.1 Nebezpečenstvo škody na Dare prechádza z Darcu na Obdarovaného momentom</p>
                </div>
                <select className="form-control form-control-lg" id="type-picker" onChange={this.handleChange} ref={(ref) => this.refers = ref} >
                    <option value="type1">Uzavretia zmluvy</option>
                    <option value="type2">Prevzatia Daru darovaným</option>
                </select>
            </div>
        )
    }
}