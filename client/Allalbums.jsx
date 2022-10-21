import React from 'react'


const AllAlbums = (props) => {

return  (
<div id='albums' class='row wrap'>
{/*   {
    "id": 1,
    "name": "No Dummy",
    "artworkUrl": "default-album.jpg",
    "artistId": 1,
    "artist": {
      "id": 1,
      "name": "The Crash Test Dummies"
    }
  }, */}
<div class='album'>
  <a>
    <img src={props.albums[0].artworkUrl} />
    <p>{props.albums[0].name}</p>
    <small>{props.albums[0].artist.name}</small>
  </a>
</div>
<div class='album'>
  <a>
    <img src='default-album.jpg' />
    <p>{props.albums[1].name}</p>
    <small>{props.albums[1].artist.name}</small>
  </a>
</div>
</div>)

}


export default AllAlbums