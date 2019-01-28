import React, { Component } from 'react';

export default class NameInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
        this.handleNameInputChange = this.handleNameInputChange.bind(this);
    }
    handleNameInputChange(event) {
        var name = this.refers.value;
        this.props.onHandleName(name);            
    }
    render() {
        return(
            <input type="text" className="form-control" placeholder="Krstné meno" value={this.state.value}  onChange={this.handleNameInputChange} ref={(ref) => this.refers = ref} name="name"/>
        )
    }
};
        
    // <div className="row">
//     <div className="col">
//         <input type="text" className="form-control" placeholder="Krstné meno"  />
//     </div>
//     <div className="col">
//         <input type="text" className="form-control" placeholder="Priezvisko" />
//     </div>
// </div> value={this.state.name} onChange={this.handleNameInput}