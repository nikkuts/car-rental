import axios from "axios";

export const fetchAdverts = async () => {
    const BASE_URL = 'https://6488c9c60e2469c038fe5e0a.mockapi.io/adverts';

    return await axios.get(`${BASE_URL}`);
};
