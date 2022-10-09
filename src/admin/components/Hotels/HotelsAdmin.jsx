import React, { useState } from "react";
import s from "./HotelAdmin.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { adminGetAllHotels } from "../../redux/actions/index";
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
    dispatch(adminGetAllHotels());
  }, []);

  //YA TRAE LOS DATOS :) Att: Issmaa
  console.log(admin.adminAllHotels);

  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalDescription, setModalDescription] = useState(false);
  const handleModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  };

  const handleModalDescription = () => {
    setModalDescription(!modalDescription);
  };

  const closeModalDescription = () => {
    setModalDescription(false);
  };

  const openModalDescription = () => {
    setModalDescription(true);
  };

  return (
    <div className={s.container}>
      <div className={s.tableContainer}>
        <Button color="success" onClick={handleModalInsertar}>
          Create New Hotel
        </Button>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>CityCountry</th>
              <th>Email</th>
              <th>Services</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {admin.adminAllHotels?.map((el) => {
              return (
                <tr>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.phoneNumber}</td>
                  <td>{el.address}</td>
                  <td>{el.cityCountry}</td>
                  <td>{el.email}</td>
                  <td>{el.services}</td>
                  <td>
                    <Link onClick={handleModalDescription}>
                      See Description
                    </Link>
                  </td>
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
        {admin.adminAllHotels.length === 0 ? (
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

        <Modal isOpen={modalDescription}>
          <ModalHeader>
            <div>
              <h3>Description</h3>
            </div>
          </ModalHeader>

          <div>
            <h1>Description</h1>
          </div>
            <Button color="danger" onClick={handleModalDescription}>
              Cancelar
            </Button>
        </Modal>
      </div>
    </div>
  );
}
