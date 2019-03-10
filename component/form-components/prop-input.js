import React, { Component } from 'react';
var id = 0;
export default class PropInput extends Component {
    generateInput = () => {
        var ds = true;
        if(ds===true) {
            id = id + 1;
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
        var curentDiv = document.getElementById("spb");
        var parentDiv = document.getElementById("parent");
        parentDiv.insertBefore(render, curentDiv);
    }
    render() {
        return(
            <div className="form-group">
                <div id="prop">
                    <p>2. Predmet zmluvy </p>
                    <p>2.1 Darca týmto daruje Dar špecifikovaný v čl. 1 tejto Zmluvy Obdarovanému a Obdarovaný Dar prijíma do svojho vlastníctva.</p>
                </div>
                <div id="parent">
                <button className="btn btn-outline-primary" type="button" name="textarea" id="spb" onClick={this.generateInput}>+</button> 
                </div>
            </div>
        )
    }
}