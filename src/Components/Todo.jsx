import { useState , useRef } from "react"   
      
export default function Todo() { 
  const [todos , setTodos] = useState([]) 
  const inputRef = useRef()   
  const handleButtonClick = ()=> {  
    const text = inputRef.current.value; 
    const newItem = {completed: false, text}
    if(text.trim() !== ""){  
      setTodos([...todos , newItem ])
      inputRef.current.value = ""
    }   
  } 
        
  const handleItemClick = (index)=>{ 
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  const handleItemDelete = (index)=>{
    const newTodos = [...todos]
    newTodos.splice(index , 1)
    setTodos(newTodos)
  }
  return(
    <div className="todo-continer">
      <h2>ToDo List</h2>
      <ul>
        {todos.map((item , index)=>(
          <div  className="li-container">
            <li
              className={item.completed && "completed"} onClick={()=> handleItemClick(index)} key={index}>{item.text}
            </li>
            <span className={item.completed && "completed"} onClick={()=> handleItemDelete(index)}>delete</span>
          </div>
          
        ))}
      </ul>
      <input ref={inputRef} type="text" placeholder="Enter Todo"  />
      <button onClick={handleButtonClick}>Add New Todo</button>
    </div>
  )
};

   














