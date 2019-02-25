import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import Form from '../Components/Form';
import App from '../Containers/App';
import Report from '../Components/Report';

configure({adapter: new Adapter()});


it('expect to render Form component',() =>{
  expect(shallow(<Form/>).length).toEqual(1);
})

it('valid input pass checks',() =>{

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

  const result = shallow(<App />);

  const wrapper = shallow(<Form input={testInput} colors={testColors} setInput={setInput} setColors={setColors} setCurrentPage={setCurrentPage}/>);

  window.onload = function() {
    wrapper.find('[id="submit-btn"]').simulate('click');
}
window.onload = function() {
  expect(result.find(Form).length).toBe(1);
expect(result.find(Report).length).toBe(1);
}

})
