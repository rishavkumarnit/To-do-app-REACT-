import Navbar from "./components/Navbar";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (todos.length >= 5) {
      alert("it's just a play ground!! 😁. Can't add more tasks.");
      return;
    }
    if (todo === "") {
      alert("Task can't be blank");
      return;
    }
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  };
  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id == id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };
  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <div className="relative">
      <Navbar />
      <div className="mx-0 pt-10 bg-slate-400 w-full min-h-screen">
        <div className="addTodo mx-10 my-5 flex flex-col items-start gap-1">
          <h2 className="text-lg font-medium">To do item</h2>
          <input
            type="text"
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            value={todo}
            className="rounded focus:outline-none focus:ring-2 bg-gray-200 w-full p-2"
          />
          <button
            onClick={handleAdd}
            className="rounded-sm bg-green-300 shadow w-18 active:scale-95 active:translate-z-1 mt-1 hover:cursor-pointer"
          >
            Save
          </button>
        </div>

        <h2 id="todos" className="text-center font-semibold">
          Your Todos
        </h2>
        <div className="todos mt-10">
          {todos.map((item) => {
            return (
              <div
                key={item.id}
                className="todo flex flex-col items-start mx-10 mt-3"
              >
                <div
                  className={`text bg-gray-200 rounded w-full p-1 ${
                    item.isCompleted ? "line-through" : ""
                  }`}
                >
                  {item.todo}
                </div>
                <input
                  type="checkbox"
                  name={item.id}
                  onChange={handleCheckbox}
                  className="mt-0.5"
                  value={item.isCompleted}
                  id=""
                />
                <div className="buttons flex mt-0.5 gap-1">
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className="rounded-sm bg-red-300 shadow w-18 active:scale-95 active:translate-z-1 mt-1 hover:cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className="rounded-sm bg-red-500 shadow w-18 active:scale-95 active:translate-z-1 mt-1 hover:cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
