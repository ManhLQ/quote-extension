import axios from 'axios';
import { BASEURL, API } from './api';
const client = axios.create({
  baseURL: BASEURL
});

export const randomQuote = async () => {
  return await client.get(API.random).then(response => response.data).catch(e => console.log(`Request error ${e}`));
}

