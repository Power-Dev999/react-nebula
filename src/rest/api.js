import axios from './http-common';

/************************* user index image upload *************************/
export const memberAdd = async (email) => {
  return await axios.get(`memberAdd?email=${email}`, {})
    .then(data => data.data)
    .catch(error => { throw error.response.data });
};