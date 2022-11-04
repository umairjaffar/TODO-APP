import React, { useState } from "react";

const ToDo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = () => {
    if (input.length > 0) {
      setTodo([...todo, input]);
      setInput("");
    }else{
        alert('Please Add TODO!')
    }
  };
   const resetTodo = () => {
    setTodo([]);
   }
  const deleteTodo = (id) => {
    const filtered = todo.filter((item, index) => {
      if (id !== index) {
        return item;
      }
    });
    setTodo(filtered);
    console.log(filtered);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <div className="card col-md-6 text-center d-flex flex-column bg-light m-4">
                <h2 className="display-6 text-success">TODO APP</h2>
              <div className="form-check d-flex justify-content-around p-4">
                <input
                  className="col-md-8"
                  type="text"
                  id="todo1"
                  name="name"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn btn-primary p-2" onClick={addTodo}>
                  add todo
                </button>
                <button className="btn btn-success p-2" onClick={resetTodo}>reset todos</button>
              </div>
              <div className="toods mb-4">
                {todo.map((data, index) => {
                  return (
                    <ul
                      key={index}
                      className="list-group ms-5 col-sm-12 d-flex flex-row"
                    >
                      <li className="me-4 h4 fw-sm list-group-item col-sm-7 text-start text-success">{`${index + 1}: ${data}`}</li>
                      <button
                        className="col-sm-3 btn btn-danger mx-1 mb-2 p-0"
                        onClick={() => deleteTodo(index)}
                      >
                        delete todo
                      </button>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ToDo;
