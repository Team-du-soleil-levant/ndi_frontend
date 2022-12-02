import {Configuration, OpenAIApi} from "openai";

export const imageGenerator = async (prompt:string) => {
    try {
        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY
        });

        const openai = new OpenAIApi(configuration);

        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        });

        return response.data.data[0].url;
    } catch (e) {
        console.log(JSON.stringify(e));
    }
}
