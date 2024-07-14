# EX1 - React

1. Create 2 components in the same page App.tx
2. `<WhatsYourName />` - will present your name
3. `<HowDoILookLike/>` - will show an image from web

# EX2 -

1. split your components to DIFF files under components folder
2. each component will have her own folder + tsx file.

# EX3 -

1. Add iD + type to each joke in the UI

# Homework 3.7

- following our React Lesson, Create a `CountriesPage` Component
- the page will show a list of all countries - image+country name
- use import static json file with the data ( copy paste the data into `countries.json` file)
- create a `SingleCountryCard` which recieve the relevant props and present the data

# Ex 1 - 7.6

- Move all inline CSS from react-103/my-first-react-client/src/components/jokes/single-joke.tsx to
  `singleJoke.module.css` file

# Ex 2 - 7.6

- Setting the color of the h1 in the main page, to be part of the style

# Ex 3 - 7.6

- Implement "You Like This" functionality in Single Joke Component, in case the user clicks the button "Like" he will see the Text "You Like This", in case the user will click again text will be hidden - toggle!

# Ex 4 - 7.6

- Single joke component - Dont show the punch line! if the user click on button "Show my punchline"
- so show the user the punch line, and hide the button, default punch like is hidden

# Ex 5 - 7.6

- implement another filter `<button>Show Only long punchline (more than 10 characters) </button>`
- when clicking on the button the list will present only the jokes with long punchline












# Homework

## based on In the countries solution - continue to last homework

1. implement search filter by country name
2. implement visit button in each country - when clicking on the `visit` the AddComment component will presented
3. implement country AddComment functionality by adding a comment to each country
4. implement filter - filter all the countries that are more than 10M population count.



# Ex - 1 10.7 
1. implement API request using useEffect hook for countries api
# Ex - 2 10.7 
2. searching country by name- implement API request on each input text change, using useEffect dependency array


# Homework 10.7
1. Go over the last lesson and learn what we did deeply!
2. Read about useEffect cleanup in google, try to understand when we need to use it. https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/
3. read about react router dom  https://reactrouter.com/en/main



# Ex - 1 14.7
- support Delete movie from favorite!

# Ex - 2 14.7
- Add new Route to your application
- Route name will be - Products
- Add navigation from all routes to Products and from products to the rest of the routes

# Homework - 14.7 
1. Refactor the Movies Application (my-first-react-client) to work with Routing.
2. Pages: MoviesPage, CountriesPage, use the main navigation for routing - Links ( combine between homework and class project) 
3. try to create MoviePage - SINGLE MOVIE PAGE, when clicking on the "Go to Movie page" on each card the application will navigate to new page with the movie Id and request - hint: the movie id should be in the query param `/movie/id1234`



