import React from 'react';


export default class FreeType extends React.Component {
    
    constructor() {
        super();
        this.state = {
                        liveInput: {}
        };
        let displayBox = document.getElementById('output');
    }

    setValue(property, event) {

        var value = event.target.value;

        this.setState(({liveInput}) => {
            liveInput[property] = value;
            console.log(value);
            displayBox.innerHTML = value;
            return { liveInput: liveInput};
            }
        )}
    
    
    render() {


    
    return (
            <div className="form-group">
                <h1>This is the input field component:</h1>
                <input type="text" id="freetype" onChange={this.setValue.bind(this, "liveInput")} />
                <h2 id="displayBox">{this.value}</h2>
            </div>
    )
    }
}



