import React, {useEffect, useState} from "react";
import {Dimmer, Loader} from "semantic-ui-react";
import {imageGenerator} from "../../data/ImageGenerator";

type GeneratedImageProps = {
    prompt: string
}

export const GeneratedImage = ({prompt}:GeneratedImageProps) => {
    const [image, setApiImage] = useState("");
    const [imageLoading, setImageLoading] = useState(true)


    useEffect(() => {
        imageGenerator(prompt).then(imageUrl => {
                if (imageUrl !== undefined) {
                    setApiImage(imageUrl);
                    setImageLoading(false);
                }
            }
        );
    }, [prompt])

    return (
        <>
            {imageLoading ?
                <Dimmer active>
                    <Loader>Loading</Loader>
                </Dimmer> :
                <img src={image} alt="OpenAI generated"/>}
        </>

    )

}


