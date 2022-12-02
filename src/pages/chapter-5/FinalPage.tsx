import React from 'react';
import Scene from '../../components/common/scene';
import data from '../../data/chapter5/dialog.json';

export const FinalPage = () => {
    const data_string = JSON.stringify(data);
    return(
        <div className="">
            <Scene data={data_string}></Scene>
        </div>
    );
}