import React, { Component } from 'react';
var id = 0;
export default class CallbackInput extends Component {
    generateInput = () => {
        var ds = true;
        if(ds===true) {
            id = id + 111;
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
        var curentDiv = document.getElementById("spb2");
        var parentDiv = document.getElementById("parent2");
        parentDiv.insertBefore(render, curentDiv);
    }
    render() {
        return(
            <div className="form-group">
                <div id="callback">
                    <p>7. Odstúpenie od zmluvy</p>
                    <p>7.1 Obdarovaný má právo od tejto Zmluvy odstúpiť v prípade, že sa ktorékoľvek vyhlásenie Darcu uvedené v článku 3 tejto Zmluvy ukáže ako nepravdivé.</p>
                    <p>7.2 Odstúpenie od tejto Zmluvy je účinné doručením písomného oznámenia o odstúpení druhej Zmluvnej strane.</p>
                </div>
                <div id="parent2">
                <button className="btn btn-outline-primary" type="button" name="textarea" id="spb2" onClick={this.generateInput}>+</button> 
                </div>
            </div>
        )
    }
}