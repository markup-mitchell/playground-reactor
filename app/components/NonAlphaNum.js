import React from 'react';

const NonAlphaNum = (props) => {
    let userInput = props.text || "";
    let nonAlpha = userInput.match(/\W/g) || 0;
    return <h2>Non-Alphanumeric Count: {nonAlpha.length || 0}</h2>;
};
 
export default NonAlphaNum;
