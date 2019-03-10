import React, { Component } from 'react';
var id = 0;
export default class ArbiterInput extends Component {
    generateInput = () => {
        var ds = true;
        if(ds===true) {
            id = id + 1111;
            ds=false;
        }
        var stringId = '' + id;
        var stringName = 'textarea' + id;
        var render = document.createElement('textarea');
        render.setAttribute('className', 'form-control');
        render.setAttribute('id', stringId);
        render.setAttribute('rows', '5');
        render.setAttribute('cols', '50');
        render.setAttribute('value', 'default');
        render.setAttribute('name', stringName);
        var curentDiv = document.getElementById("spb3");
        var parentDiv = document.getElementById("parent3");
        parentDiv.insertBefore(render, curentDiv);
    }
    render() {
        return(
            <div className="form-group" >
                <div id="arbiter">
                    <p >8. Rozhodné právo</p>
                    <p>8.1 Táto Zmluva sa riadi právnym poriadkom Slovenskej republiky, najmä ustanovením § 628 a nasl. zákona č. 40/1964 Zb. Občiansky zákonník v znení neskorších zmien</p>
                </div>
                <div id="parent3">
                <button className="btn btn-outline-primary" type="button" name="textarea" id="spb3" onClick={this.generateInput}>+</button> 
                </div>
            </div>
        )
    }
}