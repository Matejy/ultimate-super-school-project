import React, { Component } from 'react';
export default class CityInput extends Component {    
    constructor(props) {
        super(props);
        this.state = {city: ''};
        this.handleCityInputChange = this.handleCityInputChange.bind(this);
    }
    handleCityInputChange(event) {
        var city = this.refers.value;
        this.props.onHandleCity(city);            
    }
    render() {
        return(
            <div className="form-group">
                <label htmlFor="inputCity">Mesto</label>
                <input type="text" className="form-control" id="inputCity" placeholder="Bratislava" value={this.state.value}  onChange={this.handleCityInputChange} ref={(ref) => this.refers = ref} name="city"/>
            </div>
        )
    }
}