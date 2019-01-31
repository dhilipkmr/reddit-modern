import axios from 'axios';
import {SUB_REDDIT_URL} from '../constants/Constants';
export const getSubRedditInfo = (subRedditTerm) => {
  const url = SUB_REDDIT_URL + subRedditTerm + '.json';
  console.log(url);
  return axios.get(url);
}
