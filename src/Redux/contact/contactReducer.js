import { UPDATE_CONTACT, GET_CONTACT, GET_CONTACTS } from "./contactTypes";

const initialState = {
  contacts: [],
  contact: undefined,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS: {
      return {
        ...state,
        contacts: action.payload,
      };
    }
    case GET_CONTACT: {
      return {
        ...state,
        contact: action.payload,
      };
    }
    default:
      return state;
  }
};

export default contactReducer;
