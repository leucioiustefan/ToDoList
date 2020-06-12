import React from 'react';
import Task from './Task';

export default ({
  todoList,
  clearListHandler,
  deleteHandler,
  editHandler,
  sortHandler,
}) => {
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center mt-5">task list</h3>
      <span className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-dark text-right text-capitalize"
          onClick={sortHandler}
        >
          sort aphabetically
        </button>
      </span>

      {todoList.map((task) => {
        return (
          <Task
            key={task.id}
            name={task.name}
            deleteHandler={() => deleteHandler(task.id)}
            editHandler={() => editHandler(task.id)}
            sortHandler={sortHandler}
          />
        );
      })}

      <button
        className="btn btn-danger btn-block text-capitalize mt-5 py-2"
        onClick={clearListHandler}
      >
        clear list
      </button>
    </ul>
  );
};
