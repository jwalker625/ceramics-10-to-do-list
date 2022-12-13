import React from 'react';
import './App.css';
import ToDoHeader from '../ToDoHeader';
import ToDoList from '../ToDoList';
import ToDoDetail from '../ToDoDetail';

const App = () => {
  const [selectedTask, setSelectedTask] = React.useState(null);

  return (
    <>
      <ToDoHeader />
      <div className="ToDoApp">
        <ToDoList className="ToDoApp-column" />
        <ToDoDetail selectedTask={selectedTask} className="ToDoApp-column" />
      </div>
    </>
  );
}

export default App;
