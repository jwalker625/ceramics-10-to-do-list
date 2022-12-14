import ToDoDetail from '../ToDoDetail';
import { describe, it, expect } from 'vitest';
import { render, screen, waitForElementToBeRemoved, within } from '@testing-library/react';
import * as MockDate from "mockdate";
import userEvent from "@testing-library/user-event";

describe('ToDoDetail', () => {
  beforeEach(() => {
    MockDate.reset();
  });

  it('renders default content suggesting a user\'s possible actions', () => {
    render(<ToDoDetail />);

    const defaultElement = screen.getByText(/Get Started/i);

    expect(defaultElement).toBeInTheDocument();
  });

  it('renders the Add New Task form when it receives a true isNewTask prop', () => {
    render(<ToDoDetail isNewTask={true} />);

    const addNewTaskForm = screen.getByText(/Add New Task/i);

    expect(addNewTaskForm).toBeInTheDocument();
  });

  describe('Task Detail', () => {
    it('renders the Task Detail card and the task title when it receives a selectedTask', async () => {
      const selectedTask = {
        title: 'Test Task'
      };
      render(<ToDoDetail selectedTask={ selectedTask }/>);

      const taskDetailElement = await screen.findByTestId('to-do-detail-container');

      expect(taskDetailElement).toBeInTheDocument();
      expect(taskDetailElement).toHaveTextContent(selectedTask.title);
    });

    it('renders the task description when it receives a selectedTask with a description', async () => {
      const selectedTask = {
        title: 'Test Task',
        description: 'The description for this task.'
      };
      render(<ToDoDetail selectedTask={ selectedTask }/>);

      const taskDetailElement = await screen.findByTestId('to-do-detail-container');

      expect(taskDetailElement).toHaveTextContent(selectedTask.description);
    });

    it('renders the task deadline when it receives none', async () => {
      MockDate.set(new Date());
      const selectedTask = {
        title: 'Test Task',
        deadline: new Date(2023, 0, 1, 12, 30)
      };
      render(<ToDoDetail selectedTask={ selectedTask }/>);

      const taskDetailElement = await screen.findByTestId('to-do-detail-container');

      expect(taskDetailElement).toHaveTextContent('12:30pm on Jan 1, 2023');
    });
  });

  describe('Edit Task', () => {
    it('renders the Edit button when a selectedTask is received', async () => {
      const selectedTask = {
        title: 'Test Task'
      };
      render(<ToDoDetail selectedTask={ selectedTask }/>);

      const taskDetailElement = await screen.findByTestId('to-do-detail-container');
      const editButton = await within(taskDetailElement).findByRole('button', { name: 'Edit' })

      expect(editButton).toBeInTheDocument();
    });

    it('opens the Edit Task form when the Edit button is clicked', async () => {
      const user = userEvent.setup();
      const selectedTask = {
        title: 'Test Task'
      };
      render(<ToDoDetail selectedTask={ selectedTask }/>);

      const taskDetailElement = await screen.findByTestId('to-do-detail-container');
      const editButton = await within(taskDetailElement).findByRole('button', { name: 'Edit' })
      await user.click(editButton);
      console.log(taskDetailElement.innerHTML);
      console.log(taskDetailElement.innerText);

      const editTaskForm = await within(taskDetailElement).findByText(/Edit Task/i);

      expect(editTaskForm).toBeInTheDocument();
    });
  });
})
