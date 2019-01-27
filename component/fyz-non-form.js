import React, { Component } from 'react';
import $ from "jquery";

import AddressInput from './form-components/address-input';
import CityInput from './form-components/city-input';
import NameInput from './form-components/name-input';
import TelInput from './form-components/tel-input';
import MailInput from './form-components/mail-input';
import BdayInput from './form-components/bday-input';
import RcInput from './form-components/rc-input';
import NationalityInput from './form-components/nationality-input';

export default class FyzNonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'zmeň sa',
            bday: '',
            rc: '',
            nat: '',
            ads: '',
            city: '',
            tel: '',
            mail: ''
        };

    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleBdayInput = this.handleBdayInput.bind(this);
    this.handleRcInput = this.handleRcInput.bind(this);
    this.handleNationality = this.handleNationality.bind(this);
    this.handleAddressInput = this.handleAddressInput.bind(this);
    this.handleCityInput = this.handleCityInput.bind(this);
    this.handleTelInput = this.handleTelInput.bind(this);
    this.handleMailInput = this.handleMailInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleNameInput(event) {
        this.setState({name: event.target.value});
    }
    handleBdayInput(event) {
        this.setState({bday: event.target.value});
    }
    handleRcInput(event) {
        this.setState({rc: event.target.value});
    }
    handleNationality(event) {
        this.setState({nat: event.target.value});
    }
    handleAddressInput(event) {
        this.setState({ads: event.target.value});
    }
    handleCityInput(event) {
        this.setState({city: event.target.value});
    }
    handleTelInput(event) {
        this.setState({tel: event.target.value});
    }
    handleMailInput(event) {
        this.setState({mail: event.target.value});
    }
    handleSubmit(event) {
        alert("fungujem");
        alert("its working " + this.state.name + this.state.bday + this.state.rc + this.state.nat + this.state.ads + this.state.city + this.state.tel + this.state.mail);
        event.preventDefault();
    }
    render() {
        return(
            <form className="Fyz-non-form" onSubmit={this.handleSubmit}>
                <label>Osobné informácie</label>
                <NameInput value={this.state.name} onChange={this.handleNameInput}/>
                <BdayInput value={this.state.bday} onChange={this.handleBdayInput}/>
                <RcInput value={this.state.rc} onChange={this.handleRcInput}/>
                <NationalityInput value={this.state.nat} onChange={this.handleNationality}/>
                <AddressInput value={this.state.ads} onChange={this.handleAddressInput}/>
                <CityInput value={this.state.city} onChange={this.handleCityInput}/>
                <label>Kontaktné informácie</label>
                <TelInput value={this.state.tel} onChange={this.handleTelInput}/>
                <MailInput value={this.state.mail} onChange={this.handleMailInput}/>
                <input type="submit"  value="Submit"/>
            </form>
        )
    }
}