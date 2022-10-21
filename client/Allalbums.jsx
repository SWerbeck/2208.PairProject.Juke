import React from 'react'
import SingleAlbum from './SingleAlbum';

const AllAlbums = (props) => {
  // has access to props.albums
return  (
<div id='albums' class='row wrap'>

  
  {props.albums.map(album => <SingleAlbum album={album}/>)}


</div>)

}


export default AllAlbums;