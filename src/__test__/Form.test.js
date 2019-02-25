import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import Form,{emailValidation} from '../Components/Form';

configure({adapter: new Adapter()});

beforeAll(() => {
  const div = document.createElement('div');
  window.domNode = div;
  document.body.appendChild(div);
})

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock

it('expect to render Form component',() =>{
  expect(shallow(<Form/>).length).toEqual(1);
})


it('valid input update state',() =>{

  const testInput={
    email: 'test@test.com',
    phone: '+1 111 111 11 11',
    color: 'BLUE',
  }
  const testColors={
    colors: {
      BLACK: 0,
      BLUE: 0,
      RED: 0,
      GREEN:0
    }
  }

  const setInput = jest.fn();
  const  setColors = jest.fn();
  const setCurrentPage  = jest.fn();


  const wrapper = mount(<Form input={testInput} colors={testColors} setInput={setInput} setColors={setColors} setCurrentPage={setCurrentPage}/>,{ attachTo: window.domNode });


  wrapper.find('#submit-btn').simulate('click');

  //  expect(result.find(Form).length).toBe(0);
  //  expect(result.find(Report).length).toBe(1);

})
