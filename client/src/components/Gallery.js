import React, { Component, } from 'react';
import { Grid, Image, } from 'semantic-ui-react';
import axios from 'axios';
import Guitar from './Guitar';
class Gallery extends Component {
  // will index all pictures of guitars in a grid
  state = { guitars : [], };
  componentDidMount() {
    axios.get("/api/guitars")
      .then( res => this.setState({ guitars: res.data }))
      .catch( err => console.log(err))
  }
  renderGuitars = () => {
    this.state.guitars.map( gtr => {
      return <Guitar GuitarInfo={gtr} /> 
    }
    )
  }
  render() {
    return (
      <Grid>
        <Grid.Row>
          {this.renderGuitars()}
        </Grid.Row>
      </Grid>
    )
  }
}
export default Gallery;
