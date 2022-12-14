import ToDoDetail from '../ToDoDetail';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('ToDoDetail', () => {
  it('renders default content suggesting a user\'s possible actions', () => {
    render(<ToDoDetail selectedTask={null} />);

    const defaultElement = screen.getByText(/Get Started/i);

    expect(defaultElement).toBeInTheDocument();
  });

  it('renders the Add New Task form when it receives a true isNewTask prop', () => {
    render(<ToDoDetail isNewTask={true} selectedTask={null} />);

    const defaultElement = screen.getByText(/Add New Task/i);

    expect(defaultElement).toBeInTheDocument();
  })
})
