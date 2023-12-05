import React, { useState } from 'react'
import useTodoStore from '../../zustand/Todolist'
import List from './List'

const TodoList = () => {
   
   const [todolist, setTodolist] = useState<string>('')
   const addTodo = useTodoStore((state) => state.addTodo)
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTodolist(e.target.value)
    }
    const handleAdd = () => {
        if(todolist.trim() !== ''){
            addTodo(todolist)
            setTodolist('')
        }
    }  
  return ( 
    <>
     <div>TodoList</div>
     <div>
        <input type="text" value={todolist} placeholder='Add TodiList' onChange={handleChange} />
        <button onClick={handleAdd}>Add</button>
     </div>
    <List />
    </>
   
  )
}

export default TodoList
