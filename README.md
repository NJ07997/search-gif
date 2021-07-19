## GIPHY Search Engine

A Basic search engine to search GIFs from GIPHY api. You can select multiple GIFs and save them as favorites, which can be viewed in Favorites page.

## Folder Structure

```
search-gif/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    rootreducer.js
  src/components
    GiphyList.js
    GiphyListItem.js
    SearchBar.js
  src/components/styles
    GiphyList.css
    GiphyListItem.css
    SearchBar.css
  src/config
    configStore.js
  src/modules/FavoriteGif
    actions.js
    reducer.js
    types.js
```

## Available Scripts

In the project directory, you can run:

### `npm install`

Run this command to install the dependencies for the project.

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
