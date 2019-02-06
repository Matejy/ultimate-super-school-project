import React, { Component } from 'react';

export default class AddressInput extends Component {
    constructor(props) {
        super(props);
        this.state = {ads: ''};
        this.handleAddressInputChange = this.handleAddressInputChange.bind(this);
    }
    handleAddressInputChange(event) {
        var ads = this.refers.value;
        this.props.onHandleAds(ads);            
    }
    render() {
        return(
            <div className="form-group">
                <input type="text" className="form-control" id="inputAddress" placeholder="Saratovská 26/b" value={this.state.value}  onChange={this.handleAddressInputChange} ref={(ref) => this.refers = ref} name="address"/>
            </div>  
        )
    }
}