import Search from "./components/search/Search";
import './App.css';
import {Route, Routes,Link} from 'react-router-dom'
import TodoList from "./components/TodoListZustand.tsx/TodoList";
// import UseRef from "./components/userRef/UseRef";
const App = () => {
  return (
  <div className="container">
    <div className="nav">
      <Link to='/todolist/redux-tool-kit'>TODOLIST WITH REDUX-TOOL_KIT</Link>
      <Link to='/todolist/zustand'>TODOLIST WITH Zustand</Link>
    </div>
   <Routes>
      <Route
      path='/todolist/redux-tool-kit' 
      element={<Search title='TodoList with Redux-Tool-Kit'/>}/>
      <Route
      path='/todolist/zustand' 
      element={<TodoList/>}/>
      {/* <Route
      path='/' 
      element={<UseRef/>}/> */}
   </Routes>
    
  </div>
  )
}

export default App