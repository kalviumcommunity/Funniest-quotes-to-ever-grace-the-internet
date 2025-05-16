import React, { useState } from 'react';
import axios from "axios";

const AnimalSchoolCard = ({ animalSchool, getSchoolData }) => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(animalSchool.name);
  const [location, setLocation] = useState(animalSchool.location);
  const [animals, setAnimals] = useState(animalSchool.animals || []);

  const handleAnimalChange = (idx, value) => {
    const updatedAnimals = [...animals];
    updatedAnimals[idx] = value;
    setAnimals(updatedAnimals);
  };

  const handleSubmit = async () => {
    if (!name.trim() || !location.trim() || animals.some(animal => !animal.trim())) {
      alert("All fields, including each animal name, are required.");
      return;
    }

    try {
      await axios.put(`${import.meta.env.BASE_URL}/animal-school/${animalSchool._id}`, {
        name: name.trim(),
        location: location.trim(),
        animals: animals.map(a => a.trim())
      },{ withCredentials: true });

      alert("Updated successfully");
      getSchoolData();
      setEditMode(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong while updating");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this school?")) return;

    try {
      await axios.delete(`http://localhost:8080/animal-school/${animalSchool._id}`,{ withCredentials: true });
      alert("Deleted successfully");
      getSchoolData();
    } catch (error) {
      console.error(error);
      alert("Something went wrong while deleting");
    }
  };

  return (
    <div
      style={{
        padding: "0.5rem",
        borderRadius: "0.5rem",
        border: "1px solid",
        marginBottom: "1rem"
      }}
    >
      {
        editMode ? (
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="School Name"
          />
        ) : (
          <h2>{name}</h2>
        )
      }

      <p>
        <span style={{ fontWeight: "800" }}>Location: </span>
        {
          editMode ? (
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
            />
          ) : (
            location
          )
        }
      </p>

      <div
        style={{
          padding: "0.5rem",
          borderRadius: "0.5rem",
          border: "1px solid",
          marginBottom: "1rem",
          width: "max-content",
          margin: "auto"
        }}
      >
        <h3>List Of Animals in School</h3>
        {
          animals.map((animal, idx) => (
            <p key={`animal-${idx}`}>
              {
                editMode ? (
                  <input
                    value={animal}
                    onChange={(e) => handleAnimalChange(idx, e.target.value)}
                    placeholder={`Animal ${idx + 1}`}
                  />
                ) : (
                  animal
                )
              }
            </p>
          ))
        }
      </div>

      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
        {
          editMode ? (
            <button onClick={handleSubmit}>Submit</button>
          ) : (
            <button onClick={() => setEditMode(true)}>Edit</button>
          )
        }
        <button onClick={handleDelete} style={{ backgroundColor: "red", color: "white" }}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AnimalSchoolCard;
