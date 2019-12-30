import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

class Detail extends Component {
  state = {
    character: [],
    volumes: [],
    series: [],
    singlevolume: [],
  };
  // Add code to get the Character with an _id equal to the id in the route param
  // e.g. http://localhost:3000/Characters/:id
  // The Character id for this route can be accessed using this.props.match.params.id
  componentDidMount() {
    this.loadMySeries();
    // this.loadMyCharacter();
  }

  // loadMyCharacter = () => {
  //   API.getCharacter(this.props.match.params.id)
  //     .then(res => this.setState({ character: res.data })
  //     )
  //     .catch(err => console.log(err));
  // };
  loadMySeries = () => {
    API.findCharacterBySeries(this.props.match.params.charactername, this.props.match.params.seriesname)
      .then(res => this.setState({ series: res.data })
      )
      .catch(err => console.log(err));
  };



  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              {console.log(this.state.series)}
            {this.state.series.length ? (
              <List>
                {this.state.series.map(vol => (
                  <ListItem key={vol._id}>
                    {/* <Link to={"/series/"+ vol.seriesname+"/" character}> */}
                      <strong>
                        {vol.name}
                        {/* <br></br>
                        {vol.series} */}
                        {console.log(vol.name)}
                      </strong>
                    {/* </Link> */}
                    {/* <DeleteBtn onClick={() => this.deletecharacter(character._id)} /> */}
                    {/* {character.series.map(series => <Link to={`/api/series/${series}/${character.name}`}>{series}</Link>)} */}
                    {/* {character.series.map(series => {series})} */}
                    
                  </ListItem>
                ))}
             
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Characters</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;


{/* <h1>
HELLO!
{console.log(this.state.volumes)}
{console.log(this.state.series.length)}
{console.log(this.state.volumes)}
{this.state.volumes.map(volume => (
  <p>{volume.seriesname}</p>
  <p>hello 2</p>
))}
</h1>
<List>
{this.state.volumes.map(volume => (
<ListItem onClick={this.loadMyCharacter}>

  <article>
    <h1>Synopsis</h1>
    <p>{volume}</p>
    <p>HIII!</p>

  </article>
</ListItem>
))}
</List> 
{console.log(this.state.volumes)} */}
