import {
    GET_RESERVATIONS,
    RESERVATION_ERROR,
    GET_RESERVATION,
    ADD_RESERVATION,
    DELETE_RESERVATION,
} from '../actions/types';

const initialState = {
    reservations: [],
    reservation: null,
    loading: true,
    error: {}
  };
  
  function reservationReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_RESERVATIONS:
        return {
          ...state,
          posts: payload,
          loading: false
        };
      case GET_RESERVATION:
        return {
          ...state,
          post: payload,
          loading: false
        };
      case ADD_RESERVATION:
        return {
          ...state,
          posts: [payload, ...state.posts],
          loading: false
        };
      case DELETE_RESERVATION:
        return {
          ...state,
          posts: state.posts.filter((post) => post._id !== payload),
          loading: false
        };
      case RESERVATION_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
    default: 
        return state;
    }
}
export default reservationReducer;