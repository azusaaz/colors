
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Header from '../Components/Header';

configure({adapter: new Adapter()});


it('expect to render Header component',() =>{
  expect(shallow(<Header/>).length).toEqual(1);
})
