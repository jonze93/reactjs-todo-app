import React from "react";
import "./App.css";
import { taskData } from "./data";

export const Tasks = () => {
  return (
    <>
      <HomePageHeader />
      <div className="task-container">
        {taskData.map((data, key) => {
          return (
            <div key={key}>
              <Task
                key={key}
                task={data.task}
                time={data.time}
                complete={data.complete}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Your Stock Tracker</h2>
    </header>
  );
};

const Task = ({ task, time, complete}) => {
  if (!task) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{task}</h5>
          </td>
          <td>
            <h5>{time}</h5>
          </td>
          <td>
            <h4>{complete}</h4>
          </td>
        </tr>
      </tbody>
    </table>
  );
};