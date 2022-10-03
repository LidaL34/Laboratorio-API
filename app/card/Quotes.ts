import { Characters } from "../type/index";

export const getQuotes = async (): Promise<Array<Characters>> => {

    const response = await fetch("https://orange-api.herokuapp.com/category/inmate");
    
    const data = await response.json();
    console.log (data);
    return data;
}