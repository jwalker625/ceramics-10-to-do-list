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
    render(<App/>);

    const addNewTaskButton = screen.getByRole('button', { name: '+ New Task' });

    expect(addNewTaskButton).toBeInTheDocument();
  });

  it('renders the to-do list detail card', () => {
    render(<App />);

    const detailCardElement = screen.getByText(/Get Started/i);

    expect(detailCardElement).toBeInTheDocument();
  });

  // describe('Detail Card', () => {
  //   it('renders  when no task is selected', async () => {
  //     const user = userEvent.setup();
  //     render(<App/>);
  //
  //     const addNewTaskForm = screen.queryByText(/Add New Task/i);
  //
  //     expect(addNewTaskForm).not.toBeInTheDocument();
  //   });
  // });

  // it('opens the Add New Task form when the add new task button is clicked', async () => {
  //   const user = userEvent.setup();
  //   render(<App />);
  //
  //   const addNewTaskButton = await screen.findByRole('button', { name: '+ New Task' });
  //   await user.click(addNewTaskButton);
  //
  //   const addNewTaskForm = await screen.findByText(/Add New Task/i);
  //
  //   expect(addNewTaskForm).toBeInTheDocument();
  // });
});
