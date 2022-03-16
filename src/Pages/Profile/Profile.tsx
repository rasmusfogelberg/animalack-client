import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { Pet, User, userService } from "../../services/user.service";

function Profile() {
  const [pets, setPets] = useState<Pet[]>();
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!pets) {
      userService.getUserPets(auth.user.id).then((user) => {
        setPets(user?.pets);
      });
    }
  }, [pets]);

  return (
    <div className="Profile">
      <h2>
        Hi {auth.user.firstName} {auth.user.lastName}
      </h2>
      <>
        <code>
          <pre>{JSON.stringify(auth.user)}</pre>
        </code>
      </>

      <button
        onClick={() => {
          auth.logout(() => navigate("/"));
        }}
      >
        Log out
      </button>

      <h3>My pets</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Breed</th>
            <th>Gender</th>
            <th>Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pets &&
            pets.length > 0 &&
            pets.map(({ id, name, breed, gender, color }) => (
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{breed}</td>
                <td>{gender}</td>
                <td>{color}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Profile;