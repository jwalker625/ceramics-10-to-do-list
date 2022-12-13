
type ToDoDetailProps = {
  selectedTask: string
}

const ToDoDetail = (props: ToDoDetailProps) => {
  const { selectedTask } = props;

  if(!selectedTask) {
    return null;
  }

  return (
    <div className="ToDoDetail">
      <h2>Add New Task</h2>
    </div>
  );
}

export default ToDoDetail;
