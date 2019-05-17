import React, { Component, } from 'react';
import { Grid, } from 'semantic-ui-react';
import axios from 'axios';
class Whatever extends React.Component {
  // will index all pictures of guitars in a grid
  state = { guitars : [], };
  componentDidMount() {
    axios.get("/api/guitars")
      .then( res => setState({ guitars: res.data }))
      .catch( err => console.log(err))
  }
  renderGuitars = () => {
    this.state.guitars.map( gtr => <Grid.Column />)
  }
  render() {
    return (
      <Grid>
        <Grid.Row>
          {this.renderGuitars}
        </Grid.Row>
      </Grid>
    )
  }
}
export default Whatever;
