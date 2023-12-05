import Search from "./components/search/Search";
import './App.css';
import {Route, Routes} from 'react-router-dom'
import TodoList from "./components/TodoListZustand.tsx/TodoList";
const App = () => {
  return (
  <div className="container">
   <Routes>
    <Route
     path='/todolist/redux-tool-kit' 
     element={<Search title='TodoList with Redux-Tool-Kit'/>}/>
     <Route
     path='/todolist/zustand' 
     element={<TodoList/>}/>
   </Routes>
    
  </div>
  )
}

export default App