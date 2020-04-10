import React from 'react';

import { Form, InputGroup } from 'react-bootstrap';

const SearchBar = ({handleChange}) => (
    <Form className='search-bar' onChange={handleChange}>
        <Form.Group md="4" controlId="validationCustomUsername">
          {/* <Form.Label>Username</Form.Label> */}
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="search"
              aria-describedby="inputGroupAppend"
              required
            />
            <InputGroup.Append>
              <InputGroup.Text id="inputGroupAppend">&#128269;</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
    </Form>
)

export default SearchBar;