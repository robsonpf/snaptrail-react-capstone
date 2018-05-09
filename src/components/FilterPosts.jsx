import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { filterByLocation } from '../redux/actions/filter'

class FilterPosts extends Component {
  handleFilter = (e) => {
    e.preventDefault()
    this.props.filterByLocation(e.target.value)
  }

  render () {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="filter-field" className="mr-sm-2">
            Filter by location:
          </Label>
          <Input type="text"
                name="location"
                id="filter-field"
                onChange={e => this.handleFilter}
            />
        </FormGroup>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ filterByLocation }, dispatch)

export default connect(null, mapDispatchToProps)(FilterPosts)
