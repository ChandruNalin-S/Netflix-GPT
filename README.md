# Netflix GPT
  - Install create-react-app into our application.
  - Install tailwindCSS and config into our application.
  - created routing of app
  - created header
  - created Sign In form
  - Form validation
  - useRef hook
  - FireBase setup and it is backend which is given by google for authentication, because without backend or database we cannot proceed authentication, that's why we are using firebase , it will automatically create backend for us.
  
  - deploy our app in production using firebase.
  - created sign in and sign up authentication using API by firebase.
  - created reduxStore to store user object in userslice(slice) for navigate in browse page.
  - implement sign-out
  - update profile picture when user is sign-in.
  - instead of using netlfix api, we are going to use tmdb api, it is movie database. to give all the latest movie data.

  - bigfix: we fix the bug in sign-in/up and browse, how? through the user object only they can navigate from sign-in/up to browse and when the user object present in store then he cannot redirect to login page without signout the user. 
  - unsubscribed to the onAuthStateChanged callback.
  - Add hardcoded values or data into one file (constants.js).
  - Register in TMDB for getting access token and API.
  - Get data from tmdb using api call of getnowplayingmovielist.
  - planning for building browse page, divided into two part 1-> main container(contains of video title and video background) and 2-> secondary container.
  - create slices of movie and trailer in appstore.
  - created custom hook for getting api of nowPlaying movie and trailer.
  - store the data of nowPlaying movie and trailer in appstore (movieSlice)
  - create videobackground with autoPlay and video title.
  - Embedded video from youtube to display in video background.
  - created custom hook to get movie data and add tailwind css in browse page.
  - displaying the movies list.
  - created GPT_PAGE inside we created GPT-Search bar and add tailwind css 
  - add additional feature in gpt-search-page called language translation
  - gptSlice in store
  - due some we cannot get gpt movie from api 
  - memoization (to optmize the api call and data)
  - make our site/app responsive in desktop and mobile
  - we store api key in .env file and push into gitignore


# Features
- Login/Sign Up
  - Sign In/Sign up form
  - redirect to browse page

- Browse (after authentication)
  - Header
  - Main movie
      - Trailer in Background
      - Title & Description
      - MovieSuggestions
          MovieLists * N (number of Movies).

- NetflixGPT
  - Search Bar
  - Movie Suggestions.


# important: when we have lot of field in our form, then we can use some library called "formik", it is a external library to create big form and add lot of field, manage the form easily.