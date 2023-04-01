import { DogBreed } from "../interfaces";
import axios from "../utils/axiosConfig";

export const getDogBreeds = async (): Promise<DogBreed[]> => {
    const { data: breeds } = await axios.get(`/breeds`);
    return breeds
};