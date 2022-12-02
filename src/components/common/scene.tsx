import React, { useEffect, useState } from 'react';
import Dialog from './dialog';
import data from '../../data/chapter1/dialog.json';
import '../../style/chapter1/chapter1.css'
import Character from './character';


export const Scene = () => {

    var datas = JSON.parse(JSON.stringify(data))

    const defaultCompt = 0
    const [compt, setCompt] = useState(defaultCompt);

    const [scene, setScene] = useState(datas[compt].scene);
    const [speaker, setSpeaker] = useState(datas[compt].speaker);
    const [dialog, setDialog] = useState(datas[compt].dialog);

    

    useEffect(()=>{

    }, [])

    const handler = (e:any) =>{
        setCompt(compt+1)
        setScene(datas[compt].scene)
        setSpeaker(datas[compt].speaker)
        setDialog(datas[compt].dialog)
    }
   
    return(
        <div onClick={handler} className = {scene}>
            <Dialog speaker={speaker} paragraph={dialog}></Dialog>
            <Character img={speaker}></Character>

        </div>
    );
}

export default Scene;