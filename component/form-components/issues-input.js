import React, { Component } from 'react';
var id = 0;
export default class IssuesInput extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            issues: '',
            type: '',
            viewInput: ''
            };
        this.handleIssuesInputChange = this.handleIssuesInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleIssuesInputChange(event) {
        var issues = this.refers.value;
        this.props.onHandleIssues(issues);            
    }
    handleChange(event) {
        var type = this.refers.value;
        this.props.onHandleType(type);
        this.setState({type: event.target.value});
    }
    handleClick = (event) => {
        this.setState({ viewInput: event.target.name})
    }
    generateInput = () => {
        if(this.state.type === "type4"){
            var ds = true;
            if(ds===true) {
                id = id + 111111;
                ds=false;
            }
            var stringId = '' + id;
            var stringName = 'input' + id;
            var render = document.createElement('input');
            render.setAttribute('className', 'form-control');
            render.setAttribute('id', stringId);
            render.setAttribute('name', stringName);
            var currentDiv = document.getElementById("spbi");
            var parentDiv = document.getElementById("parenti");
            parentDiv.insertBefore(render, currentDiv);
        }
    }
    render() {
        return(
            <div className="form-group">
                <div id="issues">
                    <p>6. Vady daru</p>
                    <p>Darca vyhlasuje že dar je</p>
                </div>
                <div>
                    <select className="form-control form-control-lg" id="type-picker" onChange={this.handleChange} ref={(ref) => this.refers = ref} >
                        <option value="type3" >Je bez vád</option>
                        <option value="type4">má následujúce vady</option>
                    </select>
                </div>
                {/* <div>
                    {this.state.type === "type2" && 
                    <div>
                        <input type="text" className="form-control" placeholder="Popis vady" ref={(ref) => this.refers = ref} value={this.state.value}  onChange={this.handleIssuesInputChange}/>
                        <button type="button" className="btn btn-outline-danger" value="add-input" name="add-input" ref={(ref) => this.refers = ref} onClick={this.handleClick}>Ďaľšia vada</button>
                        {this.state.viewInput === "add-input" && 
                        <input type="text" className="form-control" placeholder="Popis vady" ref={(ref) => this.refers = ref} value={this.state.value}  onChange={this.handleIssuesInputChange}/>
                        } 
                    </div>}
                </div> */}
                <div id="parenti">
                <button className="btn btn-outline-danger" type="button" name="inputb" id="spbi" onClick={this.generateInput}>+</button> 
                </div>
            </div>
        )
    }
}