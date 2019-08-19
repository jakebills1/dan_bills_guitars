import React, { useState } from "react";
import Flash from "../Flash";
import Dropzone from "./Dropzone";
import { Header } from "../Contact";
import {
  Textarea,
  Button,
  FormGroup,
  LeftInput,
  RightInput,
  Input
} from "../ContactForm";
import axios from "axios";
const NewGuitarForm = () => {
  // form state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  // dropzone state
  const [showDropzone, setShowDropzone] = useState(false);
  const [files, setFiles] = useState([]);
  const [id, setId] = useState("");
  // flash message state
  const [showFlash, setShowFlash] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
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
      axios
        .post(`/api/guitars/${id}/pictures`, data)
        .then(res => {
          setSuccess(true);
          setMessage("New Guitar Added!");
        })
        .catch(err => {
          setMessage("We have encountered a problem");
          setSuccess(false);
        });
      setShowFlash(true);
      setShowDropzone(false);
    }
  };
  return (
    <>
      {showDropzone ? (
        <>
          <Dropzone addFile={addFile} />
          <div style={{ textAlign: "center" }}>
            <Button color="brown" onClick={submitPictures}>
              Submit Pictures
            </Button>
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <Header>Add a new listing:</Header>
          <FormGroup>
            <LeftInput
              name="name"
              placeholder="Name..."
              onChange={e => setName(e.target.value)}
              required
            />
            <RightInput
              name="price"
              placeholder="Price..."
              onChange={e => setPrice(e.target.value)}
              required
            />
            <Input
              name="year"
              placeholder="Year..."
              onChange={e => setYear(e.target.value)}
              required
              style={{ marginLeft: "1%" }}
            />
          </FormGroup>
          <Textarea
            name="description"
            placeholder="Description..."
            onChange={e => setDescription(e.target.value)}
            required
          />
          <div style={{ textAlign: "center" }}>
            <Button>Submit</Button>
          </div>
        </form>
      )}
      {showFlash && <Flash success={success} message={message} />}
    </>
  );
};
export default NewGuitarForm;
