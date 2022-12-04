import React from 'react';
import Task from './Task';

function TaskList({ handleList, tasks }) {
  const displayTasks = tasks.map((task) => {
    return (
      <Task
        key={task.text}
        text={task.text}
        category={task.category}
        handleDelete={handleList}
      />
    );
  });

  return <div className='tasks'>{displayTasks}</div>;
}

export default TaskList;
