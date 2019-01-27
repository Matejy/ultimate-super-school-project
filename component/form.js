import React, { Component } from 'react';
import PickerForm from './picker'
import anime from '/Users/matejmadara/dofe-app/daruj-skole/node_modules/animejs/lib/anime.es.js';

export default class Form extends Component {
    render() {
        return (
            <div className="container">
                <PickerForm />
            </div>
        )
    }
}