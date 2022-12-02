import React from 'react';
import '../style/pages/specialiste/specialiste.css'
import {GeoChart} from "../components/plague-game/GeoChart";
import {Header} from "semantic-ui-react";

export const SpecialistePage = () => {
    return(
        <div className="background">
            <Header textAlign="center">
                <h2 className="plague-header">Plague-inc (Version MST)</h2>
                <p>Vous êtes maintenant bien renseigné mais il vous faut encore l'aide de profesionnels pour accomplir votre périple</p>
            </Header>
            <GeoChart />
        </div>
    );
}