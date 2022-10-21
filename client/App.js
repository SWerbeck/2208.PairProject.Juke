import React, { useEffect, useState } from 'react';

// 
import AllAlbums from './Allalbums';
import Sidebar from './Sidebar';
import Player from './Player';

const dummyData = [
  {
    "id": 1,
    "name": "No Dummy",
    "artworkUrl": "default-album.jpg",
    "artistId": 1,
    "artist": {
      "id": 1,
      "name": "The Crash Test Dummies"
    }
  },
  {
    "id": 2,
    "name": "I React to State",
    "artworkUrl": "default-album.jpg",
    "artistId": 1,
    "artist": {
      "id": 1,
      "name": "The Crash Test Dummies"
    }
  }
];

const App = () => {

  // State for albums
  const [albums, setAlbums] = useState([...dummyData]);


  ////// API GETTER
	// A function that fetches contact data from API  
  const getAlbums = async() => {
    // Make fetch request from url:
    const response = await fetch (
      'http://localhost:8080/api/albums'
    )
     const json = await response.json()
    // use setAlbums(that-variable)
    setAlbums(json)
  }

  useEffect( () => {
    getAlbums();
  }, [])

  return (
    <div className='row container'>
      {/* The music starts here! */}
      <h1>Hello world!</h1>
      {/* Component for Sidebar */}
      <Sidebar />
     <div className="container"> <AllAlbums albums={albums}/> </div>
     <Player />
    </div>
  );
};

export default App;