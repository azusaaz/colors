import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import Form from '../Components/Form';

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

describe('emailValidation', () => {
  it('invalid format cannot pass the test',() =>{
    const wrapper = mount(<Form/>,{ attachTo: window.domNode });
    expect(wrapper.instance().emailValidation("aaa@a@aa.com")).toBeFalsy();
  })
});

describe('phoneValidation', () => {
  it('invalid format cannot pass the test',() =>{
    const wrapper = mount(<Form/>,{ attachTo: window.domNode });
    expect(wrapper.instance().phoneValidation("+1-111-111-11-11")).toBeFalsy();
  })

  it('not +1 number cannot pass the test',() =>{
    const wrapper = mount(<Form/>,{ attachTo: window.domNode });
    expect(wrapper.instance().phoneValidation("+8 111 111 11 11")).toBeFalsy();
  })
});

describe('colorValidation', () => {
  
  it('lowercase color cannot pass the test',() =>{
    const testColors={
      BLACK: 0,
      BLUE: 0,
      RED: 0,
      GREEN:0
    }
    const wrapper = mount(<Form colors={testColors} />,{ attachTo: window.domNode });
    expect(wrapper.instance().colorValidation("Black")).toBeFalsy();
  })

  it('unexpected color cannot pass the test',() =>{
    const testColors={
      BLACK: 0,
      BLUE: 0,
      RED: 0,
      GREEN:0
    }
    const wrapper = mount(<Form colors={testColors} />,{ attachTo: window.domNode });
    expect(wrapper.instance().colorValidation("YELLOW")).toBeFalsy();
  })
});

// it('valid input update state',() =>{

//   const testInput={
//     email: 'test@test.com',
//     phone: '+1 111 111 11 11',
//     color: 'BLUE',
//   }
//   const testColors={
//     BLACK: 0,
//     BLUE: 0,
//     RED: 0,
//     GREEN:0
  
//   }

//   const setInput = jest.fn();
//   const  setColors = jest.fn();
//   const setCurrentPage  = jest.fn();


//   const wrapper = mount(<Form input={testInput} colors={testColors} setInput={setInput} setColors={setColors} setCurrentPage={setCurrentPage}/>,{ attachTo: window.domNode });


//   wrapper.find('#submit-btn').simulate('click');

//   //  expect(result.find(Form).length).toBe(0);
//   //  expect(result.find(Report).length).toBe(1);

// })
