import React, { Component } from 'react'
import { Form, FormGroup } from 'reactstrap';
import { Input } from 'semantic-ui-react'
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
        <FormGroup className="mb-2 mr-sm-2 mt-2 mb-sm-4">
          <Input
            size='small'
            icon='search'
            placeholder='Enter a trail name'
            onChange={this.handleFilter}
            style={{ height: "30px", marginLeft: "10px" }}
          />
        </FormGroup>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ filterByLocation }, dispatch)

export default connect(null, mapDispatchToProps)(FilterPosts)
