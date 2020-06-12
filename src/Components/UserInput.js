import React from 'react';
export default ({ userInputHandler, value, formSubmitHandler, isEdited }) => {
  return (
    <div data-testid="userInput" className="card mt-3 py-3">
      <div className="card-body">
        <form onSubmit={formSubmitHandler}>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text bg-primary">
                <i className="fas fa-book text-white " />
              </span>
            </div>
            <input
              name="text"
              type="text"
              className="form-control ml-1"
              onChange={userInputHandler}
              value={value}
              autoComplete="off"
              placeholder="Enter todo"
            />
          </div>
          <button
            type="submit"
            className={
              isEdited
                ? 'btn btn-success btn-block mt-5 py-2'
                : 'btn btn-primary btn-block mt-5 py-2'
            }
          >
            {isEdited ? 'Edit item' : 'Add item'}
          </button>
        </form>
      </div>
    </div>
  );
};
