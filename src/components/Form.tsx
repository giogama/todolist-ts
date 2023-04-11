import { useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';

import styles from './Form.module.css';

export const Form = () => {
  const [newTask, setNewTask] = useState('');

  const handleNewTask = () => {
    console.log(newTask);
    setNewTask('');
  }

  return (
    <section className={styles.formsection}>
        <div className={styles.wrapper}>
            <input 
              type="text" 
              placeholder='Adicione uma nova tarefa' 
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleNewTask}>
                Criar
                <PlusCircle size={16} weight="bold" />                
            </button>
      </div>
    </section>
  )
  }
