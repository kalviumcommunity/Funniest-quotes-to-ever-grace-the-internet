import React, { useState } from 'react';
import axios from 'axios';

const AddAnimalSchool = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [animalInput, setAnimalInput] = useState('');
  const [animals, setAnimals] = useState([]);
  const [message, setMessage] = useState('');

  const handleAddAnimal = () => {
    if (animalInput.trim() !== '') {
      setAnimals([...animals, animalInput.trim()]);
      setAnimalInput('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get token from localStorage
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("You must be logged in to add a school.");
        return;
      }

      const response = await axios.post(
        'http://localhost:8080/animal-school',
        { name, location, animals },
        { headers: { Authorization: `Bearer ${token}` } }
        ,{ withCredentials: true }
      );

      setMessage(response.data.message);

      setName('');
      setLocation('');
      setAnimals([]);
    } catch (error) {
      console.error('Error:', error);
      setMessage(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div>
      <h2>Add Animal School</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="School Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <div>
          <input
            type="text"
            placeholder="Add Animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <button type="button" onClick={handleAddAnimal}>
            Add
          </button>
        </div>

        <ul>
          {animals.map((animal, idx) => (
            <li key={idx}>{animal}</li>
          ))}
        </ul>

        <button type="submit">
          Submit
        </button>

        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default AddAnimalSchool;
