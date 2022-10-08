import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import s from "./UsersAdmin.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { adminGetAllCustomers } from "../../redux/actions";

export default function Users() {

  const dispatch = useDispatch();
  const adminAllUsers = useSelector((state) => state.adminAllUsers);

  const [users,setUsers] = useState([])

  
  useEffect(() => {
    dispatch(adminGetAllCustomers())
  },[])

  console.log(adminAllUsers)

  return (
    <div className={s.container}>
      <div className={s.tableContainer}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
