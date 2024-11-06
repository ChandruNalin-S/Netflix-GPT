export const LOG_URL ="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR ="https://occ-0-3663-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABVC11njRAccYpkkyuBsUHtOOKYFGkwSR5W17rS9AcsA928D5_xgxoWHbUZESUThei8tFV3So6eTfjsvn0RRqN3kuxbq7KCI.png?r=59d";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/original";

export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg';


export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;// env is used for security propose,so other user cannot see important information or any api key etc. env is a "environment variable", and we have store the api key or any important info which is not visible by client, so we have to create folder ".env" and store the api key


export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer'+ process.env.REACT_APP_TMDB_KEY,
  }
};



export const SUPPORTED_LANGUAGE = [
  {
    identifier:"en",
    name:"English"
  },
  {
    identifier:"tamil",
    name:"Tamil"
  },
  {
    identifier:"spanish",
    name:"Spanish"
  }
];