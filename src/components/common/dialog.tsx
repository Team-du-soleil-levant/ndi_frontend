import React from 'react';
import '../../style/chapter1/dialog.css'

type Dial = {
    speaker: string;
    paragraph: string;
}

const Dialog = (props:Dial) => {
   return (
        <div className='dialog'>
            <h2 className='dialog-header'>{ props.speaker }</h2>
            <div className='dialog-container'>
                <div className='dialog-text'>
                    {props.paragraph}
                </div>
                
            </div>
        </div>
        
    ); 
}

export default Dialog
