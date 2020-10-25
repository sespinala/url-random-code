import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { connect } from 'react-redux';
import { setCode } from './../../redux/code/code.actions';

const onSaveCode = () => { };

const Form = () => {
  const match = useRouteMatch();
  const [value, setValue] = useState();

  console.log(match.params.code);

  return (
    <div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Code</label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            rows="3"
            value={value}
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-12">
          <button className="btn btn-primary" type="submit" onClick={onSaveCode}>
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
