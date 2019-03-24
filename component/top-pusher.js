import React, { Component } from 'react';
import PickerForm from './forms/picker';
import SchoolPicker from './school-data/school-picker';
import anime from '/Users/matejmadara/dofe-app/daruj-skole/node_modules/animejs/lib/anime.es.js';

var schoolPicker = document.getElementById('school-picker');
var formPicker = document.getElementById('form-picker');
var pickedSchoolExport = undefined;

export default class TopPusher extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            statusSPin : false,
            pickedSchoolin : []
        }
        this.onSubmitSPin = this.onSubmitSPin.bind(this);
        this.onSubmitFP = this.onSubmitFP.bind(this);
    }
    pickedSchoolin = (pickedSchool) => {
        this.setState({pickedSchoolin: pickedSchool});
        pickedSchoolExport = pickedSchool;
    }
    onSubmitSPin = (statusSP) => {
        this.setState({statusSPin: statusSP})
        if(statusSP == true ) {
            var schoolPicker = document.getElementById('school-picker');
            var formPicker = document.getElementById('form-picker');
            anime({
                targets: formPicker,
                opacity: 1
            });
            anime({
                targets: schoolPicker,
                opacity: 0
            });
        }
        console.log(statusSP + "2");
    }
    onSubmitFP() {
        var schoolPicker = document.getElementById('school-picker');
        anime({
            targets: schoolPicker,
            opacity: 0,
        });
    }
    render() {
        window.onload = function hide() {
            var schoolPicker = document.getElementById('school-picker');
            var formPicker = document.getElementById('form-picker');
            anime({
                targets: formPicker,
                opacity: 0,
            });
        }
        return(
            <div>
                <SchoolPicker onSubmitSP={this.onSubmitSPin} pickedSchool={this.pickedSchoolin}/>
                <PickerForm onSubmitFP={this.onSubmitFP}/>
            </div>
            // <BrowserRouter>
            //     <div>
            //         <Navigation />
            //         <Switch>
            //             <Route exact path="/" component={f}/>
            //             <Route path="/" component={}/>
            //             <Route path="/" component={}/>
            //             <Route component={Error} />
            //         </Switch>
            //     </div>
            // </BrowserRouter>
        )
    }
}

export { pickedSchoolExport as pickedSchoolFinal };