import React from 'react';
import '../style/pages/specialiste/specialiste.css'
import {GeoChart} from "../components/plague-game/GeoChart";

export const SpecialistePage = () => {
    return(
        <div className="background">
            <h2>Plague-inc (MST version)</h2>
            <GeoChart />
        </div>
    );
}