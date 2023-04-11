import { Trash } from "@phosphor-icons/react";
import styles from './TaskItem.module.css';

interface IProps {
    completed?: boolean;
}

export const TaskItem = ({ completed } : IProps) => {
    const completedClass = completed ? styles.taskCompleted : '';

  return (
    <div className={styles.container}>
      <input type='checkbox' />
      <p className={completedClass}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <Trash size={24} />

    </div>
  )
}
