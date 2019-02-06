import React, { Component } from 'react';

import NameInput from './form-components/name-input';
import BdayInput from './/form-components/bday-input'
import RcInput from './form-components/rc-input';
import AddressInput from './form-components/address-input';
import LabelType from './form-components/labeltype';
import CityInput from './form-components/city-input';
import TelInput from './form-components/tel-input';
import MailInput from './form-components/mail-input';
import DefinitionInput from './form-components/definition-input';
import PropInput from './form-components/prop-input';
import StatementInput from './form-components/statement-input';
import GivepropInput from './form-components/giveprop-input';
import Dangtran from './form-components/dangtran-input';
import IssuesInput from './form-components/issues-input';

export default class FyzNonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            bdayInput: '',
            rcInput: '',
            adsInput: '',
            cityInput: '',
            telInput: '',
            mailInput: '',
            definitionInput: '',
            propInput: '',
            statementInput: '',
            typeInput: '',
            givepropInput: '',
            typeDangInput: '',
            IssuesInput: '',
            
        };

    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleBdayInput = this.handleBdayInput.bind(this);
    this.handleRcInput = this.handleRcInput.bind(this);
    this.handleAddressInput = this.handleAddressInput.bind(this);
    this.handleCityInput = this.handleCityInput.bind(this);
    this.handleTelInput = this.handleTelInput.bind(this);
    this.handleMailInput = this.handleMailInput.bind(this);
    this.handleDefinitionInput = this.handleDefinitionInput.bind(this);
    this.handlePropInput = this.handlePropInput.bind(this);
    this.handleTypeInput = this.handleTypeInput.bind(this);
    this.handleStatementInput = this.handleStatementInput.bind(this);
    this.handleGivepropInput = this.handleGivepropInput.bind(this);
    this.handleTypeDangInput = this.handleTypeDangInput.bind(this);
    this.handleIssuesInput = this.handleIssuesInput.bind(this);
    this.handleTypeIssues = this.handleTypeIssues.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    handleDefinitionInput = (definition) => {
        this.setState({definitionInput: definition});
    }
    handlePropInput = (prop) => {
        this.setState({propInput: prop});
    }
    handleStatementInput = (statement) => {
        this.setState({statementInput: statement});
    }
    handleTypeInput = (type) => {
        this.setState({typeInput: type});
    }
    handleGivepropInput = (giveprop) => {
        this.setState({givepropInput: giveprop});
    }
    handleTypeDangInput = (typeDang) => {
        this.setState({typeDangInput: typeDang})
    }
    handleIssuesInput = (issues) => {
        this.setState({IssuesInput: issues});
    }
    handleTypeIssues = (issuesType) => {
        this.setState({typeIssues: issuesType})
    }
    handleSubmit(event) {
        alert("Začiatok " + this.state.nameInput + " " + this.state.bdayInput + " " + this.state.rcInput + " " + this.state.adsInput + " " + this.state.cityInput + " " + this.state.telInput + " " + this.state.mailInput + " Koniec..." );
        alert("Začiatok " + this.state.definitionInput + " " + this.state.propInput + " " + this.state.statementInput + " " + this.state.typeInput + " " + this.state.givepropInput + " " + this.state.typeDangInput + " " + this.state.IssuesInput + " " + this.state.mail + " Koniec..." );
        event.preventDefault();
    }
    render() {
        return(
            <form className="Fyz-non-form" onSubmit={this.handleSubmit}>
                <label>Osobné informácie</label>
                <LabelType labeltext="Meno" />
                <NameInput onHandleName={this.handleNameInput} />
                <BdayInput onHandleBday={this.handleBdayInput} />
                <RcInput onHandleRc={this.handleRcInput} />
                <LabelType labeltext="Adresa trvalého bydliska"/>
                <AddressInput onHandleAds={this.handleAddressInput} />
                <CityInput onHandleCity={this.handleCityInput} />
                <LabelType labeltext="Kontaktné informácie"/>
                <TelInput onHandleTel={this.handleTelInput} />
                <MailInput onHandleMail={this.handleMailInput} />
                <label>Právne veci</label>
                <DefinitionInput onHandleDefinition={this.handleDefinitionInput}/>
                <PropInput onHandleProp={this.handlePropInput}/>
                <StatementInput onHandleStatement={this.handleStatementInput}/>
                <GivepropInput onHandleType={this.handleTypeInput} onHandleGiveprop={this.handleGivepropInput}/>
                <Dangtran onHandleTypeDang={this.handleTypeDangInput}/>
                <IssuesInput onHandleIssues={this.handleIssuesInput} onHandleType={this.handleTypeIssues}/>
                <input type="submit" value="Submit" className="btn btn-outline-primary"/>
            </form>
        )
    }
};