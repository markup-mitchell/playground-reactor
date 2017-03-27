import React from 'react';

const TextLength = (props) => {
    let userInput = props.text || "";
    return <h2>Length: {userInput.length}</h2>;
};
 
export default TextLength;
