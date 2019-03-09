import React, { Component } from 'react';
var id = 0;
export default class StatementInput extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            statement: '',
            viewTextarea: ''
            };
        this.handleStatementInputChange = this.handleStatementInputChange.bind(this);
    }
    generateInput = () => {
        var ds = true;
        if(ds===true) {
            id = id + 11;
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
        render.addEventListener('onclick', this.handleStatementInputChange());
        var curentDiv = document.getElementById("spb1");
        var parentDiv = document.getElementById("parent1");
        parentDiv.insertBefore(render, curentDiv);
    }
    handleStatementInputChange() {
        console.log("pisem sa dvakrat?");
    }
    render() {
        return(
            <div className="form-group">
                <div id="statement">
                    <p>3. Vyhlásenia</p>
                    <p>3.1 Darca vyhlasuje, že je výlučným vlastníkom Daru.</p>
                    <p>3.2 Obdarovaný vyhlasuje, že si Dar riadne prezrel a oboznámil sa so stavom Daru pred uzavretím tejto Zmluvy.</p>
                </div>
                <div id="parent1">
                <button className="btn btn-outline-primary" type="button" name="textarea" id="spb1" onClick={this.generateInput}>+</button> 
                </div>
            </div>
        )
    }
}