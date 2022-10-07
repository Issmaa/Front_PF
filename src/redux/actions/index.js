import {
  GET_ALL_EXCURSION,
  GET_ALL_HOTEL,
  GET_PACK_BY_ID,
  USER_LOGIN,
  USER_LOGOUT,
} from "./actionsTypes";

import { GET_CURRENT_USER } from "./actionsTypes";
import data from "../../data.json";

const axios = require("axios");

export function getHotels() {
  return (dispatch) => {
    axios("http://localhost:5000/Hotel")
      .then((res) => dispatch({ type: GET_ALL_HOTEL, payload: res.data }))
      .catch((error) => console.log(error));
  };
}

export function getExcursiones() {
  return (dispatch) => {
    axios("http://localhost:5000/excursiones")
      .then((res) => dispatch({ type: GET_ALL_EXCURSION, payload: res.data }))
      .catch((error) => console.log(error));
  };
}

export const getCurrentUser = (obj) => (dispatch) => {
  return dispatch({ type: GET_CURRENT_USER, payload: obj });
};

export const getPackById = (paramId) => async (dispatch) => {
  let pack = await data.filter((pack) => pack.id === paramId);
  return dispatch({ type: GET_PACK_BY_ID, payload: pack });
};

export const userLogin = (obj) => async (dispatch) => {
  const login = await axios.post("http://localhost:5001/create/signup", obj);
  dispatch({ type: USER_LOGIN, payload: login });
};

export const userLogout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};
