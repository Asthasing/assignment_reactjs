import React from 'react';

const Welcome = ({name}) => {
    
    let sayHi = `Hey ${name}!`;
    let greetMessage = `Welcome to Lovely Professional Univesity.`;
    return (
        <div>
            <h1>{sayHi}</h1>
            <h2>{greetMessage}</h2>
        </div>
    );
};

export default Welcome;