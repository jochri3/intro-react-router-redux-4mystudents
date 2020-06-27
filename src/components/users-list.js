import React, { useEffect } from "react";
import { fetchUsers } from "../redux/users/users.actions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
export default function() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const { users } = useSelector(state => state.users);
  const usersList = users.length
    ? users.map(user => (
        <tr key={user.id}>
          <td>{user.fname}</td>
          <td>{user.lname}</td>
          <td>{user.age}</td>
          <td>
            <Link to={`/users/${user.slug}`}>Voir</Link>
          </td>
        </tr>
      ))
    : null;
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Age</th>
          <th>Action(s)</th>
        </tr>
      </thead>
      <tbody>{usersList}</tbody>
    </table>
  );
}
