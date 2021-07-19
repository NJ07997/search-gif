import favoriteGifReducer from './modules/FavoriteGif/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  faveGif: favoriteGifReducer,
});