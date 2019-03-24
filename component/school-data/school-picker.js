import React from 'react'; 
var selectedSchool = undefined;
export default class SchoolPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchQ: ''};
        this.findQ = this.findQ.bind(this);
        this.handleSubmitQ = this.handleSubmitQ.bind(this);
    }
    findQ(event) {
        var searchQ = this.refers.value;
        // alert(searchQ)
        // this.props.searchQResult(searchQ);
    }
    handleSubmitQ(event) {
        var data = require('../school-data/schools.json');
        var searchQ = this.refers.value;
        var selectedSchool = undefined;
        if(searchQ !== "") {
            for ( var i = 0; i < data.length; i++) {
                if(data[i].ulica === searchQ) {
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
                    var statusSP = true;
                }
                // else if(selectedSchool = null) {
                //     alert("Ey")
                // }
            }
        }
        else {
            alert("Zadajte vstup prosim")
            statusSP = false;
        }
        console.log(statusSP + "1")
        if(statusSP === undefined) {
            alert("Prosím zadajte platný vstup");
        }
        this.props.onSubmitSP(statusSP); 
        this.props.pickedSchool(selectedSchool);
        event.preventDefault();  
    }
    render() {
        // window.onload = function() {
        //     var data = require('../school-data/schools.json');
        //     for(var i = 0; i <data.length; i++) {
        //     var obj = data[i];
        //     console.log("Name " + obj);
        //     }
        // }
        return(
            <div id="school-picker">
                <h5> Zvolte školu ktorej chcete darovať</h5>
                <p>Zadajte adresu školy</p>
                <form onSubmit={this.handleSubmitQ} class="form-group" autoComplete="off">
                    <div class="autocomplete">
                        <input class="form-control" type="search" id="school-search" value={this.state.value} name="q" onChange={this.findQ} ref={(ref) => this.refers = ref}/>
                    </div>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}
export { selectedSchool as SS };