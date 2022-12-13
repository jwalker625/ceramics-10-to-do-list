import React from 'react';
import './App.css';
import ToDoHeader from '../ToDoHeader';
import ToDoList from '../ToDoList';
import ToDoDetail from '../ToDoDetail';

const App = () => {
  const [selectedTask, setSelectedTask] = React.useState('');

  return (
    <div className="ToDoApp">
      <ToDoHeader />
      <div className="ToDoApp-layout">
        <ToDoList />
        <ToDoDetail selectedTask={selectedTask} />
      </div>
    </div>
  );
}

export default App;
