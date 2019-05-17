import React from 'react';
import {Grid, Image, } from 'semantic-ui-react';
const Guitar = ({ name, price, description, pictures}) => {
  return (
    <Grid.Column>
      <div>{name}</div>
      <div>{price}</div>
      <div>{description}</div>
      <Image src={pictures[0].url} />
    </Grid.Column>
  );
}
export default Guitar;
