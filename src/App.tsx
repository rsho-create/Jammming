import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'
import { Song } from './components/Song';

function App() {
  const [tracks, setTracks] = useState([{ name: "Hello", artist: "Adele", album: undefined }, { name: "Fire", artist: "Adele", album: undefined }]);
  const [playlist, setPLaylist] = useState();
  const trackList = tracks.map((track) => {
    return <Song song={track} />
  })
  return (
    <>
      <header><h1>Jamming</h1></header>

      <SearchBar></SearchBar>
      <div>
        {trackList}
      </div>
    </>
  )
}

export default App
