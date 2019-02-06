import React, { Component } from 'react';

import AddressInput from './form-components/address-input';
import CityInput from './form-components/city-input';
import NameInput from './form-components/name-input';
import TelInput from './form-components/tel-input';
import MailInput from './form-components/mail-input';
import BdayInput from './form-components/bday-input';
import RcInput from './form-components/rc-input';
import PropInput from './form-components/prop-input';

export default class FyzForm extends Component {
    handleSubmit(event) {
        alert("fungujem");
    }
    
    render() {
        return(
            <form className="Fyz-form" onSubmit={this.handleSubmit}>
                <label>Osobné informácie</label>
                <NameInput />
                <BdayInput />
                <RcInput />
                <AddressInput />
                <CityInput />
                <label>Kontaktné informácie</label>
                <TelInput />
                <MailInput />
                <PropInput />
                <input type="submit"  value="Submit"/>
            </form>
        )
    }
}