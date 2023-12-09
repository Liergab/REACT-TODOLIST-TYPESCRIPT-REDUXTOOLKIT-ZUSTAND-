import React,{useState,useRef} from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import { addUser } from '../../slice/InputSlice'
import { RootState } from '../../store'
const UseRef = () => {
    const dispatch = useDispatch()
    const [count, setCount] = useState<number>(0)
    const [store, setStore] = useState<string>("")
    // const countRef = useRef(0)
    const user = useSelector((state:RootState) => state.user.username)
    const handleIncrement = () => {
        setCount((prev) => prev + 1)
        // countRef.current++

        console.log('count',count)
        // console.log('countRef:', countRef)
    }

    

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setStore(e.target.value);
      };
   
      const handleAdd = () => {
        if(store.trim() !== ""){
            dispatch(addUser([...user,store]));
          
        }
        setStore("")
      };
    
  return (
    <div>
         <input type="text" value={store}  onChange={handleChange}/>
         <button onClick={handleAdd}>Add</button>
        <button onClick={handleIncrement}>Increment</button>
        <h1>Count: {count}</h1>
        
        <ul>
        {/* Display the items in the store */}
        {user.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseRef