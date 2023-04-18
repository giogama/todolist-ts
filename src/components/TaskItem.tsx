import { useState } from "react";

import { Trash } from "@phosphor-icons/react";
import styles from './TaskItem.module.css';

interface IProps {
  id: string;
  name: string;
  completed: boolean;
  onCompletedTask: (id:string) => void;
  onDeleteTask: (id:string) => void;
}


export const TaskItem = ({ id, completed, name, onCompletedTask, onDeleteTask } : IProps) => {
    const [isChecked, setIsChecked] = useState(false);    

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {    
      setIsChecked(!isChecked);
      onCompletedTask(id);
    }

    const handleDeleteTask = () => {
      onDeleteTask(id);
    }

  return (
    <div className={styles.container}>
      <input 
        type='checkbox' 
        checked={isChecked} 
        onChange={handleOnChange}
      />
      {isChecked 
        ? <p className={styles.taskCompleted}>{name}</p>
      :
        <p>{name}</p>
       }      
      <Trash size={24} onClick={handleDeleteTask} />
    </div>
  )
}
