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