import { DogBreed } from "../interfaces";
import axios from "../utils/axiosConfig";

export const getDogBreedByName = async (name:string): Promise<DogBreed> => {
    const { data: breeds } = await axios.get(`/breeds/search?q=${name}`);
    return breeds[0]
};