import { expect } from 'chai';
import * as actionTypes from './code.action-types';

import codeReducer from './code.reducer';

describe('Code Reducer', () => {
  it('Returns a state object', () => {
    const result = codeReducer(undefined, { type: 'TYPE', payload: 'PAYLOAD' });
    expect(result).is.not.undefined;
  });

  it('Sets a code', () => {
    const initialState = {
      code: 12345
    };
    const expectedState = {
      code: 55555
    };
    const action = {
      type: actionTypes.SET_CODE,
      payload: 55555 
    };
    const result = codeReducer(initialState, action);
    expect(result).deep.equals(expectedState);
  });
});