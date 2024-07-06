
import { useFormik } from "formik"; 
import * as Yup from 'yup';

import { nanoid } from 'nanoid'; 

import { todosStore } from './store/store'; 


import './App.css'

function App() {

  const todosState = todosStore(state => state);

  const formik = useFormik({

    //yup stored own validate functions (for email, password...etc)
    validationSchema: Yup.object({
      todo: Yup.string().required('Write doto name'),
    }),
    initialValues: {
      todo: '',
    },
    onSubmit: (values, { resetForm }) => {
     
      todosState.addTodo(values.todo);

      resetForm();

    },
  });

  return (
    <>
      <div>
        <h1>Todos</h1>
      
          <form onSubmit={formik.handleSubmit}>
            <input
            id="todo"
            name="todo"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.todo}
            ></input>
            
            <button type='submit'>{'Add'}</button>

          </form>

      </div>

      <div>

        <ul>
           {todosState.todos.map(element => {
              return <li key={nanoid()}>{`${element}`}</li>
           })}
        </ul>

      </div>
    </>
  )
}

export default App