import App from '../App';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('App Integration Tests', () => {
  it('renders the header of the app', () => {
    render(<App />);

    const headerElement = screen.getByText(/To Do App/i);

    expect(headerElement).toBeInTheDocument();
  });
});