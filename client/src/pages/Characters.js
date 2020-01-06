import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import SearchResults from "../components/SearchResults";
import Notes from "../components/Notes";

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
    // this.getseriesbyname()
    this.runheroinfo();
  }

  loadCharacters = () => {
    API.getCharacters()
      .then(res => {
        //console.log(res);
        this.setState({ characters: res.data, name: "", info: "", link: "" })
      }
      )
      .catch(err => console.log(err));
  };

  loadSeries = () => {
    API.getSeries()
      .then(res => {
        this.setState({ series: res.data })
      })
      .catch(err => console.log(err));
  }

  getseriesbyid = (id) => {
    API.getSeriesByid(id)
    .then(res => {
      this.setState({volumes: res.data})
    })
    .catch(err => console.log(err));

  }

  getseriesbyname = () => {
    API.findCharacterBySeries()
      .then(res => {
        this.setState({ volumes: res.data })
      })
      .catch(err => console.log(err));
  }

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
    // this.setState({hero: this.eachcharacter});
    // console.log("this character is !!!!!!")
    // console.log(this.eachcharacter);
    // console.log("this character is !!!!!!")
    API.getheroinfo()
    .then(res => {
      //console.log(res);
      this.setState({ results: res.data })
      console.log(res.data);
      console.log(res.data.results[0])
    }
    )
    .catch(err => console.log(err));
  }

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
                    {/* {this.runheroinfo(series.name)} */}
                    {/* <strong>Series
                        </strong> */}
                    {series.volumes.map(vol => (
                      <ListItem key={vol.vol}>
                        <p>
                          {vol}
                          {/* {vol.vol} */}
                        </p>
                      </ListItem>
                    ))}

                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}

            {/* <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="name (required)"
              />
              <Input
                value={this.state.info}
                onChange={this.handleInputChange}
                name="info"
                placeholder="info (required)"
              />
              <TextArea
                value={this.state.link}
                onChange={this.handleInputChange}
                name="link"
                placeholder="link (Optional)"
              />
              <FormBtn
                disabled={!(this.state.info && this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Submit character
              </FormBtn>
            </form> */}
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>characters</h1>
            </Jumbotron>
            {this.state.characters.length ? (
              <List>
                {this.state.characters.map(character => (
                  <ListItem key={character._id} onChange={this.runheroinfo}eachcharacter={character.name} onclick={this.getseriesbyname}>
                    <Link to={"/character/" + character._id}>
                      <strong>
                        {character.name} by {character.info}:
                        <SearchResults onChange={this.runheroinfo(character.name)} results={this.state.results} />

                        {/* <br></br>
                        {character.series} */}
                        {console.log(character.series)}
                      </strong>
                    </Link>
                    
                    {/* <DeleteBtn onClick={() => this.deletecharacter(character._id)} /> */}
                    {/* {character.series.map(series => <Link to={`/api/series/${series}/${character.name}`}> {series}, </Link>)} */}
                    {/* {character.series.map(series => <Link to={`/api/series/${series.id}`}> {series}, </Link>)} */}
                    {/* <Link to={"/series/" + series._id}> */}

                    {character.series.map(series => <Link to={`/api/series/${series}/${character.name}`}> {series}, </Link>)}

                    {/* {character.series.map(series => {series})} */}

                  </ListItem>
                ))}
                {/* {this.state.characters.map(characterarray => (
                  <ListItem key={characterarray.series}>
                  <Link to={"/character/" + characterarray._id}>
                      <strong>
                          {characterarray.series}
                        
                      </strong>
                    </Link>
                  </ListItem>
                ))} */}
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
