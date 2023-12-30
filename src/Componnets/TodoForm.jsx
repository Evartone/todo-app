import React from "react";
import {useState} from "react"

const  TodoForm=({addtask})=> {

    const [value, setValue] = useState("");
    const [category, setCategory]=useState("");

    const handleSubmit = (e)=> {

        e.preventDefault();

        if (!value || !category) return ; 


        addtask(value, category); 
        //Adicionar todo
        // limpar campos 
        setValue("");
        setCategory("");

    }
    
    return (

        <div className="todo_form">

            <h2>Criar Tarefa:</h2>

            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="Digite o titulo" onChange={(e)=> setValue(e.target.value)}
                value={value}
                />

                <select value={category} onChange={(e)=> setCategory(e.target.value)} >

                  <option value="">Selecionen Uma Categoria </option>
                  <option value="Trabalho">Trabalho </option>
                  <option value="Pessoal">Pessoal </option>
                  <option value="Estudos">Estudos</option>
                
                </select>

                <button type="submit">Criar tarefa</button>
                
            </form>
            
        </div>
    )
}

export default TodoForm;