import * as React from "react";
import '../../style/room.css';

const Popup = (props: any) => {

    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    function hidePopup() {
        const popup = document.getElementById(props.id);
        if(popup != null) popup.style.opacity = '0';
    }

    let y = getRandomInt(window.innerHeight * .05, window.innerHeight -  window.innerHeight * .4)
    let x = getRandomInt(window.innerWidth * .05, window.innerWidth -  window.innerWidth * .3)

    return (
        <div className="popup" id={props.id} style={{left: x, top: y}}>
            <p onClick={hidePopup} className="popup-close">❌</p>
            <div className="popup-container">
                <p className="popup-text">{props.text}</p>
                <img className="image-attention" src="chapter-2/attention.png" alt="attention"/>
            </div>
        </div>
    )
}

export default Popup;