import React from 'react';
import { render } from '@testing-library/react';
import MovieList from '../components/movieList/MovieList';

test('renders correctly', () => {
  const { container } = render(<MovieList />);
  expect(container).toMatchSnapshot();
});
