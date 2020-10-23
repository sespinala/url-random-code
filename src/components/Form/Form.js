import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

const handleSubmit = () => { };

const handleChange = () => { };

const Form = () => {
  const match = useRouteMatch();
  const [value, setValue] = useState();

  console.log(match.params.id);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Code</label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            rows="3"
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-12">
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export { Form };
