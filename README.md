## Local Development

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Building

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## Components

### App
Main application container, nothing very interesting here

### ArrowBox
An implementation of a "tooltip style" box, positions itself relative to its parent and wraps whatever children are rendered inside it.

### Button
A simple button component, implements some basic styling, can be extended by passing in additional classes

### FilteringContainer
A state container for managing the state of applied filters

### FilterMenu
Component for the filter menu, manages state of currently opened category, selected filters.

### FilterCategory
Component for one category inside the filter menu

### MoreFiltersCategory
Component for the "More Filters" Category that is used only in mobile mode (when the screen is narrower than 720px). This component is somewhat similar to the FilterCategory component, one could argue that I should merge them for code reuse and and some kind of 'isMobile' flag. I decided however that they were different enough that merging them together would create a "frankenstein" component that is hard to reason about, so I opted to keep them seperate.

### FilterMenu
Component for the filter menu, manages state of currently opened category, selected filters.

### FilterStatus
Component for showing which filters are applied
