import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hellow/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link2', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hellow/i);
  expect(linkElement).toBeInTheDocument();
});



test('renders learn react link3', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hellow/i);
  expect(linkElement).toBeInTheDocument();
});