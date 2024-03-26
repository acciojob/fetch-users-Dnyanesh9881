import React, { useState } from "react";
import axios from "axios";
import "./../styles/App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    console.log("axios in");
    try {
      const res = await axios.get("https://reqres.in/api/users");
      console.log(res.data.data);
      setUsers(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <h3>Blue Whales</h3>
      <button className="btn" onClick={() => fetchUsers()}>
        Get User List
      </button>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.length !== 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <img src={user.avatar} alt={`${user.first_name} Avatar`} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data found to display</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
