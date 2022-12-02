import { Box, FormControlLabel, Slide, Switch } from '@mui/material';
import { useNavigate } from "react-router-dom";
import React from 'react';
import { useState } from 'react';
import '../style/Asso.css';

var stage = 0;

function timeout(delay: number) {
  return new Promise( res => setTimeout(res, delay) );
}

function AppAsso() {
  const [roll, setRoll] = React.useState(0);
  let navigate = useNavigate();
  const handleChange = async () => {
    setRoll(1)
    await timeout(100);
    setRoll(2)
    await timeout(100);
    setRoll(3)
    await timeout(100);
    setRoll(4)
    await timeout(100);
    setRoll(5)
    await timeout(100);
    setRoll(6)
    await timeout(100);
    setRoll(7)
    await timeout(100);
    setRoll(8)
    await timeout(100);
    setRoll(9)
    await timeout(100);
    setRoll(1)
    await timeout(100);
    setRoll(2)
    await timeout(100);
    setRoll(3)
    await timeout(100);
    setRoll(4)
    await timeout(100);
    setRoll(5)
    await timeout(100);
    setRoll(6)
    await timeout(100);
    setRoll(7)
    await timeout(100);
    setRoll(8)
    await timeout(100);
    setRoll(9)
    await timeout(100);
    setRoll(1)
    await timeout(100);
    setRoll(2)
    await timeout(100);
    setRoll(3)
    await timeout(100);
    setRoll(4)
    await timeout(100);
    setRoll(5)
    await timeout(100);
    setRoll(6)
    await timeout(100);
    setRoll(7)
    await timeout(100);
    setRoll(8)
    await timeout(100);
    setRoll(9)
    await timeout(100);
    setRoll(1)
    await timeout(100);
    setRoll(2)
    await timeout(100);
    setRoll(3)
    await timeout(100);
    setRoll(10)
    await timeout(5000);
    navigate('/specialiste');
  };
const Initialtexte = "Salut ! Bienvenue au planning parental 🤗";
const InitialAnswer = "Salut :)";
const [text, setText] = useState(Initialtexte);
const [textAnswer, setAnswerText] = useState(InitialAnswer);
function changeText() {
  if (stage == 0) {
    setText("Comment je peux t'aider ?");
    setAnswerText('Je me pose des questions au sujet du dépistage')
    stage = 1
  }
  else if (stage == 1) {
    setText("D'accord laisse moi t'aider, explique moi :) ");
    setAnswerText('Pourquoi il faut se faire dépister ?')
    stage = 2
  }
  else if (stage == 2) {
    setText("Une IST diagnostiquée tôt permet une meilleure prise en charge. Le dépistage permet d'éviter que l' infection s'aggrave et entraîne des séquelles ou des complications !");
    setAnswerText("D'accord je comprends")
    stage = 3
  }
  else if (stage == 3) {
    setText("Aurait tu besoin de te faire dépister ? C'est important si tu as des doutes");
    setAnswerText('Oui je pense que ce serait une bonne idée')
    stage = 4
  }
  else if (stage == 4) {
    setText("As tu d'autre questions ?");
    setAnswerText("Je me demandais comment on pouvais traiter les MST ?")
    stage = 5
  }
  else if (stage == 5) {
    setText("Le traitement des IST comme la chlamydia, les gonorrhées ou la syphilis se fait à l'aide d'antibiotiques. Aussi il est essentiel de faire appel à un médecin car il n'existe pas de traitement sans ordonnance. D'autres comme l'herpès génital ou le VIH sont incurables et restent à vie");
    setAnswerText("D'accord,je vois,comment savoir de quel traitement je pourrais avoir besoin ?");
    stage = 6
  }
  else if (stage == 6) {
    setText("Je ne pourrais pas te répondre je ne suis pas assez renseigné sur le sujet");
    setAnswerText('Dommage,comment faire si je suis toujours inquiet après un test négatif ?')
    stage = 7
  }
  else if (stage == 7) {
    setText("Tu devrais peut être en parler avec un spécialiste");
    setAnswerText("Je comprends,je me demandais comment on peut s'assumer sexuellement quand on est différent ?")
    stage = 8
  }
  else if (stage == 8) {
    setText("Il y beaucoup de renseignement sur le sujet, tu peux aussi en parler avec un psychologue compétent");
    setAnswerText("D'accord,j'aimerais savoir si il est possible de se vacciner contre ces MST")
    stage = 9
  }
  else if (stage == 9) {
    setText("C'est possible pour l'hépatite,tu devrais consulter un médecin a ce sujet");
    setAnswerText("Trop cool ! Je me posais des questions sur la transidentité a mon sujet ?")
    stage = 10
  }
  else if (stage == 10) {
    setText("Je ne suis pas vraiment compétent pour en parler avec quelqu'un d'autre");
    setAnswerText("D'accord je vais surement faire ça :)")
    stage = 11
  }
  else if (stage == 11) {
    setText("Mais avant ça on va d'abord te dépister quand tu sera prêt");
    setAnswerText("Allons-y !")
    stage = 12
  }
}
  return (
    <div className="AppAsso">
      <img src="chapter3/background.jpg" alt="background" className="background"/>
      <img src="chapter3/aide.png" alt="aide" className="helper"/>
      { stage <= 10 ? <img src="chapter3/heart.png" alt="heart" className="heart1"/> : null }
      { stage <= 9 ? <img src="chapter3/heart.png" alt="heart" className="heart2"/> : null }
      { stage <= 8 ? <img src="chapter3/heart.png" alt="heart" className="heart3"/> : null }
      { stage <= 7 ? <img src="chapter3/heart.png" alt="heart" className="heart4"/> : null }
      { stage <= 6 ? <img src="chapter3/heart.png" alt="heart" className="heart5"/> : null }
      { stage <= 11 ? 
            <div className="dialogBox" >     
            <p className="helpername">Conseiller</p>
            <p className="dialogText">{text}</p>
            <button className="dialogAnswer" onClick={changeText}>{textAnswer}</button>
            </div>
      : null }
        { stage > 11 ? 
        <>
            <Box sx={{ height: 180 }}>
      <Box sx={{ width: `calc(100px + 16px)` }}>
        <div className="center">
        { roll === 0 ?
                <div className="roll">
                <div className="card">
                <img src="chapter3/virus.png" className="cardimage" alt="Avatar"></img>
                <h4 className="rollName">VIH</h4> 
                </div>
                </div>
        : null }
                { roll === 1 ?
                <div className="roll">
                <div className="card">
                <img src="chapter3/virus2.png" className="cardimage" alt="Avatar"></img>
                <h4 className="rollName">Papillomavirus</h4> 
                </div>
                </div>
        : null }
                        { roll === 2 ?
                <div className="roll">
                <div className="card">
                <img src="chapter3/virus3.png" className="cardimage" alt="Avatar"></img>
                <h4 className="rollName">Herpès</h4> 
                </div>
                </div>
        : null }
                { roll === 3 ?
                <div className="roll">
                <div className="card">
                <img src="chapter3/virus.png" className="cardimage" alt="Avatar"></img>
                <h4 className="rollName">Mycoplasmes</h4> 
                </div>
                </div>
        : null }
                { roll === 4 ?
                <div className="roll">
                <div className="card">
                <img src="chapter3/virus2.png" className="cardimage" alt="Avatar"></img>
                <h4 className="rollName">Trichomonas Vaginalis</h4> 
                </div>
                </div>
        : null }
                        { roll === 5 ?
                <div className="roll">
                <div className="card">
                <img src="chapter3/virus3.png" className="cardimage" alt="Avatar"></img>
                <h4 className="rollName">Chlamydiae trachomatis</h4> 
                </div>
                </div>
        : null }
                { roll === 6 ?
                <div className="roll">
                <div className="card">
                <img src="chapter3/virus.png" className="cardimage" alt="Avatar"></img>
                <h4 className="rollName">Gonocoque</h4> 
                </div>
                </div>
        : null }
                { roll === 7 ?
                <div className="roll">
                <div className="card">
                <img src="chapter3/virus2.png" className="cardimage" alt="Avatar"></img>
                <h4 className="rollName">Hépatite B</h4> 
                </div>
                </div>
        : null }
                        { roll === 8 ?
                <div className="roll">
                <div className="card">
                <img src="chapter3/virus3.png" className="cardimage" alt="Avatar"></img>
                <h4 className="rollName">Syphilis</h4> 
                </div>
                </div>
        : null }
                        { roll === 9 ?
                <div className="roll">
                <div className="card">
                <img src="chapter3/virus2.png" className="cardimage" alt="Avatar"></img>
                <h4 className="rollName">Hépatite C</h4> 
                </div>
                </div>
        : null }
                        { roll === 10 ?
                <div className="roll">
                <div className="card">
                <img src="chapter3/health.png" className="cardimage" alt="Avatar"></img>
                <h4 className="rollName">Sain :)</h4> 
                </div>
                </div>
        : null }
        <button className="buttonSpin" onClick={handleChange}>Dépistage</button>
        </div>
      </Box>
    </Box>
 </>
      : null }
  
    </div>
    
  );
}


export default AppAsso;
 