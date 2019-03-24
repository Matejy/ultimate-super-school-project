import React, { Component } from 'react';
import $ from "jquery";

import FyzNonForm from './fyz-non-form';
import FyzForm from './fyz-form';

export default class PickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'fyz-non'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        this.props.onSubmitFP();            
        event.preventDefault();
        if(this.state.value === 'fyz-non') {
            $(document).ready(function(){
                $('.PickerForm').hide(100);
                $('.Fyz-non-form').show(100);
            });
            console.log('fyzická osoba');
        }
        if(this.state.value === 'fyz') {
            $(document).ready(function(){
                $('.PickerForm').hide(100);
                $('.Fyz-form').show(100);
            });
            console.log('fyzická osoba podnikateľského typu');
        }
        if(this.state.value === 'pra') {    
            console.log('právnická osoba');
        }
        if(this.state.value === 'ins') {
            console.log('inštitúcia');
        }
    }
    render() {
        return (
            <div id="form-picker">
                <FyzNonForm />
                <FyzForm />
                <form onSubmit={this.handleSubmit} className="PickerForm">
                    <p>Zvolte typ osoby, fyzická/právnická</p>
                    <select className="form-control form-control-lg" value={this.state.value} onChange={this.handleChange}>
                        <option selected value="fyz-non" className="fyz-os">Fyzická osoba</option>
                        <option value="fyz">Fyzická osoba podnikateľského typu</option>
                        <option value="pra">Právnická osoba</option>
                        <option value="ins">Inštitúcia</option>
                    </select>
                    <input type="submit" value="Submit" /> 
                </form>
            </div>
        )
    }
}