import React from 'react';
import './App.css';
import ToDoHeader from '../ToDoHeader';
import ToDoList from '../ToDoList';
import ToDoDetail from '../ToDoDetail';

const App = () => {
  const [selectedTask, setSelectedTask] = React.useState();

  return (
    <div className="ToDoAppContent">
      <ToDoHeader />
      <div className="ToDoAppContent-container">
        <ToDoList className="ToDoAppContent-column" />
        <ToDoDetail selectedTask={selectedTask} className="ToDoAppContent-column" />
      </div>
    </div>
  );
}

export default App;
