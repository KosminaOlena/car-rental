import axios from "axios";

// const url = new URL('https://65707cf309586eff66417df5.mockapi.io');
// url.searchParams.append('completed', false);
// url.searchParams.append('page', 1);
// url.searchParams.append('limit', 10);

axios.defaults.baseURL = 'https://65707cf309586eff66417df5.mockapi.io';

export const fetchGetAdvert = async () => {
    const {data} = await axios.get('/adverts?page=1&limit=12');
    return data;
}