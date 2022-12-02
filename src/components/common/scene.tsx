import React, { useState } from 'react';
import Dialog from './dialog';
import '../../style/chapter1/chapter1.css'
import Character from './character';

type Data = {
    data: string;
}

export const Scene = (props:Data) => {

    var datas = JSON.parse(props.data)

    const defaultCompt = 0
    const [compt, setCompt] = useState(defaultCompt);

    const [scene, setScene] = useState(datas[compt].scene);
    const [speaker, setSpeaker] = useState(datas[compt].speaker);
    const [dialog, setDialog] = useState(datas[compt].dialog);

    const handler = (e:any) => {
        if(compt >= datas.length - 1) {
            console.log("faux!")
            
        } else {
            setCompt(compt+1)
            setScene(datas[compt].scene)
            setSpeaker(datas[compt].speaker)
            setDialog(datas[compt].dialog)
        }
    }
   
    return(
        <div onClick={handler} className = {scene}>
            <Dialog speaker={speaker} paragraph={dialog}></Dialog>
            <Character img={speaker}></Character>

        </div>
    );
}

export default Scene;