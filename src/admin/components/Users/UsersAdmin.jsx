import React, { useState } from "react";
import s from "./UsersAdmin.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { adminGetAllCustomers } from "../../redux/actions/index";
import {
  Table,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

export default function Users() {
  const dispatch = useDispatch();
  // TE DEBES DE TRAER EL ESTADO DEL COMBINEREDUCER EN EL ARCHIVO redux/reducers/index.js
  const admin = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(adminGetAllCustomers());
  }, []);

  //YA TRAE LOS DATOS :) Att: Issmaa
  console.log(admin.adminAllUsers);

  const [modalInsertar, setModalInsertar] = useState(false);

  const handleModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  };

  return (
    <div className={s.container}>
      <div className={s.tableContainer}>
        <Button color="success" onClick={handleModalInsertar}>
          Create New User
        </Button>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Identification</th>
              <th>Birthday</th>
              <th>Card Number</th>
              <th>Phone Number</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {admin.adminAllUsers?.map((el) => {
              return (
                <tr>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                  <td>{el.identification}</td>
                  <td>{el.birthday}</td>
                  <td>{el.numberCard}</td>
                  <td>{el.phoneNumber}</td>
                  <td>
                    <Button color="primary">Edit</Button>
                    {"  "}
                    <Button color="danger">Remove</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {admin.adminAllUsers.length === 0 ? (
          <div className={s.ldsEllipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : null}

        <Modal isOpen={modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Insertar Registro</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <label>Id:</label>
            <input
              type="text"
              className="form-control"
              readOnly
              value={admin.adminAllUsers.length + 1}
            />
          </ModalBody>

          <FormGroup>
            <label>Personaje:</label>
            <input type="text" name="personaje" className="form-control" />
          </FormGroup>

          <FormGroup>
            <label>Anime:</label>
            <input type="text" name="anime" className="form-control" />
          </FormGroup>

          <ModalFooter>
            <Button color="primary">Insertar</Button>
            <Button color="danger" onClick={handleModalInsertar}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
