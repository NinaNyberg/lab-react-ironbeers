import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SingleBeer = ({ beers }) => {
  const { beerId } = useParams();
  // const [singleBeer, setSingleBeer] = useState(null);

  console.log(beerId);

  // useEffect(() => {
  //   axios
  //     .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
  //     .then((response) => response.data)
  //     .then((data) => setSingleBeer(data));
  // }, [beerId]);

  // console.log(singleBeer);
  // useEffect(() => {
  const singleBeer = beers.find((item) => item._id === beerId);
  //   setSingleBeer(beer);
  // }, [beers, beerId]);

  console.log(singleBeer);

  return (
    <div>
      <Navbar />
      <h1>SingleBeer</h1>
      {singleBeer ? (
        <>
          <h1>{singleBeer.name}</h1>
          <img src={singleBeer.image_url} alt="beer-pic" />

          <h3>{singleBeer.name}</h3>
          <h4>{singleBeer.tagline}</h4>
          <p>{singleBeer.first_brewed}</p>
          <p>{singleBeer.attenuation_level}</p>
          <p>{singleBeer.description}</p>
          <small>{singleBeer.contributed_by}</small>
        </>
      ) : (
        'No beer found'
      )}
    </div>
  );
};

export default SingleBeer;
