import React from 'react';
import './App.css';
import ToDoHeader from '../ToDoHeader';
import ToDoList from '../ToDoList';
import ToDoDetail from '../ToDoDetail';

const App = () => {
  const [selectedTask, setSelectedTask] = React.useState(null);

  return (
    <div className="ToDoApp">
      <ToDoHeader />
      <div className="ToDoApp-layout">
        <ToDoList className="ToDoApp-list" />
        <ToDoDetail selectedTask={selectedTask} className="git stToDoApp-detail" />
      </div>
    </div>
  );
}

export default App;
