import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Chapter1 from './pages/chapter1/chapter1';
import {SpecialistePage} from "./pages/SpecialistePage";
import {FinalPage} from "./pages/chapter-5/FinalPage";


import {AfficherTest} from './pages/Test';
import Konami from "react-konami-code";
import ConfettiExplosion from "react-confetti-explosion";
import Asso from "./asso/Asso";
import Room from "./pages/Room";
import WebSite from "./components/chapter-2/WebSite";

const easterEgg = () =>{
    alert('Luke, la force est puissante en toi détruit la sida-death-star ! La force est avec toi !')
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



const deathStarExplode = (e:any) => {
    e.preventDefault();
    new Audio("https://www.cjoint.com/doc/21_05/KEhhYBEVF5L_Star-Wars-Theme-Song-.mp3").play();

    root.render(
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<App/>}/>
                    <Route path='/test' element={<AfficherTest/>}/>
                    <Route path='/specialiste' element={<SpecialistePage/>}/>
                    <Route path='/final' element={<FinalPage/>}/>
                    <Route path='/chapter1' element={<Chapter1/>}/>
                    <Route path='/room' element={<Room/>}/>
                    <Route path='/website' element={<WebSite/>}/>
                    {/* add here Route*/}
                </Routes>
            </Router>
            <div className="explotion">
                <ConfettiExplosion/>
                <ConfettiExplosion/>
                <ConfettiExplosion/>
            </div>
        </>
    )
}

    root.render(
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<App/>}/>
                    <Route path='/test' element={<AfficherTest/>}/>
                    <Route path='/specialiste' element={<SpecialistePage/>}/>
                    <Route path='/final' element={<FinalPage/>}/>
                    <Route path='/chapter1' element={<Chapter1/>}/>
                    <Route path='/asso' element={<Asso/>}/>
                    <Route path='/room' element={<Room/>}/>
                    <Route path='/website' element={<WebSite/>}/>
                </Routes>
            </Router>
            <Konami action={easterEgg}>
                <img id="deathstar" onClick={deathStarExplode} className="konami-img-deathstar"
                     src="/konami/death-satr-transformed.png"/>
                <div className="explotion">
                </div>
                <img className="luke-x-wing" src="http://iloveyou-iknow.com/alternative/images/xwing.png"/>
            </Konami>
        </>
    );
