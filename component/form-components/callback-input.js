import React, { Component } from 'react';
export default class CallbackInput extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            callback: '',
            viewTextarea: ''
            };
        this.handleCallbackInputChange = this.handleCallbackInputChange.bind(this);
    }
    handleCallbackInputChange(event) {
        var callback = this.refers.value;
        this.props.onHandleCallback(callback);            
    }
    handleView = (event) => {
        this.setState({ viewTextarea: event.target.name});
    }
    render() {
        return(
            <div className="form-group">
                    <div id="callback">
                        <p>7. Odstúpenie od zmluvy</p>
                        <p>7.1 Obdarovaný má právo od tejto Zmluvy odstúpiť v prípade, že sa ktorékoľvek vyhlásenie Darcu uvedené v článku 3 tejto Zmluvy ukáže ako nepravdivé.</p>
                        <p>7.2 Odstúpenie od tejto Zmluvy je účinné doručením písomného oznámenia o odstúpení druhej Zmluvnej strane.</p>
                    </div>
                    <br/><button className="btn btn-outline-primary" type="button" name="textarea" onClick={this.handleView}>Pridať ďalšie vyhlásenie</button> 
                <div>
                    {this.state.viewTextarea === "textarea" && 
                    <div>
                    <textarea className="form-control" id="callback1" rows="5" cols="50" name="statement" value={this.state.value}  onChange={this.handleCallbackInputChange} ref={(ref) => this.refers = ref}></textarea>
                    <button className="btn btn-outline-primary" type="button" name="hide" onClick={this.handleView}>Hide</button>
                    </div> }
                </div>
            </div>
        )
    }
}