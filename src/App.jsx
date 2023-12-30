import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Componnets/Todo'
import TodoForm from './Componnets/TodoForm'
import Search from './Componnets/Search'

function App() {

  const [todos, setTodos] = useState([

    {
      id: 1, 
      text: "Criar funcionalidade x no sistema" , 
      category:"trabalho", 
      iscompleted: false,
    }, 
    {
      id: 2, 
      text: "Ir para a academia" , 
      category:"pessoal", 
      iscompleted: false,
    }, 

    {
      id: 3, 
      text: "Estudar React" , 
      category:"Estudos", 
      iscompleted: false,
    }, 

  ]);

  const addtask = (text, category) => {  

    const newtodos = [...todos, {

      id: 10000,
      text, 
      category, 
      iscompleted: false,

      },
    ];

    setTodos(newtodos); 

  };

  const deletarTask =(id) => {

    const newtodos = [...todos];

    // O filtro não modifica o array original  

    const filtedetodos = newtodos.filter((todo) => todo.id !== id ? todo : null);

    setTodos(filtedetodos);

  }

  const completedTask=(id) => {

    const newTodos = [...todos]
    newTodos.map((todo)  => todo.id === id ? todo.iscompleted = !todo.iscompleted : todo)

    setTodos(newTodos);

  }

  return (
    
      <div className='app'>

       <h1>My Todo List</h1> 

       <Search/>

       <div className='todo_list'>


        {todos.map((todo)=>(

         <Todo key={todo.id} todo={todo} deletarTask={deletarTask} completedTask={completedTask}/>

        ))}

       </div>

          <TodoForm addtask={addtask}/>
       
      </div>
      
  )
}

export default App
