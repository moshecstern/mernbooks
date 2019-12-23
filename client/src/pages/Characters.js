import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Characters extends Component {
  state = {
    characters: [],
    name: "",
    link: "",
    img: "",
    info: "",
    series: []
  };

  componentDidMount() {
    this.loadCharacters();
  }

  loadCharacters = () => {
    API.getCharacters()
      .then(res => this.setState({ Characters: res.data, name: "", info: "", link: "" })
      )
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
        info: this.state.info,
        link: this.state.link
      })
        .then(res => this.loadCharacters())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What characters Should I Read?</h1>
            </Jumbotron>
            <form>
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
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>characters On My List</h1>
            </Jumbotron>
            {this.state.characters.length ? (
              <List>
                {this.state.characters.map(character => (
                  <ListItem key={character._id}>
                    <Link to={"/character/" + character._id}>
                      <strong>
                        {character.name} by {character.info}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deletecharacter(character._id)} />
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
