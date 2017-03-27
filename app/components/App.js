import React from 'react';
import FreeType from './FreeType.js';
import CaseStats from './CaseStats.js';
import TextLength from './TextLength.js';
import NonAlphaNum from './NonAlphaNum.js';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
                        liveInput: {}
        };
    }

    setValue(property, event) {
        var value = event.target.value;
        this.setState( ({liveInput}) => {
            liveInput[property] = value;
            return { liveInput: liveInput};
            })
    }

    render() {
        var testStyle = {
            backgroundColor: "coral",
            fontFamily: "monospace",
            fontSize: 20,
            textAlign: "center"
        }
        return(
            <div style={testStyle}>
                <h1>Real-time Text Analytics</h1>
                <FreeType acceptInput={this.setValue.bind(this, "liveInput")} />
                <TextLength text={this.state.liveInput.liveInput} />
                <CaseStats text={this.state.liveInput.liveInput} />
                <NonAlphaNum text={this.state.liveInput.liveInput} /> 
            </div>
        );
    }
}

