// export const getAccessToken = () => {
//     return sessionStorage.getItem("accessToken");
// }

// export const addElipsis = (str, limit) => {
//     return str.length>limit? str.substring(0,limit) + "..." : str
// }

// export const getType = (value, body) => {
//     if (value.params){
//         return {params: body}
//     } else if (value.query) {
//         if (typeof body === "object") {
//             return { query: body._id}
//         } else {
//             return { query: body}
//         }
//     }
//     return {}
// } 

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com/',  // Unsplash API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;