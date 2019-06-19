import React, { useState, useEffect } from "react";
import axios from "axios";
import { Segment, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
const Dashboard = () => {
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
    // lists guitars available for sale, with options to delete or edit details

    return availableGuitars.map(gtr => (
      <Segment key={gtr.id}>
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
      </Segment>
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
      <Segment key={msg.id}>
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
      </Segment>
    ));
  };
  return (
    <div
      style={{
        backgroundColor: "#bd9476",
        padding: "20px 5px 0 5px",
        height: "auto",
        display: "flex", 
        justifyContent: "space-evenly"

      }}
    >
      <div >
        <h1>Guitars listed for sale</h1>
        <Segment.Group>{listAvailableGuitars()}</Segment.Group>
      </div>
      <div>
        <h1>Recent Messages</h1>
        <Segment.Group>{listMessages()}</Segment.Group>
      </div>
    </div>
  );
};
export default Dashboard;
