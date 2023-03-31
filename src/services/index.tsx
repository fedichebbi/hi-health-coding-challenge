import axios from "axios";

axios.defaults.baseURL = `${process?.env?.baseAPIURL}${process.env.basePath}`;

export const getDogBreeds = async (eventid: string): Promise<{ data: any }> => {
    const { data: filters } = await axios.get(`/filtercategory/getall/${eventid}`);
    return filters;
};