import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'
import FlexRowContainer from './components/styled/FlexRowContainer';
import FlexColumnContainer from './components/styled/FlexColumnContainer';
import { SearchResults } from './components/SearchResults';
import { Playlist as PL } from './components/Playlist';
import Playlist from './types/Playlist';

function App() {
  const [tracks, setTracks] = useState([{ name: "Hello", artist: "Adele", album: undefined }, { name: "Fire", artist: "Adele", album: undefined }]);
  const [playlist, setPLaylist] = useState<Playlist>();

  return (
    <>
      <header><h1>Jammming</h1></header>
      <SearchBar></SearchBar>
      <FlexRowContainer>
        <FlexColumnContainer className='listContainer'>
          <SearchResults results={tracks} resultsCount={tracks.length}/>
        </FlexColumnContainer>
        <FlexColumnContainer className='listContainer'>
          <PL />
        </FlexColumnContainer>
      </FlexRowContainer>
    </>
  )
}

export default App
