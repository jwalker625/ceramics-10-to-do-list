import React from 'react';
import classNames from 'classnames';
import './ToDoDetail.css';
import { format } from 'date-fns';

type ToDoDetailProps = {
  isNewTask?: boolean,
  selectedTask?: {
    title: string,
    description?: string,
    deadline?: Date
  }
} & React.ComponentProps<'div'>;

type ToDoDetailTaskContentProps = {
  selectedTask: {
    title: string,
    description?: string,
    deadline?: Date
  },
  handleOnEditClick: () => void
} & React.ComponentProps<'div'>;

const ToDoDetailContainer = (props: React.ComponentProps<'div'>) => {
  const { className, children, ...otherProps } = props;

  return (
    <div {...otherProps} className={classNames(className, "ToDoDetail")}>
      {children}
    </div>
  );
}

const ToDoDetailTaskContent = (props: ToDoDetailTaskContentProps) => {
  const { className, selectedTask, handleOnEditClick, ...otherProps } = props;

  const formattedDeadline = selectedTask.deadline ? format(selectedTask.deadline, "h':'mmaaa 'on' MMM d',' y") : '';

  return (
    <>
      <h2>Task Detail</h2>
      <div>Title: {selectedTask.title}</div>
      <div>Description: {selectedTask.description || ''}</div>
      <div>Deadline: {formattedDeadline}</div>
      <div>
        <button onClick={handleOnEditClick}>Edit</button>
      </div>
    </>
);
}

const ToDoDetail = (props: ToDoDetailProps) => {
  const { isNewTask, selectedTask, ...otherProps } = props;
  const [isBeingEdited, setIsBeingEdited] = React.useState(false);

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

  const handleOnEditClick = () => {
    setIsBeingEdited(true);
  }

  return (
    <ToDoDetailContainer data-testid="to-do-detail-container" {...otherProps}>
      {
        isBeingEdited
        ? <h2>Edit Task</h2>
        : <ToDoDetailTaskContent selectedTask={selectedTask} handleOnEditClick={handleOnEditClick} />
      }
    </ToDoDetailContainer>
  );
}

export default ToDoDetail;
