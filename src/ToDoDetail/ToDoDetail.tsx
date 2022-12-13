import React from 'react';
import classNames from 'classnames';

type ToDoDetailProps = {
  isNewTask?: boolean,
  selectedTask: {
    title: string,
    description: string,
    deadline?: Date
  } | null
} & React.ComponentProps<'div'>;

const ToDoDetail = (props: ToDoDetailProps) => {
  const { isNewTask, selectedTask, className, ...otherProps } = props;

  if(isNewTask) {
    return (
      <div {...otherProps} className={classNames(className, "ToDoDetail")}>
        <h2>Add New Task</h2>
      </div>
    );
  }

  if(!selectedTask) {
    return (
      <div {...otherProps} className={classNames(className, "ToDoDetail")}>
        <h2>Get Started</h2>
      </div>
    );
  }

  return (
    <div {...otherProps} className={classNames(className, "ToDoDetail")}>
      <h2>Add New Task</h2>
    </div>
  );
}

export default ToDoDetail;
