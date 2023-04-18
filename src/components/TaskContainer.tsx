import { TaskItem } from './TaskItem';
import emptyLogo from '../assets/empty.svg';
import styles from './TaskContainer.module.css';

interface ITask {
  id: string;
  name: string;
  completed: boolean;  
}

interface IProps {
  tasks: ITask[] | undefined;
  onDeleteTask: (id:string) => void;
  onUpdateStatus: (id:string) => void;
}

export const TaskContainer = ( { tasks, onDeleteTask, onUpdateStatus } : IProps) => {
  const handleCompletedTask = (id:string) => {
    onUpdateStatus(id);
  }

  const handleDeleteTask = (id:string) => {
    onDeleteTask(id);
  }

  const totalCompleted = tasks?.reduce((prev, current) => {
    if (current.completed)
      return prev + 1;
    else
      return prev + 0;
  }, 0);

  return (
    <main className={styles.container}>
        <header className={styles.header}>
            <div className={styles.createdTasks}>
              <p>Tarefas criadas</p>
              <span>{tasks?.length}</span>
            </div>
            <div className={styles.completedTasks}>
              <p>Concluídas</p>
              <span>{totalCompleted} de {tasks?.length}</span>
            </div>
        </header>
        {tasks?.length  ? 
          <section className={styles.tasks}>
            {tasks?.slice(0).reverse().map(task => (
              <TaskItem 
                key={task.id}
                id={task.id}
                completed={task.completed} 
                name={task.name}
                onCompletedTask={handleCompletedTask}
                onDeleteTask={handleDeleteTask}
              />  
            ))}
          </section>
        :
          <section className={styles.emptyTasks}>
            <img src={emptyLogo} alt='Empty Image' />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </section>
        }
    </main>
  )
}

