import React, { Component } from 'react';
export default class FinalInput extends Component {
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
                <div> 
                    <br/><button className="btn btn-outline-primary" type="button" name="textarea" onClick={this.handleView}>Pridať ďalšie vyhlásenie</button> 
                </div>
                <div>
                    {this.state.viewTextarea === "textarea" && 
                    <div>
                    <textarea className="form-control" id="inputStatement" rows="5" cols="50" name="final" value={this.state.value}  onChange={this.handleStatementInputChange} ref={(ref) => this.refers = ref}></textarea>
                    <button className="btn btn-outline-primary" type="button" name="hide" onClick={this.handleView}>Hide</button>
                    </div> }
                </div>
            </div>
        )
    }
}