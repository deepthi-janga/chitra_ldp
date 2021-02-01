import React from 'react';

const CreateElement = () => {
    // return (
    //     <div>
    //         <h1>Text with jsx</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        null, React.createElement('h1', null, 'Created without using jsx')
    )
}

export default CreateElement;
