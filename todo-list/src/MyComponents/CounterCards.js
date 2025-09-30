import React from "react";

const counterCards = () => {
  let taskcount = 0;
  let CompletedTasks = 0;
  let PendingTasks = 0;
  return (
    <div className="CounterCards">
      <div className="cards">
        <p className="cardsdesc">{taskcount}</p>
        <h1 className="cardstitle">Task Count</h1>
      </div>
      <div className="cards">
        <p className="cardsdesc1">{CompletedTasks}</p>
        <h1 className="cardstitle">Completed Tasks</h1>
      </div>
      <div className="cards">
        <p className="cardsdesc2">{PendingTasks}</p>
        <h1 className="cardstitle">Pending Tasks</h1>
      </div>
    </div>
  );
};

export default counterCards;
