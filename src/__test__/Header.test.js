import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Header from '../Components/Header';

configure({adapter: new Adapter()});


it('expect to render Header component',() =>{
  expect(shallow(<Header/>).length).toEqual(1);
})

it('expect to match snapshot',() =>{

  let testCurrentPage= 'form'
  expect(shallow(<Header currentPage={testCurrentPage}/>)).toMatchSnapshot();
})


const clickFn = jest.fn();


it('expect tab click call onclick', () => {
    const component = shallow(<Header setCurrentPage={clickFn} />);
    const getAttribute=()=>{return 'test'}
    component
      .find('#tab-form')
      .simulate('click',{target:{getAttribute}});
    expect(clickFn).toHaveBeenCalled();
});

