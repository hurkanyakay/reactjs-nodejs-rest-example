import { Login } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import {mount} from 'enzyme';
import React from 'react'; 

describe('<Login />', () => {
  it('<Login />', () => {
    const props = {
    location:{query:{redirect:'/'}}
  }

    const renderedComponent = shallow(
      <Login  {...props} />
    );
    expect(
      renderedComponent.find("button").node
    ).toExist();
  });
});
