import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    render(<Greeting />);
    const helloWorld = screen.getByText(/hello world/i);
    expect(helloWorld).toBeInTheDocument();
  });

  test('renders Good To See You if the button was NOT clicked', () => {
    render(<Greeting />);
    const text = screen.getByText(/good to see you/i);
    expect(text).toBeInTheDocument();
  });

  test('render Changed if the button was clicked', () => {
    render(<Greeting />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    const text = screen.getByText(/changed/i);
    expect(text).toBeInTheDocument();
  });

  test('does NOT render Good to see you if the button WAS clicked', () => {
    render(<Greeting />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    const text = screen.queryByText(/good to see you/i);
    expect(text).toBeNull();
  });
});
