import React, { Component } from 'react';
var id = 0;
export default class PropInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prop: '',
            viewTextarea: '',
            name1: ''
            };
        this.handlePropInputChange = this.handlePropInputChange.bind(this);
    }
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
        render.addEventListener('onclick', this.handlePropInputChange());
        var curentDiv = document.getElementById("spb");
        var parentDiv = document.getElementById("parent");
        parentDiv.insertBefore(render, curentDiv);
    }
    handleView = (event) => {
        this.setState({ viewTextarea: event.target.name});
    }
    handlePropInputChange() {
        console.log("pisem sa dvakrat?");
        // var inputs = document.getElementsByTagName("textarea");
        // for (var i = 0; i < inputs.length; i++) {
        //   alert(inputs[i].id);
        // }
        // if(inputs.id === "3") {
        //     alert("boy");
        // }
        // var prop = this.refers.value;
        // this.props.onHandleProp(prop);
    }
    render() {
        return(
            <div className="form-group">
                <label>2. Predmet zmluvy </label><br/>
                <label>2.1 Darca týmto daruje Dar špecifikovaný v čl. 1 tejto Zmluvy Obdarovanému a Obdarovaný Dar prijíma do svojho vlastníctva.</label>
                <div id="parent">
                <button className="btn btn-outline-primary" type="button" name="textarea" id="spb" onClick={this.generateInput}>+</button> 
                    {/* {this.state.viewTextarea === "textarea" && 
                    <div>
                    <textarea className="form-control" id="inputProp" rows="5" cols="50" name="prop" value={this.state.value}  onChange={this.handlePropInputChange} ref={(ref) => this.refers = ref}></textarea>
                    <button className="btn btn-outline-primary" type="button" name="hide" onClick={this.handleView}>Hide</button>
                    </div>} */}
                </div>
            </div>
        )
    }
}