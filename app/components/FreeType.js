import React from 'react';


export default class FreeType extends React.Component {
    
    constructor() {

        super();
        this.state = {
                        liveInput: '',
                        test: "Hey"
        };

        let displayBox = document.getElementById('output');
    }

    setValue(property, event) {

        var value = event.target.value;

        this.setState(({liveInput}) => {
            // liveInput[property] = value;
            displayBox.innerHTML = value;
            console.log(this.state);
            return {liveInput: liveInput};
            }
        )}
    
    render() {
    
        return (
            <div className="form-group">
                <h1>This is the input field component:</h1>
                <input type="text" id="freetype" onChange={this.setValue.bind(this, "liveInput")} />
                <h2 id="displayBox"></h2>
                <h2>{this.state.liveInput}</h2>
            </div>
        )
    }
}



