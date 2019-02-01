import axios from 'axios';
import {SUB_REDDIT_URL} from '../constants/Constants';
export const getSubRedditInfo = (subRedditTerm, after) => {
  const url = SUB_REDDIT_URL + subRedditTerm + '.json' + (after ? '?after=' + after : '');
  return axios.get(url);
}
