import { Task } from './Task';

const Tasks = (tasks, onDelete) => {
  const [tasks, setTasks] = useState(initialState)
  return (
    <>
      {tasks.map((task) => ( 
      <Task key={task.id} task={task} onDelete={onDelete}/>
      ))}
    </>
  )
}

export default Tasks;