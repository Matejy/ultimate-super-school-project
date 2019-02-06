import React, { Component } from 'react';
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
    render() {
        return(
            <div className="form-group">
                <label>6. Vady daru</label>
                <div>Darca vyhlasuje že dar je
                    <select className="form-control form-control-lg" id="type-picker" onChange={this.handleChange} ref={(ref) => this.refers = ref} >
                        <option value="type1" name="type1" >Je bez vád</option>
                        <option value="type2" name="type2">má následujúce vady</option>
                    </select>
                </div>
                <div>
                    {this.state.type === "type2" && 
                    <div>
                        <input type="text" className="form-control" placeholder="Popis vady" ref={(ref) => this.refers = ref} value={this.state.value}  onChange={this.handleIssuesInputChange}/>
                        <button type="button" className="btn btn-outline-danger" value="add-input" name="add-input" ref={(ref) => this.refers = ref} onClick={this.handleClick}>Ďaľšia vada</button>
                        {this.state.viewInput === "add-input" && 
                        <input type="text" className="form-control" placeholder="Popis vady" ref={(ref) => this.refers = ref} value={this.state.value}  onChange={this.handleIssuesInputChange}/>
                        } 
                    </div>}
                </div>
            </div>
        )
    }
}