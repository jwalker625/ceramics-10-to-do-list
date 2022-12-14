import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ToDoList from "../ToDoList";

describe('ToDoList', () => {
  it('renders a button for adding new tasks in the to-do list', () => {
    render(<ToDoList />);

    const addNewTaskButton = screen.getByRole('button', { name: '+ New Task' });

    expect(addNewTaskButton).toBeInTheDocument();
  });
});
