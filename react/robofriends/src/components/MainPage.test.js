import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it('renders MainPage without crashing', () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});
