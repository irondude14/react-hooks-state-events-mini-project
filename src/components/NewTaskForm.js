import React, { useState } from 'react';

function NewTaskForm({ dropdownCategories, onTaskFormSubmit }) {
  const [taskName, setTaskName] = useState('');
  const [value, setValue] = useState(getInitialState);

  function handleForm(event) {
    event.preventDefault();
    const taskData = {
      text: taskName,
      category: value,
    };
    setTaskName('');
    setValue('');
    onTaskFormSubmit(taskData);
  }

  function handleTaskName(event) {
    setTaskName(event.target.value);
  }

  function getInitialState() {
    const value = 'Code';
    return value;
  }

  function handleTaskCategory(event) {
    setValue(event.target.value);
  }

  return (
    <form className='new-task-form' onSubmit={handleForm}>
      <label>
        Details
        <input type='text' name='text' onChange={handleTaskName} />
      </label>
      <label>
        Category
        <select name='category' value={value} onChange={handleTaskCategory}>
          {dropdownCategories}
        </select>
      </label>
      <input type='submit' value='Add task' />
    </form>
  );
}

export default NewTaskForm;
