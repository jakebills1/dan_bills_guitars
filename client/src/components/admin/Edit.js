import React, { useState, } from 'react';
import { Form, Header, } from 'semantic-ui-react'
const Edit = () => {
  const [ inputs, SetInputs] = useState({ })
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input
        />
        <Form.Input />
      </Form.Group>
      <Form.TextArea />
      <Form.Button>Submit</Form.Button>
    </Form>
  )
}
export default Edit;