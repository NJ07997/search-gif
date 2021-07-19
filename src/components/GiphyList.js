import React from 'react';
import { connect } from 'react-redux';
import GiphyListItem from './GiphyListItem';
import { addFavoriteGif, removeFavoriteGif, viewFavorites } from '../modules/FavoriteGif/actions';
import './styles/GiphyList.css';

const GiphyList = (props) => {
  const gifsToView = props.faveGif.isFavoritesView ? Object.values(props.faveGif.favoriteGifs) : props.gifs;
  const gifList = gifsToView.map((gif) =>
    <GiphyListItem gif={gif} key={gif.id} addFav={props.addFavoriteGif} removeFav={props.removeFavoriteGif} isFav={props.faveGif.favoriteGifs.hasOwnProperty(gif.id)}/>
  )

  return (
    <div>
      <div className="fav_button_div">
        <button className="fav_button" onClick={() => props.viewFavorites()} type="button" disabled={false}> {props.faveGif.isFavoritesView ? 'Back to Home' : 'View Favorite GIFs'}</button>
      </div> 
      <div className="result">
        <div className="list">
          {gifList}
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = ({ gif, faveGif }) => {
  return {
    gif,
    faveGif,
  };
};


const mapDispatchToProps = dispatch => {
  return {
    addFavoriteGif: gif => dispatch(addFavoriteGif(gif)),
    removeFavoriteGif: id => dispatch(removeFavoriteGif(id)),
    viewFavorites:() => dispatch(viewFavorites()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GiphyList);