import React, { Component } from 'react';
export default class NameInput extends React.Component {
    render() {
        return(
            // <div className="row">
            //     <div className="col">
            //         <input type="text" className="form-control" placeholder="Krstné meno"  />
            //     </div>
            //     <div className="col">
            //         <input type="text" className="form-control" placeholder="Priezvisko" />
            //     </div>
            // </div> value={this.state.name} onChange={this.handleNameInput}
            <input type="text" className="form-control" placeholder="Krstné meno"/>
        )
    }
}