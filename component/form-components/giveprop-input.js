import React, { Component } from 'react';
export default class GivepropInput extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            giveprop: '',
            type: ''
            };
        this.handleGivepropInputChange = this.handleGivepropInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleGivepropInputChange(event) {
        var giveprop = this.refers.value;
        this.props.onHandleGiveprop(giveprop);            
    }
    handleChange(event) {
        var type = this.refers.value;
        this.props.onHandleTypeGive(type);
        this.setState({type: event.target.value});
    }
    render() {
        return(
            <div className="form-group">
                <div id="giveprop">
                    <p>4. Odovzdanie daru</p>
                    <p>4.1 Darca je povinný odovzdať Dar obdarovanému</p>
                </div>
                <div>
                    <select className="form-control form-control-lg" id="type-picker" onChange={this.handleChange} ref={(ref) => this.refers = ref} >
                        <option value="onDisclose" name="onDisclose" >pri uzavretí Zmluvy</option>
                        <option value="inTime" name="inTime">v lehote</option>
                    </select>
                </div>
                <div>
                    {this.state.type === "inTime" && <input type="text" className="form-control" id="InputGive" placeholder="Lehota" ref={(ref) => this.refers = ref} value={this.state.value}  onChange={this.handleGivepropInputChange}/>}
                    {this.state.type === "inTime" && <p>O odovzdaní a prevzatí Daru bude Zmluvnými stranami napísaný a podpísaný preberací protokol alebo iný dokument potvrdzujúci odovzdanie a prevzatie Daru.</p>}
                </div>
            </div>
        )
    }
}