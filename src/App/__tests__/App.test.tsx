import App from '../App';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('App Integration Tests', () => {
  it('renders the header of the app', () => {
    render(<App />);

    const headerElement = screen.getByText(/To-Do List App/i);

    expect(headerElement).toBeInTheDocument();
  });

  it('renders the to-do list', () => {
    render(<App />);

    const toDoListElement = screen.getByTestId('to-do-list');

    expect(toDoListElement).toBeInTheDocument();
  });

  it('opens the Add New Task form when the add new task button is clicked', async () => {
    const user = userEvent.setup();
    render(<App/>);

    const addNewTaskButton = await screen.findByRole('button', { name: '+ New Task' });
    await user.click(addNewTaskButton);

    const addNewTaskForm = await screen.findByText(/Add New Task/i);

    expect(addNewTaskForm).toBeInTheDocument();
  });

  // it('renders the detail card when a to-do list item is selected', () => {
  //
  // });
});
