import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RandomBeer = ({ beers }) => {
  const randBeerNum = Math.floor(Math.random() * beers.length);

  console.log(randBeerNum);

  const randBeer = beers[randBeerNum];

  return (
    <div>
      <Navbar />
      <h1>RandomBeer</h1>
      {randBeer && (
        <>
          <h1>{randBeer.name}</h1>
          <img src={randBeer.image_url} alt="beer-pic" />

          <h3>{randBeer.name}</h3>
          <h4>{randBeer.tagline}</h4>
          <p>{randBeer.first_brewed}</p>
          <p>{randBeer.attenuation_level}</p>
          <p>{randBeer.description}</p>
          <small>{randBeer.contributed_by}</small>
        </>
      )}
    </div>
  );
};

export default RandomBeer;
