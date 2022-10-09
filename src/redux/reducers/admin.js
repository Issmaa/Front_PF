// import { ActionTypes } from "@mui/base";
import {
  ADMIN_GET_ALL_USERS,
  ADMIN_GET_ALL_HOTELS,
} from "../../admin/redux/actions/actionsTypes";

const initialState = {
  adminAllUsers: [],
  adminAllHotels: [],
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_GET_ALL_USERS:
      return {
        ...state,
        adminAllUsers: action.payload,
      };
    case ADMIN_GET_ALL_HOTELS:
      return {
        ...state,
        adminAllHotels: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
