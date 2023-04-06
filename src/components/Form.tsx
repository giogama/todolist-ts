import { PlusCircle } from '@phosphor-icons/react';

import styles from './Form.module.css';

export const Form = () => {
  return (
    <section className={styles.formsection}>
        <div className={styles.wrapper}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button>
                Criar
                <PlusCircle size={16} weight="bold" />
            </button>
      </div>
    </section>
  )
  }
