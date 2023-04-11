import { TaskItem } from './TaskItem';
import emptyLogo from '../assets/empty.svg';
import styles from './TaskContainer.module.css';

export const TaskContainer = () => {
  return (
    <main className={styles.container}>
        <header className={styles.header}>
            <div className={styles.createdTasks}>
              <p>Tarefas criadas</p>
              <span>0</span>
            </div>
            <div className={styles.completedTasks}>
              <p>Concluídas</p>
              <span>0</span>
            </div>
        </header>
        <section className={styles.emptyTasks}>
          <img src={emptyLogo} alt='Empty Image' />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </section>
        <section className={styles.tasks}>
          <TaskItem />
          <TaskItem completed={true} />
        </section>
    </main>
  )
}

