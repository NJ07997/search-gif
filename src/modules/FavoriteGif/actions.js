import { ADD_FAVORITE_GIF, REMOVE_FAVORITE_GIF, VIEW_FAVORITES } from './types';

const addFavoriteGif = gif => {
  return {
    type: ADD_FAVORITE_GIF,
    payload: gif,
  };
};

const removeFavoriteGif = id => {
  return {
    type: REMOVE_FAVORITE_GIF,
    payload: id,
  };
};

const viewFavorites = () => {
  return {
    type: VIEW_FAVORITES,
  };
};

export {
  addFavoriteGif,
  removeFavoriteGif,
  viewFavorites,
};