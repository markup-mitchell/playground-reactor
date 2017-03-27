import React from 'react';

export default class FreeType extends React.Component {

    render() {

        return (
            <div className="form-group">
                <p>Enter text:</p>
                <textarea rows="10" cols = "80" id="textArea" onChange={this.props.acceptInput} />
            </div>
        )
    }
}



