import React, { Component } from 'react';
export default class StatementInput extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            statement: '',
            viewTextarea: ''
            };
        this.handleStatementInputChange = this.handleStatementInputChange.bind(this);
    }
    handleStatementInputChange(event) {
        var statement = this.refers.value;
        this.props.onHandleStatement(statement);            
    }
    handleView = (event) => {
        this.setState({ viewTextarea: event.target.name});
    }
    render() {
        return(
            <div className="form-group">
                <label>3. Vyhlásenia</label><br/>
                <label>3.1 Darca vyhlasuje, že je výlučným vlastníkom Daru.</label>
                <div> 3.2 Obdarovaný vyhlasuje, že si Dar riadne prezrel a oboznámil sa so stavom Daru pred uzavretím tejto Zmluvy.
                    <br/><button className="btn btn-outline-primary" type="button" name="textarea" onClick={this.handleView}>Pridať ďalšie vyhlásenie</button> 
                </div>
                <div>
                    {this.state.viewTextarea === "textarea" && 
                    <div>
                    <textarea className="form-control" id="inputStatement" rows="5" cols="50" name="statement" value={this.state.value}  onChange={this.handleStatementInputChange} ref={(ref) => this.refers = ref}></textarea>
                    <button className="btn btn-outline-primary" type="button" name="hide" onClick={this.handleView}>Hide</button>
                    </div> }
                </div>
            </div>
        )
    }
}