import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border:'2px solid blue', margin: '5px'}}>
            <h3>this is Dial</h3>
            <p>Steps so far: {props.steps}</p>
        </div>
    );
};

export default Dial;