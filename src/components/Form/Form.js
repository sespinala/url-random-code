import React, { useState } from 'react';
import { useHistory, useRouteMatch, withRouter } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';

import { setCode } from './../../redux/code/code.actions';

const Form = () => {
  const match = useRouteMatch();
  const routeCode = match.params.code;
  const history = useHistory();

  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState(routeCode);

  const onSaveCode = () => {
    dispatch(setCode(textValue));
    history.push(`/url-random-code/${textValue}`);
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));
