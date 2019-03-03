import React, { Component } from 'react';
export default class ArbiterInput extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            arbiter: '',
            viewTextarea: ''
            };
        this.handleArbiterInputChange = this.handleArbiterInputChange.bind(this);
    }
    handleArbiterInputChange(event) {
        var arbiter = this.refers.value;
        this.props.onHandleArbiter(arbiter);            
    }
    handleView = (event) => {
        this.setState({ viewTextarea: event.target.name});
    }
    render() {
        return(
            <div className="form-group" >
                <div id="arbiter">
                    <p >8. Rozhodné právo</p>
                    <p>8.1 Táto Zmluva sa riadi právnym poriadkom Slovenskej republiky, najmä ustanovením § 628 a nasl. zákona č. 40/1964 Zb. Občiansky zákonník v znení neskorších zmien</p>
                </div>
                <div> 
                    <br/><button className="btn btn-outline-primary" type="button" name="textarea" onClick={this.handleView}>Pridať ďalšie vyhlásenie</button> 
                </div>
                <div>
                    {this.state.viewTextarea === "textarea" && 
                    <div>
                    <textarea id="arbiter1" className="form-control" rows="5" cols="50" name="arbiter1" value={this.state.value}  onChange={this.handleArbiterInputChange} ref={(ref) => this.refers = ref}></textarea>
                    <button className="btn btn-outline-primary" type="button" name="hide" onClick={this.handleView}>Hide</button>
                    </div> }
                </div>
            </div>
        )
    }
}