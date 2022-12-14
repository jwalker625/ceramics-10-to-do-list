import React from 'react';
import classNames from 'classnames';
import './ToDoDetail.css';

type ToDoDetailProps = {
  isNewTask?: boolean,
  selectedTask?: {
    title: string,
    description: string,
    deadline?: Date
  }
} & React.ComponentProps<'div'>;

const ToDoDetailContainer = (props: React.ComponentProps<'div'>) => {
  const { className, children, ...otherProps } = props;

  return (
    <div {...otherProps} className={classNames(className, "ToDoDetail")}>
      {children}
    </div>
  );
}

const ToDoDetail = (props: ToDoDetailProps) => {
  const { isNewTask, selectedTask, className, ...otherProps } = props;

  if(isNewTask) {
    return (
      <ToDoDetailContainer {...otherProps}>
        <h2>Add New Task</h2>
      </ToDoDetailContainer>
    );
  }

  if(!selectedTask) {
    return (
      <ToDoDetailContainer {...otherProps}>
        <h2>Get Started</h2>
      </ToDoDetailContainer>
    );
  }

  return (
    <ToDoDetailContainer {...otherProps}>
      <h2>Add New Task</h2>
    </ToDoDetailContainer>
  );
}

export default ToDoDetail;
