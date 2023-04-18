import { useState } from 'react';
import { v4 as uuidv4} from 'uuid';
import { PlusCircle } from '@phosphor-icons/react';

import styles from './Form.module.css';
import { TaskContainer } from './TaskContainer';

interface ITask {
  id: string;
  name: string;
  completed: boolean;    
}

export const Form = () => {
  const [newTask, setNewTask] = useState('');  
  const [tasks,setTasks] = useState<ITask[]>([] as ITask[]);

  const handleNewTaskChange = (e:React.ChangeEvent<HTMLInputElement>) => {    
    setNewTask(e.target.value);
}

  const handleCreateNewTask = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newId = uuidv4();
    
    const newTaskAdd: ITask = {
      id: newId,
      name: newTask,
      completed: false
    }
    
    setTasks([...tasks, newTaskAdd]);
    setNewTask('');   
  }

  const handleDeleteTask = (id:string) => {
    const tasksWithoutDeletedOne = tasks?.filter(task => {
      return task.id != id;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  const handleUpdateStatusTask = (id:string) => {
    const tasksUpdatedStatus = tasks?.filter(task => {
      if (task.id === id)
        task.completed = !task.completed;

      return true;
    });

    setTasks(tasksUpdatedStatus);
  }

  const isNewTaskEmpty = newTask.length === 0;

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.formsection}>
          <div className={styles.wrapper}>
              <input 
                type="text" 
                placeholder='Adicione uma nova tarefa' 
                value={newTask}
                onChange={handleNewTaskChange}
              />
              <button 
                type='submit'               
                disabled={isNewTaskEmpty}
              >
                  Criar
                  <PlusCircle size={16} weight="bold" />                
              </button>
        </div>
      </form>
      <TaskContainer tasks = {tasks} onDeleteTask = {handleDeleteTask} onUpdateStatus = {handleUpdateStatusTask}/>
    </>
  )
  }
