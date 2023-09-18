import axios from "axios";

export const fetchAdverts = async () => {
    const BASE_URL = 'https://6488c9c60e2469c038fe5e0a.mockapi.io/adverts';
    // const params = new URLSearchParams({
    //     per_page: 8,
    //     page: number,
    // });
    return await axios.get(`${BASE_URL}`);
};

// export const fetchAdverts = async (number) => {
//     const BASE_URL = 'https://6488c9c60e2469c038fe5e0a.mockapi.io/adverts';
//     const params = new URLSearchParams({
//         per_page: 8,
//         page: number,
//     });
//     return await axios.get(`${BASE_URL}/?${params}`);
// };
