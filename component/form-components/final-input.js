import React, { Component } from 'react';
var id = 0; 
export default class FinalInput extends Component {
    generateInput = () => {
        var ds = true;
        if(ds===true) {
            id = id + 11111;
            ds=false;
        }
        var stringId = '' + id;
        var stringName = 'textarea' + id;
        var render = document.createElement('textarea');
        render.setAttribute('className', 'form-control');
        render.setAttribute('id', stringId);
        render.setAttribute('rows', '5');
        render.setAttribute('cols', '50');
        render.setAttribute('value', 'default');
        render.setAttribute('name', stringName);
        var curentDiv = document.getElementById("spb4");
        var parentDiv = document.getElementById("parent4");
        parentDiv.insertBefore(render, curentDiv);
    }
    render() {
        return(
            <div className="form-group" >
                <div id="final">
                    <p>9. Záverečné ustavnovenia</p>
                    <p>9.1 V tejto Zmluve, ak z kontextu jasne nevyplýva inak, zahrňuje význam slova v jednotnom čísle tiež význam daného slova v množnom čísle a naopak, význam slova vyjadrujúceho určitý rod zahŕňa tiež ostatné rody. Nadpisy sú uvádzané len pre prehľadnosť a nemajú vplyv na výklad tejto Zmluvy.</p>
                    <p>9.2 Nevymáhateľnosť alebo neplatnosť ktoréhokoľvek ustanovenia tejto Zmluvy nemá vplyv na vymáhateľnosť  alebo platnosť zostávajúcich ustanovení tejto Zmluvy, pokiaľ z povahy alebo obsahu takého ustanovenia nevyplýva, že nemôže byť oddelené od ostatného obsahu tejto Zmluvy.</p>
                    <p>9.3 Táto Zmluva predstavuje úplné dojednanie medzi Zmluvnými stranami vo vzťahu k predmetu tejto Zmluvy a nahradzuje všetky predchádzajúce dojednania týkajúce sa predmetu tejto Zmluvy.</p>
                    <p>9.4 Táto Zmluva môže byť zmenená písomnými dodatkami podpísanými všetkými Zmluvnými stranami.</p>
                    <p>9.5 Táto Zmluva je vyhotovená v 2 rovnopisoch. Každá Zmluvná strana obdrží 1 rovnopis tejto Zmluvy.</p>
                    <p>9.6 Každá zo Zmluvných strán hradí svoje vlastné náklady, ktoré jej vzniknú v dôsledku uzatvorenia tejto Zmluvy.</p>
                    <p>9.7 Táto Zmluva nadobúda platnosť a účinnosť okamihom jej podpisu všetkými Zmluvnými stranami.</p>
                    <p>9.8 Zmluvné strany vyhlasujú, že si Zmluvu prečítali, porozumeli jej obsahu a na znak súhlasu s ňou ju slobodne, vážne, nie v tiesni ani za nápadne nevýhodných podmienok podpisujú.</p>
                </div>
                <div id="parent4">
                <button className="btn btn-outline-primary" type="button" name="textarea" id="spb4" onClick={this.generateInput}>+</button> 
                </div>
            </div>
        )
    }
}