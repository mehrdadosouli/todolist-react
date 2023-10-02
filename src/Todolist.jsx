import React, { useEffect, useState } from "react";
import "./Todolist.scss";
import iconDelete from"./icon/icons8-wastebasket.png"
import iconOk from"./icon/icons8-tiktok.png"
export default function Todolist() {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);
  const [changinput, setchanginput] = useState("All");

//   handler input[text]
  const setVal = (e) => {
    setTodo(e.target.value);
  };
// handler add todo 
  const handler = () => {
    const addListTodo = { id: list.length + 1, title: todo, status: false };
    setList((prev) => [...prev, addListTodo]);
    setTodo("");
  };
  const submitt = (e) => {
    if (e.keyCode == 13 && todo.length) {
      handler();
    }
  };
  const subclick = () => {
    handler();
  };
//  handler filter
  const changes = (e) => {
    setchanginput(e.target.value);
  };
//   handler delete button 
  const deleteHandler = (e) => {
    const res = list.filter((item) => {
      return item.id !== Number(e.target.id);
    });
    setList(res);
  };
//   handler readed item 
  const doitem = (e) => {
    const newTodo = [...list];
    const res = newTodo.filter((item) => {
      return item.id == Number(e.target.id);
    });
    newTodo.find((elem) => {
      if (elem.id == res[0].id) {
        elem.status = !elem.status;
      }
    });
    setList(newTodo);
  };
  return (
    <>
      <div className="container">
        <div className="filter">
            <h1>Just Do It</h1>
            <select name="filter" id="filterbox" value={changinput} onChange={changes} >
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="NotCompleted">NotCompleted</option>
            </select>
        </div>
        <div className="search">
            <input type="text" onKeyUp={submitt} value={todo} onChange={setVal} />
            <button onClick={subclick}>Add</button>   
        </div>
        <div className="list_todo">
          {list.length && changinput == "All"
            ? list.map((item) => {
                return (
                  <div key={item.id} className="list_todo_item">
                    <h1 className={item.status ? "complate" : ""}>
                      {item.title}
                    </h1>
                    <div className="btns">
                        <div className="icon">
                        <span id={item.id} onClick={doitem}>
                             Ok
                        </span>
                            <img src={iconOk} id={item.id}  onClick={doitem}/>
                        </div>
                        <div className="icon">
                          <span id={item.id} onClick={deleteHandler}>
                              Delete
                          </span>
                          <img src={iconDelete}  id={item.id} onClick={deleteHandler}/>
                        </div>
                    </div>
                  </div>
                );
              })
            : ""}
          {list.length && changinput == "NotCompleted"
            ? list.filter((item) => item.status == false)
                .map((item) => {
                  return (
                    <div key={item.id} className="list_todo_item">
                      <h1 className={item.status ? "complate" : ""}>
                        {item.title}
                      </h1>
                      <div className="btns">
                      <div className="icon">
                        <span id={item.id} onClick={doitem}>
                             Ok
                        </span>
                            <img src={iconOk} id={item.id}  onClick={doitem}/>
                        </div>
                        <div className="icon">
                          <span id={item.id} onClick={deleteHandler}>
                              Delete
                          </span>
                          <img src={iconDelete} id={item.id} onClick={deleteHandler} />
                        </div>
                    </div>
                    </div>
                  );
                })
            : ""}
          {list.length && changinput == "Completed"
            ? list.filter((item) => item.status == true)
                .map((item) => {
                  return (
                    <div key={item.id} className="list_todo_item">
                      <h1 className={item.status ? "complate" : ""}>
                        {item.title}
                      </h1>
                      <div className="btns">
                      <div className="icon">
                        <span id={item.id} onClick={doitem}>
                             Ok
                        </span>
                            <img src={iconOk} id={item.id}  onClick={doitem}/>
                        </div>
                        <div className="icon">
                          <span id={item.id} onClick={deleteHandler}>
                              Delete
                          </span>
                          <img src={iconDelete}  id={item.id} onClick={deleteHandler}/>
                        </div>
                      </div>
                    </div>
                  );
                })
            : ""}
        </div>
      </div>
    </>
  );
}
