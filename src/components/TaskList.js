import React, { useState } from "react";

function TaskList(props) {
  return (
    <div className="grid-item2 task-list-container">
      <h2>Tasks</h2>
      <ul className="tasklist">
        <li>task 1</li>
        <li>task 2</li>
        <li>task 3</li>
        <li>task 4</li>
        <li>task 5</li>
      </ul>
    </div>
  );
}

export default TaskList;
