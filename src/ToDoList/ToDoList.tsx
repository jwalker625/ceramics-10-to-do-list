import React from 'react';
import classNames from 'classnames';
import './ToDoList.css';

type ToDoListProps = {} & React.ComponentProps<'div'>;

const ToDoList = (props: ToDoListProps) => {
  const { className, ...otherProps } = props;

  return (
    <div {...otherProps} className={classNames(className, "ToDoList")}>
      <h2 data-testid="to-do-list">To-Do List</h2>
      <button>+ New Task</button>
    </div>
  );
}

export default ToDoList;
