import React from 'react'
import { shallow } from 'enzyma'
import AddComment from './AddComment'

describe('AddComment', () => {
  it('onSubmit ', () => {
    const handleCommentSubmit = jest.fn();
    const component = shallow(<Input   onChange={(e) => this.setState({comment: e.target.value})}/> )
  })
})
