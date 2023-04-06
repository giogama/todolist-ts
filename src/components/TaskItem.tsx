import { Trash } from "@phosphor-icons/react";
import styles from './TaskItem.module.css';

export const TaskItem = () => {
  return (
    <div className={styles.container}>
      <input type='checkbox' />
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <Trash size={24} />

    </div>
  )
}
