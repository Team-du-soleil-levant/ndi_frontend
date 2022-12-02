import React, {useState} from "react";
//import {getImages} from "../data/ImageGenerator";
import {imageGenerator} from "../data/ImageGenerator";

export const AfficherTest = () => {
    const imgDefault = "https://m.media-amazon.com/images/I/51dDxmL4yIL._AC_.jpg";
    const [image, setApiImage] = useState(imgDefault);
    const image2 = imageGenerator();

    console.log(image2);


    return (
        <div className="App">
            <header className="App-header"/>
            <img src={image} alt="oui"/>



        </div>

    )

}


