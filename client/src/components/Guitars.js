import React from 'react';
import { Grid, } from 'semantic-ui-react';
import Guitar from './Guitar';
const Guitars = ({ guitars, }) => {
  const renderGuitars = () => { 
    return guitars.map(g => ( 
      <Grid.Column key={g.id}>
        <div>{g.name}</div>
        <div>{g.price}</div>
        <div>{g.description}</div>
      </Grid.Column>
    )
    )
  }
  return (
    <>
      <Grid>
        {renderGuitars()}
      </Grid>
    </>
  );
}
export default Guitars;
