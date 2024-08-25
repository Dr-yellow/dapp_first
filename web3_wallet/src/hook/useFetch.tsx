import { useEffect, useState } from "react";
import { FetchParamsType } from '../utils/types';
const APIKEY = import.meta.env.VITE_GIPHY_APIKEY;


const pikaSweets = "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284"
const useFetch = ({ keyword }: FetchParamsType) => {
    const [gifUrl, setGifUrl] = useState<string>("");
    // const [error, setError] = useState<string | null>(null); // 新增错误状态


    const fetchGifs = async () => {
        try {

            const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword.split(" ").join("")}&limit=1&lang=zh-CN`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const { data } = await response.json();
            console.log('data--', data);
            const imageSource = data[0].images.downsized_medium.url;
            setGifUrl(imageSource);
            // setError(null);
        } catch (e: any) {
            setGifUrl(pikaSweets);
            // setError(e.message);
        }
    }

    useEffect(() => {
        // fetchGifs();
        let ignore = false;
        const debounceFetch =
            setTimeout(() => {
                if (!ignore) {
                    fetchGifs();
                }
            }, 500);

        return () => {
            ignore = true;
            clearTimeout(debounceFetch);
        }

    }, [keyword]);
    return gifUrl
}

export default useFetch;