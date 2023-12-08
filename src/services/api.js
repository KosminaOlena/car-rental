import axios from "axios";

axios.defaults.baseURL = 'https://65707cf309586eff66417df5.mockapi.io';

export const fetchGetAdvert = async () => {
    const {data} = await axios.get('/adverts');
    return data;
}