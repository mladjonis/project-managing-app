import React from "react";

const TaskDetails = (props) => {
  const taskId = props.match.params.id;
  return (
    <div className="container section task-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Task title - {taskId}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cum
            sit illum atque? Sint voluptatem impedit repudiandae recusandae, id
            nobis!
          </p>
        </div>
        <div className="card-action grey lighten-3 grey-text">
          <div>Posted by Mladjonis</div>
          <div>2nd November 2020, 8:00pm</div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
