import * as React from "react";
import '../style/room.css';
import Popup from "../components/chapter-2/Popup";
import 'semantic-ui-css/semantic.min.css'
import {Button, TextField} from "@mui/material";


const Room = () => {

    let codeValidation = false;

    setTimeout(() => {
        const roomImg = document.getElementById("room-img");
        if(roomImg != null) roomImg.classList.add("room-img-hidden")

        setTimeout(() => {
            if(roomImg != null) roomImg.style.height = '0';
        }, 700)

    }, 2000)

    setTimeout(() => {
        const body = document.body;
        if(body != null) {
            body.style.backgroundImage = "url('chapter-2/room-pov-computer.png')"
            body.style.backgroundSize = "cover";
        }
        const computerImg = document.getElementById("container-img");
        if(computerImg != null) computerImg.classList.add("computer-img-shown")
        displayPopup(0);
    }, 3000)

    function displayPopup(i: number) {
        setTimeout(() => {
            if(i > 6) i = 0

            const popup = document.getElementById("popup-" + i);
            if(popup != null) {
                popup.style.top = getRandomInt(window.innerHeight * .1, window.innerHeight -  window.innerHeight * .3).toString()
                popup.style.left = getRandomInt(window.innerWidth * .1, window.innerWidth -  window.innerWidth * .3).toString()
                popup.style.opacity = '1';
            }

            if(!codeValidation) displayPopup(i + 1);
        }, 500)
    }

    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    let code = ""

    const handleKeyboardEvent = (e: KeyboardEvent) => {
        if(e.key >= 'a' && e.key <= 'z') {
            code += e.key
        }
        else if(e.key === 'Backspace') code = code.slice(0, code.length - 1)
        const button = document.getElementById("button-activate");
        if(code === 'capote') {
            if(button != null) button.style.opacity = '1'
        }
        else {
            if(button != null) button.style.opacity = '0'
        }
    };

    window.addEventListener("keydown", handleKeyboardEvent);

    function nextChapter() {
        window.location.assign("/website")
    }

    return(
        <div>
            <img id="room-img" className="room-img" src="chapter-2/room-pov-computer.png" alt="room"/>
            <div className="container-img" id="container-img">
                <img id="computer-img" className="computer-img" src="chapter-2/computer-screen.png" alt="screen"/>

                <Popup id="popup-0" text="!!! Augmentez la taille de votre pénis en à peine 10 minutes sans attraper le VIH !!! 🎁"/>
                <Popup id="popup-1" text=" Le sexe oui, mais protégé ! 🎀 "/>
                <Popup id="popup-2" text=" Découvrez les IST les plus à la mode sur https://www.cerballiance.fr/fr/blog/ist/ist-les-differents-types-dinfections 🥇"/>
                <Popup id="popup-3" text=" Téléchargez cet antivirus pour éviter l'herpès, code : capote "/>
                <Popup id="popup-4" text=" Warning ! 5 virus détectés, allez consulter un médecin ! 🚑 "/>
                <Popup id="popup-5" text=" La tromperie est le nerf de la guerre, comme les rapports non-protégés "/>

                <div className="container-antivirus">
                    <div className="field-container">
                        <TextField id="field-activate" label="Activez le code capote antivirus !"  variant="outlined" color="success" style={{width: '17vw'}}/>
                    </div>
                    <Button id="button-activate" variant="contained" onClick={nextChapter} color="success" style={{marginLeft: '10px', opacity: '0'}}>Activer !</Button>
                </div>

            </div>
        </div>
    )

}

export default Room;
