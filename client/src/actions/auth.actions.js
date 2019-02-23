import axios from 'axios';
import jwtDecode from 'jwt-decode';
import types from '../modules/types';
import setAuthToken from '../utils/setAuthToken';

// Action to register a new user
const registerUser = (userData, history) => (dispatch) => {
  dispatch({
    type: types.CLEAR_ERRORS,
  });

  axios
    .post('/api/users/register', userData)
    .then(() => {
      history.push('/login');
    })
    .catch((error) => {
      dispatch({
        type: types.GET_ERRORS,
        payload: error.response.data,
      });
    });
};

const loginUser = userData => (dispatch) => {
  dispatch({
    type: types.CLEAR_ERRORS,
  });

  axios
    .post('/api/users/login', userData)
    .then((response) => {
      const { token } = response.data;

      localStorage.setItem('jwtToken', token);

      setAuthToken(token);

      const decoded = jwtDecode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch((error) => {
      dispatch({
        type: types.GET_ERRORS,
        payload: error.response.data,
      });
    });
};

const setCurrentUser = decoded => ({ type: types.SET_CURRENT_USER, payload: decoded });

const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

const testAction = () => {
  console.log('It Works');
};

export const authActions = {
  registerUser,
  loginUser,
  logoutUser,
  setCurrentUser,
  testAction,
};
