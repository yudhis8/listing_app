/**
 * @format
 * @flow
 */

import {
  POST_LOGIN_BEGIN,
  POST_LOGOUT_REQUEST,
  POST_LOGOUT_SUCCESS,
  SET_IS_NEW,
  SET_TOKEN,
} from './constant';

export const postLoginRequest = (form) => ({
  type: POST_LOGIN_BEGIN,
  payload: {form},
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: {token},
});

export const postLogoutRequest = (token) => ({
  type: POST_LOGOUT_REQUEST,
  payload: {
    token,
  },
});

export const forceLogout = () => ({
  type: POST_LOGOUT_SUCCESS,
});
