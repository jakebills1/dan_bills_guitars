import React from 'react';
import {Grid, Image, } from 'semantic-ui-react';
const Guitar = ({ id, name, price, description, pictures}) => {
  return (
    <Grid.Column key={id}>
      <div>{name}</div>
      <div>{price}</div>
      <div>{description}</div>
    </Grid.Column>
      
  );
}
export default Guitar;
