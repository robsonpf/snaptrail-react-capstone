import React from 'react'
import { shallow } from 'enzyme'
import CommentDropDown from 'CommentDropDown'

const wrapper = shallow(<CommentDropDown/>)

describe(CommentDropDown, () => {
  it('renders whitout exploding', () => {
    expect(wrapper).to.have.length(1);
  })
})
