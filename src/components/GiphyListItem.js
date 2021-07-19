import React from 'react';
import './styles/GiphyListItem.css';

const GiphyListItem = (props) => {
  const gifImageInfo = props.gif.images.fixed_height;
  const onClick = (gif) => {
    if(props.isFav)
    {
      props.removeFav(gif.id);
    }
    else{
      props.addFav(gif);
    }
  };
  return (
    <div className="list_row">
      <div className="item">
        <img src={gifImageInfo.url} alt={gifImageInfo.slug} height={gifImageInfo.height}></img>
        <button className={props.isFav ? 'remove_from_button' : 'add_to_fav_button'} onClick={() => onClick(props.gif)} type="button" disabled={false}> {props.isFav ? 'Remove From Favorites' :'Add to Favorites'}</button>
      </div>
    </div>
  )
};

export default GiphyListItem