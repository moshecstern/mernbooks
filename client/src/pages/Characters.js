import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import SearchResults from "../components/SearchResults";

class Characters extends Component {
  state = {
    characters: [],
    name: "",
    link: "",
    img: "",
    info: "",
    series: [],
    volumes: [],
    results: [],
    hero: ""
  };
  componentDidMount() {
    this.loadCharacters();
    this.loadSeries();
    this.runheroinfo();
  }
  loadCharacters = () => {
    API.getCharacters()
      .then(res => {
        this.setState({ characters: res.data, name: "", info: "", link: "" });
      })
      .catch(err => console.log(err));
  };
  loadSeries = () => {
    API.getSeries()
      .then(res => {
        this.setState({ series: res.data });
      })
      .catch(err => console.log(err));
  };
  getseriesbyid = id => {
    API.getSeriesByid(id)
      .then(res => {
        this.setState({ volumes: res.data });
      })
      .catch(err => console.log(err));
  };
  getseriesbyname = () => {
    API.findCharacterBySeries()
      .then(res => {
        this.setState({ volumes: res.data });
      })
      .catch(err => console.log(err));
  };
  deleteCharacter = id => {
    API.deleteCharacter(id)
      .then(res => this.loadCharacters())
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.info) {
      API.saveCharacter({
        name: this.state.name,
        link: this.state.link,
        info: this.state.info
      })
        .then(res => this.loadCharacters())
        .catch(err => console.log(err));
    }
  };
  runheroinfo = () => {
    API.getheroinfo()
      .then(res => {
        this.setState({ results: res.data });
        console.log(res.data);
        console.log(res.data.results[0]);
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Story lines</h1>
            </Jumbotron>
            {this.state.series.length ? (
              <List>
                {this.state.series.map(series => (
                  <ListItem key={series.volumes.vol}>
                    {series.name} by {series.series}
                    {series.volumes.map(vol => (
                      <ListItem key={vol.vol}>
                        <p>{vol}</p>
                      </ListItem>
                    ))}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>characters</h1>
            </Jumbotron>
            {this.state.characters.length ? (
              <List>
                {this.state.characters.map(character => (
                  <ListItem
                    key={character._id}
                    onChange={this.runheroinfo}
                    eachcharacter={character.name}
                    onclick={this.getseriesbyname}
                  >
                    <Link to={"/character/" + character._id}>
                      <strong>
                        {character.name} by {character.info}:
                        <SearchResults
                          onChange={this.runheroinfo(character.name)}
                          results={this.state.results}
                        />
                        {console.log(character.series)}
                      </strong>
                    </Link>
                    {character.series.map(series => (
                      <Link to={`/api/series/${series}/${character.name}`}>
                        {series}
                      </Link>
                    ))}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Characters;
