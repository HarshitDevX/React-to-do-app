import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
   //const items = ["item1","item2","item3","item4","item5"]
   const[items, setItems]= useState(
  
    ["item1","item2","item3","item4","item5"]
   );

   const [value, setValue]= useState("");

   function onValueChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
   }

   function onAdd() {
    console.log(value);

    const newItems =[...items, value];
    setItems(newItems)
    setValue("");
   }

  return  (<div className="App">
      <header className="App-header">
        <h1> ToDo list</h1>
        <input typee="text" placeholder="eneter to-do list" onChange={onValueChange}></input>
       
       <button onClick={onAdd}>Add</button>

        <ol>
          {items.map((item) =>(
            <li style={{
              color: "green"
            }}>
              {item}
            </li>
          ))}

          
        
         </ol>

      </header>
    </div>
  );
}

export default App;
