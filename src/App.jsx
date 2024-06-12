import { useState } from "react";
import ListTask from "./ListTask";
import taskArr from "./taskArr.js";
import "./App.css";

function App() {
  const [task, setTask] = useState(""); // для обновления инпута
  let [listTask, setListTask] = useState(taskArr); // для обновления списка

  let completedTaskCount = listTask.filter((task, index) => task.status).length;
  console.log(completedTaskCount);

  function addTask() {
    {
      let xxx = {
        id: Date.now(),
        title: task,
        status: false,
        priority: "middle",
      };

      setListTask([xxx, ...listTask]);
      setTask("");
      console.log(listTask);
    }
  }

  function delTask(iii) {
    let xxxx = listTask.filter((elem, index) => elem.id !== iii);

    setListTask(xxxx);
  }

  // cancel

  let [impModal, setImpModal] = useState("");

  function modalCancel() {
    setActive(!active);
    setImpModal("");
  }

  function modalSave() {
    let qqq = listTask.map((elem, index) => {
      if (elem.id === currentTusk.id) {
        return {
          ...elem,
          title: impModal,
        };
      } else {
        return elem;
      }
    });

    setListTask(qqq);

    modalCancel();
  }

  let flag2 = true;
  if (impModal !== "") {
    flag2 = false;
  }

  let [currentTusk, setCurrentTusk] = useState(null);

  function editTask(taskId, title) {
    setImpModal(title);
    setCurrentTusk(taskId);
    // setImpModal(task.title);
    setActive(!active);
    console.log(impModal);
    console.log(taskId);
  }

  let [active, setActive] = useState(false);

  let flag = true;
  if (task !== "") {
    flag = false;
  }
  // Делаю статуcы задач
  let bigTest;

  function changeStatus(elem) {
    // currentStatus.status = !currentStatus.status;

    let newStatusArr = listTask.map(function (element, index) {
      console.log(elem.id);
      console.log(element.id);
      if (element.id === elem.id) {
        return {
          ...element,
          status: !element.status,
        };
      } else {
        return element;
      }
    });

    setListTask(newStatusArr);
  }

  function changePriority(id, priority) {
    let ggg = listTask.map((elem) => {
      if (elem.id === id) {
        return {
          ...elem,
          priority: priority,
        };
      } else {
        return elem;
      }
    });

    setListTask(ggg);
  }

  //
  return (
    <>
      <h1 className="main-title">to do list</h1>
      <span className="total-task">Кол-во задач: {listTask.length}</span>
      <span className={`total-task total-task-done`}>
        {" "}
        Выполненые: {completedTaskCount}
      </span>

      <input
        className="add-input"
        value={task}
        type="text"
        onChange={(e) => setTask(e.target.value)}
      />
      <button className={`btn add`} disabled={flag} onClick={addTask}>
        add
      </button>

      <div className="container">
        <div className={`task__modal ${active ? "task__modal-active" : ""}`}>
          {" "}
          {
            <button
              className="btn2"
              disabled={flag2}
              onClick={() => modalSave()}
            >
              save
            </button>
          }
          <input
            className="task-imp-modal"
            value={impModal}
            type="text"
            onChange={(e) => setImpModal(e.target.value, console.log(impModal))}
          />
          <button className="btn2" onClick={modalCancel}>
            cancel
          </button>
        </div>
        <ListTask
          taskArr={listTask}
          delTask={delTask}
          editTask={editTask}
          changeStatus={changeStatus}
          changePriority={changePriority}
        />
      </div>
    </>
  );
}

export default App;
