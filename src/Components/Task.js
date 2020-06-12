import React from 'react';

export default ({ name, deleteHandler, editHandler }) => {
  const iconStyle = {
    cursor: 'pointer',
  };

  return (
    <li className="list-group-item text-capitalize my-2 d-flex justify-content-between">
      <p className="mb-0 text-primary font-weight-bold">{name}</p>
      <div className="d-flex align-items-center">
        <span className="mx-2 text-success">
          <i className="fas fa-pen" style={iconStyle} onClick={editHandler} />
        </span>
        <span className="mx-2 text-danger">
          <i
            className="fas fa-trash"
            onClick={deleteHandler}
            style={iconStyle}
          />
        </span>
      </div>
    </li>
  );
};
