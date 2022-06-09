import React from 'react';
import { Link } from 'react-router-dom';
import allBeersImg from '../assets/beers.png';
import newBeerImg from '../assets/new-beer.png';
import randomBeerImg from '../assets/random-beer.png';

const HomePage = () => {
  return (
    <div>
      <Link to="/beers">
        <img src={allBeersImg} alt="allbeers" />
        <h1>All beers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia officia
          doloribus placeat totam. Magni corrupti, autem ea praesentium, esse
          soluta dolores ducimus at exercitationem reprehenderit fugiat
          molestias saepe ipsum iure!
        </p>
      </Link>
      <Link to="/random-beer">
        <img src={randomBeerImg} alt="randombeer" />
        <h1>Random beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia officia
          doloribus placeat totam. Magni corrupti, autem ea praesentium, esse
          soluta dolores ducimus at exercitationem reprehenderit fugiat
          molestias saepe ipsum iure!
        </p>
      </Link>
      <Link to="/new-beer">
        <img src={newBeerImg} alt="newbeer" />
        <h1>New beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia officia
          doloribus placeat totam. Magni corrupti, autem ea praesentium, esse
          soluta dolores ducimus at exercitationem reprehenderit fugiat
          molestias saepe ipsum iure!
        </p>
      </Link>
    </div>
  );
};

export default HomePage;
