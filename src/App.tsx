import { useState } from 'react'
import './App.css'
import { SearchBar } from './src/components/SearchBar'

function App() {
  const [tracks, setTracks] = useState([{name: "Hello", artist: "Adele", album: undefined}]);

  return (
    <>
      <header><h1>Jamming</h1></header>

      <SearchBar></SearchBar>
    </>
  )
}

export default App
