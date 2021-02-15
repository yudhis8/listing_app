/**
 * @format
 * @flow
 */

import {
  POST_LOGIN_BEGIN,
  POST_LOGOUT_REQUEST,
  POST_LOGOUT_SUCCESS,
  SET_IS_NEW,
} from './constant';

export const postLoginRequest = form => ({
  type: POST_LOGIN_BEGIN,
  payload: {form},
});

export const postLogoutRequest = token => ({
  type: POST_LOGOUT_REQUEST,
  payload: {
    token,
  },
});

export const forceLogout = () => ({
  type: POST_LOGOUT_SUCCESS,
});
