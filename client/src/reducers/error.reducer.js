import types from "../modules/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_ERRORS:
      return action.payload;

    case types.CLEAR_ERRORS:
      return {};

    default:
      return state;
  }
}
