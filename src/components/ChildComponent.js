import React from 'react';

const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={()=> {props.greetHandler("Yuvraj")}}>Greet Parent</button>
        </div>
    );
};

export default ChildComponent;

