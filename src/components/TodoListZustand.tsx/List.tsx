import React,{useState} from 'react'
import useTodoStore from '../../zustand/Todolist'

const List = () => {
    const [isUpdate, setIsUpdate] = useState<number | null>(null)
   const [editTodoList, isEditTodoList] = useState<string>('')

    const deleteTodos = useTodoStore((state) => state.deleteTodo)
    const updateTodo = useTodoStore((state) => state.updateTodo)
    const todos = useTodoStore((state) => state.todos)
    
    const handleDelete = (id:number) => {
        deleteTodos(id)
    }
    
    const handleEdit = (id:number,text:string) => {
        setIsUpdate(id);
        isEditTodoList(text);
    }
    const handleSave = (id: number) => {
        updateTodo(id, editTodoList); 
        setIsUpdate(null)
      };

    const handleChangeEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        isEditTodoList(e.target.value)
    }
  return (
    <div>
    {todos.map((todo) => (
        <ul key={todo.id}>
        {isUpdate === todo.id 
        ? ( <input type='text' value={editTodoList}  onChange={handleChangeEdit}/>)

        : ( <li>{todo.text}</li>)
        } 
        { isUpdate === todo.id ?
         <i><button onClick={() => handleSave(todo.id)}>save</button></i>
        :
        <li><button onClick={() => handleEdit(todo.id , todo.text)}>Edit</button></li>
        }
           
           
            <i><button onClick={() =>handleDelete(todo.id)}>delete</button></i>
            
        </ul>
    ))}
</div>
  )
}

export default List