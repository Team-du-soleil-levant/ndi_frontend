import {Configuration, OpenAIApi} from "openai";
import {stringify} from "querystring";

/*
const imageGenerator = new Promise<string>(async (resolve, reject) => {
    setTimeout( async () => {
        const {Configuration, OpenAIApi} = require("openai");
        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        }, 100000);
        const openai = new OpenAIApi(configuration);
        const response = await openai.createImage({
            prompt: "a meincoon cat",
            n: 1,
            size: "1024x1024",
        });
        resolve(response.data.data[0].url);
    },)
    reject("C:\\Users\\basil\\IdeaProjects\\ndi_frontend\\public\\logo192.png");

});

 */

export async function imageGenerator() {
    try {
        const {Configuration, OpenAIApi} = require("openai");
        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        }, 100000);
        const openai = new OpenAIApi(configuration);
        await openai.createImage({
            prompt: "a meincoon cat",
            n: 1,
            size: "1024x1024",
        }).then((response:any):string => {
            console.log(JSON.stringify(response.data.data[0].url));
            const imgUrl = JSON.stringify(response.data.data[0].url);
            return imgUrl;
        });
    } catch (e) {
        console.log(JSON.stringify(e));
        return "https://m.media-amazon.com/images/I/51dDxmL4yIL._AC_.jpg";
    }
}



export const getImages = ()=> {
    let image = "";
    const imageGen = imageGenerator();
    imageGen.then((value) => {
        image = value;
    });
    console.log(image);
    return image;
}
