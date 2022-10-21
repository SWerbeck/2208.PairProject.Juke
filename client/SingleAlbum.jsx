import React from 'react';

const SingleAlbum = (props) => {
  //props.album <-- an element in our album array/state
  // const album = {name: '', yearOfRelease: '',}
  return (
  <div class='album'>
    <a>
      <img src={props.album.artworkUrl} />
      <p>{props.album.name}</p>
      <small>{props.album.artist.name}</small>
    </a>
  </div>)
}

export default SingleAlbum;