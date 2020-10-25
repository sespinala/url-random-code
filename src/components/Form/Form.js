import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

import { setCode } from './../../redux/code/code.actions';

const Form = () => {
  const match = useRouteMatch();
  const routeCode = match.params.code;
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState();

  const onSaveCode = () => {
    dispatch(setCode(textValue));
  };

  const onCodeChange = event => {
    setTextValue(event.target.value);
  };

  return (
    <div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Code</label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            rows="3"
            defaultValue={routeCode}
            onChange={onCodeChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-12">
          <button className="btn btn-primary" 
            type="submit" 
            onClick={onSaveCode}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  code: state.value
});

const mapDispatchToProps = dispatch => ({
  setCode: code => dispatch(setCode(code))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
