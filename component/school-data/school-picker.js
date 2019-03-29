import React from 'react';
import Autosuggest from 'react-autosuggest';
var data = require('../school-data/schools.json');
const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : data.filter(lang =>
      lang.ulica.toLowerCase().slice(0, inputLength) === inputValue
    );
};
const getSuggestionValue = suggestion => suggestion.ulica;
const renderSuggestion = suggestion => (
    <div>
      {suggestion.ulica}
    </div>
  );
export default class SchoolPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: []
        };
        this.handleSchoolData = this.handleSchoolData.bind(this);
    }
    onChange = (event, { newValue }) => {
        this.setState({
          value: newValue
        });
      };
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: getSuggestions(value)
        });
    };
    onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
    };
    handleSchoolData(event) {  
        var data = require('../school-data/schools.json');
        var selectedSchool = undefined;
        if(this.state.value !== "") {
            for ( var i = 0; i < data.length; i++) {
                if(data[i].ulica === this.state.value) {
                    console.log(data[i].psc);
                    console.log(data[i].nazov);
                    console.log(data[i].ulica);
                    console.log(data[i].miesto);
                    console.log(data[i].ziaci);
                    console.log(data[i].email);
                    console.log(data[i].cistel);
                    console.log(data[i].adrwww);
                    console.log("--------------");
                    selectedSchool = [data[i].nazov, data[i].ulica, data[i].miesto, data[i].psc, data[i].cistel, data[i].email, data[i].kodsko];
                    var statusInput = true;
                }
            }
        }
        else {
            alert("Zadajte vstup prosim")
            statusInput = false;
        }
        console.log(statusInput + "1")
        if(statusInput === undefined) {
            alert("Prosím zadajte platný vstup");
        }
        this.props.onSubmitSP(statusInput); 
        this.props.pickedSchool(selectedSchool);
        event.preventDefault();  
    }
    render() { 
        const { value, suggestions } = this.state;
        const inputProps = {
          placeholder: 'Zadajte adresu školy',
          value,
          onChange: this.onChange,

        };
        return(
            <div id="school-picker" className="form-group">
                <h5>Zvolte školu ktorej chcete darovať</h5>
                <p>Zadajte adresu školy</p>
                <form onSubmit={this.handleSchoolData} class="form-group">
                    <div>
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                        ref={(ref) => this.refers = ref}
                        value={this.state.value}
                    />
                    
                        {/* <input class="form-control" type="search" id="school-search" onChange={this.indexSchools}value={this.state.value} ref={(ref) => this.refers = ref}/> */}
                    </div>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}