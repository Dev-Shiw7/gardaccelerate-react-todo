import { useState } from "react";
//import Habit from "./components/Habits";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";


const App = () => {

  const [tasks, setTasks]=useState([]);

  const addTask=(task)=>{
    if (task.trim()){
      setTasks(...tasks, task);
    }

  }

 return (
  <div className="min-h-screen bg-gray-200 flex items-center justify-center">
    <div className="bg-white p-4 max-w-md w-full rounded shadow">
      <h1 className="text-2xl font-bold mb-4">My Todo App</h1>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} />
    </div>
  </div>
);
}; 












































  // const [habits, setHabits] = useState([]);
  // const [input, setInput] = useState("");

  // const addHabit = () => {
  //   if (input.trim() === "") return;
  //   setHabits([...habits, input]);
  //   setInput("");
  // };

  // return (
  //   <div className="p-5">
  //     <input
  //       className="border p-2"
  //       value={input}
  //       onChange={(e) => setInput(e.target.value)}
  //     />
  //     <button onClick={addHabit} className="bg-blue-500 text-white p-2 ml-2">
  //       Add Habit
  //     </button>

  //     <div>
  //       {habits.map((habit, index) => (
  //         <Habit key={index} text={habit} />
  //       ))}
  //     </div>
  //   </div>
  // );


export default App;