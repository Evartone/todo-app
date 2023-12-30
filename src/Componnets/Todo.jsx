import React from "react";

const Todo = ({todo, deletarTask, completedTask}) => {
    // Passamos a função para o props

    return (
        
    <div className='todo' style={{textDecoration: todo.iscompleted  ? "line-through" : ""}}>

       <div className='content'>
         <p>{todo.text}</p>
         <p className='category'>({todo.category})</p> 
       </div>

       <div>
          <button className="completa" onClick={()=> completedTask(todo.id)}>Completada</button>
          <button className="deletar" onClick={()=> deletarTask(todo.id)}>X</button>
       </div>

   </div>
   
    )
}

export default Todo;