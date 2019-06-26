import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import axios from 'axios';
const NewGuitarForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/guitars", { name, price, description, year })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    setName("");
    setPrice("");
    setDescription("");
  }
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Add a new listing:</h1>
      <Form.Group widths="equal">
        <Form.Input
          name="name"
          placeholder="Name:"
          onChange={e => setName(e.target.value)}
          required
        />
        <Form.Input
          name="price"
          placeholder="Price:"
          onChange={e => setPrice(e.target.value)}
          required
        />
        <Form.Input
          name="year"
          placeholder="Year:"
          onChange={e => setYear(e.target.value)}
          required
        />
      </Form.Group>
      <Form.TextArea
        name="description"
        placeholder="Description..."
        onChange={e => setDescription(e.target.value)}
        required
      />
      <Form.Button>Submit Info & Add a Picture</Form.Button>
    </Form>
  );
};
export default NewGuitarForm;
