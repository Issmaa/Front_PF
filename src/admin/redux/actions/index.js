import { ADMIN_GET_ALL_PACKS } from "./actionsTypes";

import axios from "axios";

export const adminGetAllCustomers = () => async (dispatch) => {
  const allCustomers = await axios.get("http://localhost:5000/user/Customer");
  return dispatch({
    type: ADMIN_GET_ALL_PACKS,
    payload: allCustomers.data,
  });
};
