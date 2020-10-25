import { expect } from 'chai';

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
      type: 'SET_CODE',
      payload: { 
        code: 55555 
      }
    };
    const result = codeReducer(initialState, action);
    expect(result).deep.equals(expectedState);
  });
});