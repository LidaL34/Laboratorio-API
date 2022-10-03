import { Characters } from "../type/index";

export const getQuotes = async (): Promise<Array<Characters>> => {

    const response = await fetch("https://strangerthings-quotes.vercel.app/api/quotes/5");
    const data = await response.json();
    console.log (data.results);
    return data.results;
}