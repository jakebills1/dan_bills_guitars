import React, { useState } from "react";
import Dropzone from "./Dropzone";
import { Form } from "semantic-ui-react";
import axios from "axios";
const NewGuitarForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [showDropzone, setShowDropzone] = useState(false);
  const [files, setFiles] = useState([]);
  const [id, setId] = useState("");
  const addFile = file => setFiles([file, ...files]);
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/guitars", { name, price, description, year })
      .then(res => setId(res.data.id))
      .catch(err => console.log(err));
    setName("");
    setPrice("");
    setDescription("");
    setYear("");
    setShowDropzone(true);
  };
  const submitPictures = () => {
    if (files.length > 0) {
      let data = new FormData();
      files.map((file, index) => {
        return data.append(`file${index}`, file);
      });
      axios.post(`/api/guitars/${id}/pictures`, data);
    }
  };
  return (
    <>
      {showDropzone ? (
        <>
          <Dropzone addFile={addFile} />
          <button onClick={submitPictures}>Submit Pictures</button>
        </>
      ) : (
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
      )}
    </>
  );
};
export default NewGuitarForm;
