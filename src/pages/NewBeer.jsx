import React from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewBeer = () => {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenLevel, setAttenLevel] = useState(0);
  const [contributor, setContributor] = useState('');

  const handleNameInput = (e) => setName(e.target.value);
  const handleTaglineInput = (e) => setTagline(e.target.value);
  const handleDescriptionInput = (e) => setDescription(e.target.value);
  const handleFirstBrewedInput = (e) => setFirstBrewed(e.target.value);
  const handleBrewerTipsInput = (e) => setBrewersTips(e.target.value);
  const handleAttenLevelInput = (e) => setAttenLevel(e.target.value);
  const handleContributorInput = (e) => setContributor(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenLevel,
      contributor
    };

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newItem)
      .then(() => {
        console.log('New beer added!');
        navigate('/beers');

        setName('');
        setTagline('');
        setDescription('');
        setFirstBrewed('');
        setBrewersTips('');
        setAttenLevel(0);
        setContributor('');
      });
  };

  return (
    <div>
      <Navbar />
      <h1>New beer!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameInput}
          />
        </label>

        <label>
          Tagline:
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={handleTaglineInput}
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleDescriptionInput}
          />
        </label>

        <label>
          First brewed:
          <input
            type="text"
            name="firstbrewed"
            value={firstBrewed}
            onChange={handleFirstBrewedInput}
          />
        </label>

        <label>
          Brewers tips:
          <input
            type="text"
            name="brewertips"
            value={brewersTips}
            onChange={handleBrewerTipsInput}
          />
        </label>

        <label>
          Attenuation level:
          <input
            type="number"
            // min={0}
            name="attenuationlevel"
            value={attenLevel}
            onChange={handleAttenLevelInput}
          />
        </label>

        <label>
          Contributed by:
          <input
            type="text"
            name="contributedby"
            value={contributor}
            onChange={handleContributorInput}
          />
        </label>

        <button type="submit">Add new</button>
      </form>
    </div>
  );
};

export default NewBeer;
