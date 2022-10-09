import { ADMIN_GET_ALL_USERS, ADMIN_GET_ALL_HOTELS } from "./actionsTypes";

import axios from "axios";

export const adminGetAllCustomers = () => async (dispatch) => {
  const allCustomers = await axios.get("http://localhost:5000/user/Customer");
  return dispatch({
    type: ADMIN_GET_ALL_USERS,
    payload: allCustomers.data,
  });
};

export const adminGetAllHotels = () => async (dispatch) => {
  const allHotels = await axios.get("http://localhost:5000/hotel/Hotel");
  return dispatch({
    type: ADMIN_GET_ALL_HOTELS,
    payload: allHotels.data,
  });
};
