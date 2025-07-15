import React, { useState } from 'react';


const TodoInput=({addTask})=>{
    const [input, setInput]=useState('');


    const handleSubmit=(e)=>{
        e.preventDefault();
        addTask(input);
        setInput('');
    }

     return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
        className="flex-grow p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded">
        Add
      </button>
    </form>
  );
};

export default TodoInput; 
