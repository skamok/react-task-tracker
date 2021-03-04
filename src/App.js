import { useState, useEffect } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No Tasks to show'}
    </div>
  );
}

export default App;
