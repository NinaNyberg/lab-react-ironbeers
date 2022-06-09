import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const ListBeers = ({ beers }) => {
  return (
    <div>
      <Navbar />
      <h1>ListBeers</h1>

      {/* <div className="container">
        <div className="row"> */}
      {beers.map((beer) => (
        <Link
          to={`/beers/${beer._id}`}
          key={beer._id}
          style={{ textDecoration: 'none' }}
        >
          <div className="col-6">
            <img src={beer.image_url} alt="beer-pic" />
          </div>
          <div className="col-6">
            <h3>{beer.name}</h3>
            <h4>{beer.tagline}</h4>
            <small>{beer.contributed_by}</small>
          </div>
        </Link>
      ))}
    </div>
    //   </div>
    // </div>
  );
};

export default ListBeers;
