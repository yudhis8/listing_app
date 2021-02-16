/**
 * @format
 * @flow
 */

import {
  POST_LOGIN_BEGIN,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
  POST_LOGOUT_BEGIN,
  POST_LOGOUT_SUCCESS,
  POST_LOGOUT_FAILURE,
  SET_IS_NEW,
  SET_TOKEN,
} from './constant';

const initialState = {
  token: '',
  isLoggedIn: false,
  loading: false,
  error: null,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      console.log('action', action);
      return {
        ...state,
        token: action.payload.token,
      };
    case POST_LOGIN_BEGIN:
      console.log('begin');
      return {
        ...state,
        loading: true,
        isLoggedIn: false,
        error: null,
      };

    case POST_LOGIN_SUCCESS:
      console.log('success');
      return {
        ...state,
        loading: false,
        data: action.payload,
        isLoggedIn: true,
        error: null,
      };

    case POST_LOGIN_FAILURE:
      console.log('fail');
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        error: action.payload.error,
      };

    case POST_LOGOUT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case POST_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        isNew: false,
        token: '',
        error: null,
      };

    case POST_LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
