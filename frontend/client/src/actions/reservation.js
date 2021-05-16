import api from '../utils/api';
import { setAlert } from './alert';
import {
    GET_RESERVATIONS,
    RESERVATION_ERROR,
    ADD_RESERVATION,
    DELETE_RESERVATION,
    GET_RESERVATION
} from './types';

// Get reservations
export const getReservations = () => async dispatch => {
    try {
      const res = await api.get('/reservations');
  
      dispatch({
        type: GET_RESERVATIONS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  
  // Add reservation
export const addReservation = formData => async dispatch => {
    try {
      const res = await api.post('/reservations', formData);
  
      dispatch({
        type: ADD_RESERVATION,
        payload: res.data
      });
  
      dispatch(setAlert('Reservation Created', 'success'));
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

  // Delete reservation
export const deleteReservation = id => async dispatch => {
    try {
      await api.delete(`/reservations/${id}`);
  
      dispatch({
        type: DELETE_POST,
        payload: id
      });
  
      dispatch(setAlert('Reservation Removed', 'success'));
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

  // Get reservation
export const getReservation = id => async dispatch => {
    try {
      const res = await api.get(`/reservations/${id}`);
  
      dispatch({
        type: GET_RESERVATION,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };