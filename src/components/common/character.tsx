import React from 'react';
import '../../style/chapter1/character.css'

type char = {
    img: string
}

const Character =  (props:char) => {
    return (
        <div className='character'>
            <img src={"characters/" + props.img + ".png"}></img>
        </div>
    )
}

export default Character;