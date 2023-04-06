import style from 'App.module.css';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { TaskContainer } from './components/TaskContainer';

function App() {
  return (  
    <>
      <Header />
      <Form />
      <TaskContainer />
    </>  
  )
}

export default App
