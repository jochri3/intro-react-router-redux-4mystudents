import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../redux/users/users.actions";

export default function(props) {
  const {
    match: {
      params: { slug }
    }
  } = props;
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.users);
  useEffect(() => {
    dispatch(fetchUser(slug));
  }, []);
  return (
    <>
      <h1>
        {user.fname} {user.lname}
      </h1>
      <p>Age : {user.age} </p>
    </>
  );
}
