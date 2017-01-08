import { HomePage } from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<HomePage />', () => {
  it('<HomePage />', () => {
    const props = {
    isAuthenticated:true,
    selectName:'name'
  }

    const renderedComponent = shallow(
      <HomePage  {...props} />
    );
    expect(
      renderedComponent.find("h2").node
    ).toExist();
  });
});
