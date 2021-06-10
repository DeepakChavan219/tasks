import React from "react";
import { Route, Switch } from "react-router-dom";
import UserDetails from "./user-details/UserDetails";
import UserList from "./user-list/UserList";
const User = () => {
  return (
    <>
      {/* <UserList /> */}
      <Switch>
        <Route path="/:id">
          <UserDetails />
        </Route>
        <Route path="/">
          <UserList />
        </Route>
      </Switch>
    </>
  );
};

export default User;
