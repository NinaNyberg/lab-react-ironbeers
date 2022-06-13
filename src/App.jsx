import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import HomePage from './pages/HomePage';
import ListBeers from './pages/ListBeers';
import RandomBeer from './pages/RandomBeer';
import SingleBeer from './pages/SingleBeer';
import NewBeer from './pages/NewBeer';

function App() {
  const [allBeers, setAllBeers] = useState([]);

  // const filteredBeers = (str) => {
  //   setAllBeers(
  //     allBeers.filter((item) =>
  //       item.name.toLowerCase().includes(str.toLowerCase())
  //     )
  //   );
  // };

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setAllBeers(data);
      });
  }, []);

  const searchBeer = (query) => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setAllBeers(data);
      });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/beers"
            element={<ListBeers beers={allBeers} searchBeer={searchBeer} />}
          />
          <Route
            path="/random-beer"
            element={<RandomBeer beers={allBeers} />}
          />
          <Route path="/new-beer" element={<NewBeer />} />
          <Route
            path="/beers/:beerId"
            element={<SingleBeer beers={allBeers} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
