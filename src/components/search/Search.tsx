import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { AddTodoList } from '../../slice/TodoSlice'
import List from '../list/List'

const Search = ({title}:{title:string}) => {

  const todoListStorage= useSelector((state:RootState) =>  state.todoList.storagetList)
  const dispatch = useDispatch()
  const [todolist, setTodoList] = useState<string>("")

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTodoList(e.target.value)
  }

  const handleClick = () => {
    if (todolist.trim() !== '') {
        dispatch(AddTodoList([...todoListStorage, todolist])); 
        setTodoList('');
      }
  }
  return (
    <>
    <h1>{title}</h1>
     <div className=''>
        <div className='search-layout'>
            <input type='text' value={todolist} placeholder='Add TodoList..' className='input' onChange={handleChange}/>
            <button className='button' onClick={handleClick}>ADD</button>
        </div>
       <List />
    </div></>
   
  )
}

export default Search