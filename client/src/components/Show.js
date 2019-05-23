import React from 'react';
import { Header, Image, } from 'semantic-ui-react';
const Show = (props) => {
  const { location: { state: { pictures, name, price, description }}} = props;

  return (
    <>
      <Header as="h1">{name}</Header>
      <Header as="h2">${parseFloat(price).toFixed(2)}</Header>
      <p>{description}</p>
      <Image.Group size="large">
        { pictures.map( pic => <Image src={pic.url} /> ) }
      </Image.Group>
    </>
  );
}
export default Show;
