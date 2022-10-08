// import { ActionTypes } from "@mui/base";
import { ADMIN_GET_ALL_PACKS } from "../../admin/redux/actions/actionsTypes";

const initialState = {
  adminAllUsers: [],
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_GET_ALL_PACKS:
      return {
        ...state,
        adminAllUsers: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};