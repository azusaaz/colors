
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Report from '../Components/Report';

configure({adapter: new Adapter()});

it('expect render a report with passed props', () => {
  const testColors = {
  BLACK: 5,
  BLUE: 0,
  RED: 0,
  GREEN:0
}

expect(shallow(<Report colors={testColors}/>)).toMatchSnapshot();

});