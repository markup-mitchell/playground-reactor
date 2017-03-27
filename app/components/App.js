import React from 'react';
import FreeType from './FreeType.js';
import CaseStats from './CaseStats.js';
import TextLength from './TextLength.js';

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
            console.log(value);
            return { liveInput: liveInput};
            })
    }

    render() {
        return(
            <div>
                <h1>Real-time Text Analytics</h1>
                <FreeType acceptInput={this.setValue.bind(this, "liveInput")} />
                <TextLength text={this.state.liveInput.liveInput} />
                <CaseStats text={this.state.liveInput.liveInput} />
            </div>
        );
    }
}

