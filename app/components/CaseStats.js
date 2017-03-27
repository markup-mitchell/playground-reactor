import React from 'react';

const caseStats = (props) => {

    let userInput = props.text || "";
    let upperCase = userInput.match(/[A-Z]/g) || "";
    let upCount = upperCase.length;
    let lowerCase = userInput.match(/[a-z]/g) || "";
    let lowCount = lowerCase.length;
    return (
        <div>
            <h2>Upper Case: {upCount}</h2>
            <h2>Lower Case: {lowCount}</h2>
        </div>
    )
};  

export default caseStats;
