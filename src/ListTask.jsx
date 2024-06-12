function ListTask(props) {
  return (
    <>
      {props.taskArr.map((elem, index) => (
        <ul className="list" key={index}>
          <li key={index} className="task__list">
            <div>
              <select
                name=""
                id=""
                value={elem.priority}
                onChange={(e) => props.changePriority(elem.id, e.target.value)}
                className={`input__select custom-select ${elem.priority}`}
              >
                <option className="input__select-option middle" value="middle">
                  !!
                </option>
                <option className="input__select-option high" value="high">
                  !!!
                </option>

                <option className="input__select-option low" value="low">
                  !
                </option>
              </select>
              <span className="task__index"> {index + 1}.</span>
            </div>

            <span className="task__title"> {elem.title}</span>
            <div>
              <button
                className="btn"
                onClick={() => props.editTask(elem, elem.title)}
              >
                edit
              </button>
              <button className="btn" onClick={() => props.delTask(elem.id)}>
                del
              </button>
              <button
                className={`task-btn-status btn ${
                  elem.status ? "task-btn-status-done" : ""
                }`}
                onClick={() => props.changeStatus(elem)}
              >
                {elem.status ? "complete" : "in process"}
              </button>
            </div>
          </li>
        </ul>
      ))}
    </>
  );
}

export default ListTask;
