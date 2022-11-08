import axios from 'axios';
import { useState, useEffect } from 'react'
import LocationInfo from './components/LocationInfo';
import './App.css'
import ResidentInfo from './components/ResidentInfo';

function App() {
  const [rickLocation, setRickLocation] = useState({});

  const [searchLocation, setSearchLocation] = useState("")

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126)
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}/`)
      .then(res => setRickLocation(res.data))
  }, []);

  const searchType = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${searchLocation < 127 ? searchLocation : alert('Not exist id')}/`)
      .then(res => setRickLocation(res.data));
  }


  console.log(rickLocation)

  return (
    <div className="App">
      <div className="background-title">
        <div className="title">Rick<span>and</span>Morty</div>
        <div className="title title-middle"> Rick<span>and</span>Morty</div>
        <div className="title title-bottom">Rick<span>and</span>Morty</div>
      </div>
      <div className="title-divider"></div>
      <div className="search">
        <input  id="search" type="text"
          value={searchLocation}
          onChange={e => setSearchLocation(e.target.value)} />
        <button onClick={searchType}> Search </button>
      </div>

      <LocationInfo rickLocation={rickLocation} />
      <div className="container">
        {
          rickLocation.residents?.map(url => (
            //<li key= {location}>{location}</li>
            <ResidentInfo
              url={url}
              key={url} />
          ))}
      </div>
    </div>
  )
}

export default App
