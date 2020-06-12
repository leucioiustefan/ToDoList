import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserInput from './Components/UserInput';
import TaskList from './Components/TaskList';
import { v4 as uuid } from 'uuid';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const App = () => {
  const inputValidation = /[^a-z '']/gi;

  const [todos, setTodos] = useState({
    id: uuid(),
    tasks: [],
    name: '',
    completed: false,
    edited: false,
  });

  const userInputHandler = (e) => {
    if (inputValidation.test(e.target.value)) {
      confirmAlert({
        title: ' Name should contain only letters',
        buttons: [
          {
            label: 'Ok',
            onClick: () => setTodos({ ...todos, name: '' }),
          },
        ],
      });
    } else {
      setTodos({ ...todos, name: e.target.value });
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (todos.name.trim() !== '') {
      const newItem = {
        id: todos.id,
        name: todos.name,
        completed: todos.completed,
      };
      setTodos({
        ...todos,
        tasks: [...todos.tasks, newItem],
        id: uuid(),
        name: '',
        completed: false,
      });
    } else {
      confirmAlert({
        title: 'Please enter something',
        buttons: [
          {
            label: 'Ok',
            onClick: () => null,
          },
        ],
      });
    }
  };

  const clearListHandler = () => {
    confirmAlert({
      title: 'Are you sure?',
      message: 'This action cannot be undone',
      buttons: [
        {
          label: 'Confirm',
          onClick: () => setTodos({ ...todos, tasks: [] }),
        },
        {
          label: 'Exit',
          onClick: () => null,
        },
      ],
    });
  };

  const deleteHandler = (id) => {
    confirmAlert({
      title: 'Item will be deleted',
      buttons: [
        {
          label: 'Confirm',
          onClick: () => {
            let filteredItems;
            filteredItems = todos.tasks.filter((todo) => todo.id !== id);
            setTodos({ ...todos, tasks: filteredItems });
          },
        },
        {
          label: 'Exit',
          onClick: () => null,
        },
      ],
    });
  };

  const editHandler = (id) => {
    confirmAlert({
      title: 'Item will be edited',
      buttons: [
        {
          label: 'Confirm',
          onClick: () => {
            let filteredItems;
            let selectedItem;
            filteredItems = todos.tasks.filter((todo) => todo.id !== id);
            selectedItem = todos.tasks.find((todo) => todo.id === id);
            setTodos({
              ...todos,
              tasks: filteredItems,
              name: selectedItem.name,
              edited: true,
            });
          },
        },
        {
          label: 'Exit',
          onClick: () => null,
        },
      ],
    });
  };

  const sortHandler = () => {
    if (todos.tasks.length > 1) {
      confirmAlert({
        title: 'Tasks will be sorted',
        buttons: [
          {
            label: 'Confirm',
            onClick: () => {
              todos.tasks.sort((a, b) => (a.name < b.name ? -1 : 1));
              setTodos({ ...todos });
            },
          },
          {
            label: 'Exit',
            onClick: () => null,
          },
        ],
      });
    } else {
      confirmAlert({
        title: 'You should have 2 or more todos',
        buttons: [
          {
            label: 'Exit',
            onClick: () => null,
          },
        ],
      });
    }
  };

  return (
    <div className="container">
      <h3 className="text-capitalize text-center mt-3 ">Tasks for today</h3>
      <div className="row">
        <div className="col-12 mx-auto">
          <UserInput
            userInputHandler={userInputHandler}
            value={todos.name}
            formSubmitHandler={formSubmitHandler}
            isEdited={todos.edited}
          />
          <TaskList
            todoList={todos.tasks}
            clearListHandler={clearListHandler}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
            sortHandler={sortHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
