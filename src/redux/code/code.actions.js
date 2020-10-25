import * as actionTypes from './code.action-types';

export const setCode = code => ({
  type: actionTypes.SET_CODE,
  payload: code
});