import React from 'react';
import { connect } from 'react-redux';
import { Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

import { setString } from '../../redux/search/search.actions';

const SearchBar = ({handleChange}) => (
  <Form className='search-bar' onChange={handleChange}>
    <Form.Group md="4" controlId="validationCustomUsername">
      <Form.Label>Search teachers and sanghas...</Form.Label>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="search"
          aria-describedby="inputGroupAppend"
          required
        />
        <InputGroup.Append>
          <InputGroup.Text id="inputGroupAppend"><FaSearch/></InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </Form.Group>
  </Form>
)

const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => dispatch(setString(event.target.value))
})

export default connect(null, mapDispatchToProps)(SearchBar);