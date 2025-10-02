import React from "react";

const CounterCards = ({ todos }) => {
  let taskcount = todos ? todos.length : 0;
  let CompletedTasks = todos ? todos.filter((todo) => todo.completed).length : 0;
  let PendingTasks = taskcount - CompletedTasks;
  return (
    <div className="CounterCards">
      <div className="cards">
        <p className="cardsdesc2">{taskcount}</p>
        <h3 className="cardstitle">Task Count</h3>
      </div>
      <div className="cards">
        <p className="cardsdesc">{CompletedTasks}</p>
        <h3 className="cardstitle">Completed Tasks</h3>
      </div>
      <div className="cards">
        <p className="cardsdesc1">{PendingTasks}</p>
        <h3 className="cardstitle">Pending Tasks</h3>
      </div>
    </div>
  );
};

export default CounterCards;