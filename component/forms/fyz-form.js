import React, { Component } from 'react';

export default class FyzForm extends Component {
    render() {
        return(
            <form className="Fyz-form" onSubmit={this.handleSubmit}>
                <input type="submit"  value="Submit"/>
            </form>
        )
    }
}