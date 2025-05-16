import React, { useState, useEffect } from "react";
import AnimalSchoolCard from './components/AnimalSchoolCard';
import axios from "axios";

const Homepage = () => {
  const [school, setSchool] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/animal-school/users",{ withCredentials: true })
      .then(res => setUsers(res.data))
      .catch(() => setUsers([]));
  }, []);

  useEffect(() => {
    if (selectedUser) {
      axios.get(`http://localhost:8080/animal-school/by-user/${selectedUser}`,{ withCredentials: true })
        .then(res => setSchool(res.data))
        .catch(() => setSchool([]));
    } else {
      axios.get("http://localhost:8080/animal-school",{ withCredentials: true })
        .then(res => setSchool(res.data))
        .catch(() => setSchool([]));
    }
  }, [selectedUser]);

  return (
    <div>
      <h1>List Of Animals School</h1>
      <div>
        <label>Select User: </label>
        <select value={selectedUser} onChange={e => setSelectedUser(e.target.value)}>
          <option value="">All Users</option>
          {users.map(u => (
            <option key={u._id} value={u._id}>{u.name}</option>
          ))}
        </select>
      </div>
      {school.map(animalSchool => (
        <AnimalSchoolCard key={animalSchool._id} animalSchool={animalSchool} />
      ))}
    </div>
  );
};

export default Homepage;