import React, { Component } from 'react';

import NameInput from './form-components/name-input';
import BdayInput from './/form-components/bday-input'
import RcInput from './form-components/rc-input';
import AddressInput from './form-components/address-input';
import CityInput from './form-components/city-input';
import TelInput from './form-components/tel-input';
import MailInput from './form-components/mail-input';

export default class FyzNonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            bdayInput: '',
            rcInput: '',
            // natInput: '',
            adsInput: '',
            cityInput: '',
            telInput: '',
            mailInput: '',
            definition: '',
        };

    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleBdayInput = this.handleBdayInput.bind(this);
    this.handleRcInput = this.handleRcInput.bind(this);
    // this.handleNationality = this.handleNationality.bind(this);
    this.handleAddressInput = this.handleAddressInput.bind(this);
    this.handleCityInput = this.handleCityInput.bind(this);
    this.handleTelInput = this.handleTelInput.bind(this);
    this.handleMailInput = this.handleMailInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDefinitionInput = this.handleDefinitionInput.bind(this);
    }
    handleNameInput = (name) => {
        this.setState({nameInput: name });
    }
    handleBdayInput = (bday) => {
        this.setState({bdayInput: bday});
    }
    handleRcInput = (rc) => {
        this.setState({rcInput: rc});
    }
    // handleNationality(nat) {
    //     this.setState({natInput: nat});
    // }
    handleAddressInput = (ads) => {
        this.setState({adsInput: ads});
    }
    handleCityInput = (city) => {
        this.setState({cityInput: city});
    }
    handleTelInput = (tel) => {
        this.setState({telInput: tel});
    }
    handleMailInput = (mail) => {
        this.setState({mailInput: mail});
    }
    handleDefinitionInput(event) {
        this.setState({definition: event.target.value});
    }
    handleSubmit(event) {
        alert("Začiatok " + this.state.nameInput + " " + this.state.bdayInput + " " + this.state.rcInput + " " + this.state.adsInput + " " + this.state.cityInput + " " + this.state.telInput + " " + this.state.mailInput + " Koniec..." );
        alert("Začiatok " + this.state.definition + " " + this.state.listDataFromChild + " " + this.state.rc + "" + this.state.nat + " " + this.state.ads + " " + this.state.city + " " + this.state.tel + " " + this.state.mail + " Koniec..." );
        event.preventDefault();
    }
    render() {
        return(
            <form className="Fyz-non-form" onSubmit={this.handleSubmit}>
                <label>Osobné informácie</label>
                <NameInput onHandleName={this.handleNameInput} />
                {/* <input type="text" className="form-control" placeholder="Krstné meno" name="name" onChange={this.handleNameInput}/> */}
                <BdayInput onHandleBday={this.handleBdayInput} />
                <RcInput onHandleRc={this.handleRcInput} />
                <AddressInput onHandleAds={this.handleAddressInput} />
                <CityInput onHandleCity={this.handleCityInput} />
                <label>Kontaktné informácie</label>
                <TelInput onHandleTel={this.handleTelInput} />
                <MailInput onHandleMail={this.handleMailInput} />
                <label>Právne veci</label>
                <div className="form-group">
                    <h1>Definícia</h1>
                    <label htmlFor="inputDefinition"> V tejto zmluve "Dar" znamená
                        <input type="text" className="form-control" id="inputDefinition" placeholder="Počítač" name="definition" onChange={this.handleDefinitionInput} />
                    </label>
                </div>
                <input type="submit"  value="Submit"/>
            </form>
        )
    }
};