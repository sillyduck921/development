# Development

### Link to Deployed Website
`https://sillyduck921.github.io/development`

### Goal and Value of the Application

The goal of the application is to display products from a bakery in an organized way such that users (in this case,
bread and butter lovers) can effectively navigate the page to identify their favorite breads and butters. In particular, 
the application has two filter methods, one sort method, and a way to add/remove items from the list of favorite items. 
Users can choose if they want to see products based on type and sourcing, as well as order to items based on their popularity
or price. 

### Usability Principles Considered

Overall, I made choices related to the colors and text sizes across the page to ensure that users would be able to differentiate
different sections of the application. I aimed to have high contrast between the different elements by using dark text color and a light page background. I also made the titles/subtitles larger and more bold. Additionally, I implemented shadows and hover states on the buttons such that users would recognize that they are interactive elements. Moreover, for the filtering and sort buttons, I chose to use radio groups to indicate that the types within the groups are mutually exclusive and that the user should only be able to see one category at a time. 

### Organization of Components

I chose to organize the components using the template that was recommended (i.e. FilteredList.js and DisplayList.js). Additionally, I added
a few components of my own, such as ItemCard.js (individual item card) and FavoriteButton.js (button to go show the favorites list). App.js is the overarching component, and it also contains the original product list. FilteredList.js is called in App.js; DisplayList.js and FavoriteButton.js are called in FilteredList.js, and ItemCard.js is called in DisplayList.js. 

### How Data is Passed Down Through Components

The original product list is created in App.js and is passed as a prop to FilteredList.js. The filter states, sort states, total price of the favorites list, and the favorites list is stored in state in FilteredList.js. The filtered and sorted list is passed as a prop to DisplayList.js, and the individual items in that list are passed through ItemCard.js. To update the favorites list and total price states in FilteredList.js, functions are passed as props to DisplayList.js and ItemCard.js and called in ItemCard.js to add or remove the specific item to/from the favorites list.

### How the User Triggers State Changes

The user interacts with the filter and sort radio groups (i.e. presses the different options), the favorite button, and the Add/Remove to
favorites button to trigger state changes. The states are kept track of in FilteredList.js and changed in FilteredList.js for the filter/sort states and in ItemCard.js for the total price and favorites list states. 