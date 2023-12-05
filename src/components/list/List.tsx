import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../store"
import { DeleteTodoList, updateTodoList } from "../../slice/TodoSlice"
import React,{ useState } from "react"

const List = () => {
    const [editIndex, setEditIndex] = useState<number | null>(null)
    const [editedTodo, setEditedTodo] = useState<string>("");
    const dispatch = useDispatch()
    const todoListStorage = useSelector((state:RootState) => state.todoList.storagetList)

    const handleDelete = (index:number) => {
      dispatch(DeleteTodoList(index))
    }
    const handleEdit= (index:number, todo:string) => {
     setEditIndex(index)
     setEditedTodo(todo)
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setEditedTodo(e.target.value)
    }

    const handleSave = (index:number) => {
      dispatch(updateTodoList({index, updatedTodo:editedTodo}))
      setEditIndex(null)
    }
  return (
    <div>
    {todoListStorage.map((todo, index) => (
        <ul key={index} className="listContainer">
          {editIndex === index
           ? (
             <input 
              value={editedTodo}
              type="text" 
              onChange={handleChange} className="input-edit"/>
           )
          :(
            <li>{todo}</li>
           )
          }

          <span className="button-container">
            {
              editIndex ===  index ? (
                <li><button onClick={() => handleSave(index)} className="save-button">save</button></li>
              ):
              (
                <li><button onClick={() => handleEdit(index, todo)} className="edit-button">Edit</button></li>
              )
            }
            
            <li><button onClick={() => handleDelete(index)} className="delete-button">Delete</button></li>
          </span>
         
        </ul>
        
      
    ))}
    
   </div>
  )
}

export default List

