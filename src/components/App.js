
import React from "react";
import './../styles/App.css';

const App = () => {
const [users, setUsers]=useState([]);


   async function fetchUsers(){
       try {
        const res= await axios.get("https://reqres.in/api/users");
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
        <button className="btn" onClick={fetchUsers}>Get User List</button>
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Eamil</th>
            <th>Avatar</th>
          </tr>
          { users.length!==0 ? users.map(user=>
          `<tr>
          <td>${user.first_name}</td>
          <td>${user.last_name}</td>
          <td>${user.eamil}</td>
          <td>${user.avatar}</td>
           </tr>`
          ): <p>No data found to display</p>
              
          }
        </table>

    </div>
  )
}

export default App
