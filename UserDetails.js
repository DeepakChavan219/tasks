import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const UserDetails = () => {
  const { id } = useParams();
  const [user, setuser] = useState({});

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/" + id)
      .then((response) => {
        setuser(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h2>ID: {user.id}</h2>
      <h4> first_name: {user.first_name}</h4>
      <h4> last_name: {user.last_name}</h4>
      <h4> Email: {user.email}</h4>
      <img src={user.avatar} />
    </>
  );
};

export default UserDetails;
