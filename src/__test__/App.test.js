
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount, render } from 'enzyme';
import App from '../Containers/App';
import Header from '../Components/Header';
import Form from '../Components/Form';
import Report from '../Components/Report';

configure({adapter: new Adapter()});





it('Header and Form page appear at the initial', () => {

  const wrapper = shallow(<App />);

  expect(wrapper.find(Header).length).toBe(1);
  expect(wrapper.find(Form).length).toBe(1);
  expect(wrapper.find(Report).length).toBe(0);
});

it('Header and Report page appear after state change', () => {

  const wrapper = shallow(<App />);

  wrapper.setState({
    currentPage: 'report',
  });

  expect(wrapper.find(Header).length).toBe(1);
  expect(wrapper.find(Form).length).toBe(0);
  expect(wrapper.find(Report).length).toBe(1);
});