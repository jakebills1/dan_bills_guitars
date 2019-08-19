import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NewGuitarForm from "./admin/NewGuitarForm";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { Button } from "semantic-ui-react";
import { Box } from "./Contact";
import styled from "styled-components";
const Dashboard = () => {
  const width = useWindowWidth();
  const [availableGuitars, setAvailableGuitars] = useState([]);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios
      .get("/api/guitars")
      .then(res => setAvailableGuitars(res.data))
      .catch(res => console.log(res));
    axios
      .get("/api/messages")
      .then(res => setMessages(res.data))
      .catch(res => console.log(res));
  }, []);
  const listAvailableGuitars = () => {
    return availableGuitars.map(gtr => (
      <MySegment key={gtr.id}>
        <div>
          <strong>Name:</strong> {gtr.name}
        </div>
        <div>
          <strong>Price:</strong> ${parseFloat(gtr.price).toFixed(2)}
        </div>
        <div>
          <strong>Description:</strong> {gtr.description}
        </div>
        <Button.Group>
          <Button
            color="blue"
            as={Link}
            to={{ pathname: `/guitars/edit/${gtr.id}`, state: { ...gtr } }}
          >
            Edit
          </Button>
          <Button color="red" onClick={() => deleteListing(gtr.id)}>
            Delete
          </Button>
        </Button.Group>
      </MySegment>
    ));
  };
  const deleteListing = id => {
    axios
      .delete(`/api/guitars/${id}`)
      .then(console.log(res => console.log(res)))
      .catch(console.log(res => console.log(res)));
    const cpy = availableGuitars.filter(gtr => gtr.id !== id);
    setAvailableGuitars(cpy);
  };
  const deleteMessage = id => {
    axios
      .delete(`/api/messages/${id}`)
      .then(console.log(res => console.log(res)))
      .catch(console.log(res => console.log(res)));
    const cpy = messages.filter(msg => msg.id !== id);
    setMessages(cpy);
  };
  const listMessages = () => {
    return messages.map(msg => (
      <MySegment key={msg.id}>
        <div>
          <strong>From: </strong> {msg.name}
        </div>
        <div>
          <strong>About: </strong> {msg.subject}
        </div>
        <div>
          <strong>Message: </strong>
          {msg.body}
        </div>
        <Button.Group>
          <Button color="green">
            <a
              href={`mailto:${msg.email}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              Reply
            </a>
          </Button>
          <Button color="red" onClick={() => deleteMessage(msg.id)}>
            Delete
          </Button>
        </Button.Group>
      </MySegment>
    ));
  };
  return (
    <Box>
      <NewGuitarForm />
      <FlexColumnWrapper>
        <div>
          <h1>Guitars listed for sale</h1>
          <FlexColumnWrapper>{listAvailableGuitars()}</FlexColumnWrapper>
        </div>
        <div style={{ marginTop: "2em" }}>
          <h1>
            {messages.length > 0 ? "Recent Messages" : "No Recent Messages"}
          </h1>
          <FlexColumnWrapper>{listMessages()}</FlexColumnWrapper>
        </div>
      </FlexColumnWrapper>
    </Box>
  );
};
export default Dashboard;
const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const MySegment = styled.div`
  width: 100%;
  padding: 1.5%;
  background-color: #fff;
  border-radius: 0.2em;
`;
