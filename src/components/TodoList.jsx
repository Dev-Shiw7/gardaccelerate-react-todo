import React, { useState } from "react";

const TodoList = ({ tasks, deleteTask, editTask }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditSubmit = (e, id) => {
    e.preventDefault();
    editTask(id, editText);
    setEditId(null);
    setEditText("");
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center mb-2 border-b pb-2"
        >
          {editId === task.id ? (
            <form
              onSubmit={(e) => handleEditSubmit(e, task.id)}
              className="flex gap-2 w-full"
            >
              <input
                className="flex-grow border p-1"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button type="submit" className="text-green-500">
                Save
              </button>
              <button
                type="button"
                onClick={() => setEditId(null)}
                className="text-gray-500"
              >
                Cancel
              </button>
            </form>
          ) : (
            <>
              <span>{task.text}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setEditId(task.id);
                    setEditText(task.text);
                  }}
                  className="text-blue-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
