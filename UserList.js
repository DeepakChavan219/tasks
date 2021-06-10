import React, { useEffect, useState } from "react";
import MUIDatatable from "mui-datatables";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import reqres from "../../apiss/reqres";
const useStyles = makeStyles({
  icon: {
    cursor: "pointer",
  },
});

const UserList = () => {
  const history = useHistory();
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const handleClickOpen = (id) => {
    history.push(`/${id}`);
  };

  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "first_name",
      label: "Name",
      options: {
        filter: false,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          return users[dataIndex].first_name + " " + users[dataIndex].last_name;
        },
      },
    },

    {
      name: "email",
      label: "Email",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "action",
      label: "Action",
      options: {
        customBodyRenderLite: (dataIndex) => {
          return (
            <span
              className={classes.icon}
              onClick={() => handleClickOpen(users[dataIndex].id)}
            >
              <VisibilityIcon />
            </span>
          );
        },
      },
    },
  ];

  useEffect(() => {
    reqres
      .get("/users/")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <MUIDatatable title="User List" columns={columns} data={users} />
    </>
  );
};
export default UserList;
