import React, { Component } from 'react';
import anime from '/Users/matejmadara/dofe-app/daruj-skole/node_modules/animejs/lib/anime.es.js';
import PickerForm from './forms/picker';
import TopPusher from './top-pusher';

export default class Assembler extends React.Component {

    render() {
        return(
            <div>
                <h1>Assembler</h1>
                <TopPusher />
            </div>
        )
    }
}