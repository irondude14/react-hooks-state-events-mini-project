import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';

import { CATEGORIES, TASKS } from '../data';
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [filterBy, setFilterBy] = useState('All');
  const [clicked, setClicked] = useState(false);
  const [submittedTaskForm, setSubmitTaskForm] = useState(TASKS);

  function onTaskFormSubmit(obj) {
    const newTaskData = [...submittedTaskForm, obj];
    setSubmitTaskForm(newTaskData);
  }

  function handleFilter(event) {
    setFilterBy(event.target.value);
    clicked
      ? setClicked(event.currentTarget.classList.toggle('selected'))
      : setClicked(event.currentTarget.classList.toggle('selected'));
  }

  const filteredTasks = submittedTaskForm.filter((task) => {
    if (filterBy === 'All') {
      return task;
    } else if (task.category === filterBy) {
      return task;
    } else {
      return null;
    }
  });

  const dropdownCategories = CATEGORIES.map((category) => {
    if (category !== 'All') {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    } else {
      return null;
    }
  });

  function handleList(text) {
    const newTaskList = filteredTasks.filter((task) => task.text !== text);
    setSubmitTaskForm(newTaskList);
  }

  return (
    <div className='App'>
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilter={handleFilter} />
      <NewTaskForm
        dropdownCategories={dropdownCategories}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList handleList={handleList} tasks={filteredTasks} />
    </div>
  );
}

export default App;
