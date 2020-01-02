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
 async componentDidMount() {
    // this.loadMySeries();
    // this.loadCharacters()
    this.loadMyCharacter()
    this.render()
    // this.refresh();
  }
  loadCharacters = () => {
    if(!this.state.character.length){
console.log("gettin all characters")
      API.getCharacters()
      .then(res => {
        //console.log(res);
        this.setState({ characters: res.data, name: "", info: "", link: "" })
      }
      )
      .catch(err => console.log(err));
    } else{
      console.log("characters.length has data!")
      console.log(this.state.character)
    }
  };
//   refresh = () => {
//     this.setState({state: this.state})
//     this.forceUpdate();
// }

  async loadMyCharacter() {
   await API.getCharacter(this.props.match.params.id)
      .then(res => this.setState({ character: res.data })
      )
      .catch(err => console.log(err));
  };
  loadMySeries = () => {
    API.findCharacterBySeries(this.props.match.params.charactername, this.props.match.params.seriesname)
      .then(res => this.setState({ series: res.data })
      )
      .catch(err => console.log(err));
  };
  _renderObject(){
    const {character} = this.props;
    return Object.entries(character.series).map(([key, value], i) => {
        return (
            <div key={key}>
                {this.state.character}
            </div>
        )
    })
}


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            {/* {this.state.character.length ? ( */}
              {/* <List> */}

              { console.log(this.state.character) }
                {this.state.character.name}, 
                {this.state.character.series},
                {/* {this._renderObject()} */}
              {/* {this.state.character.series.map((value, i) =><div class="row" key={i}></div>)} */}

                {/* {this.state.character.series.map(item => ( */}
                  {/* <ListItem key={this.state.character.series> */}
                    {/* <Link to={"/series/"+ vol.seriesname+"/" character}> */}
                      
                        {/* {this.state.character.series.map(vol => ( */}
                         {/* <h2>
                           {vol.vol}
                         </h2>
                        ))} */}
                        {/* {this.state.character.series} */}
                        {/* <br></br>
                        {vol.series} */}
                        {/* {console.log(item)} */}
                      
                    {/* </Link> */}
                    {/* <DeleteBtn onClick={() => this.deletecharacter(character._id)} /> */}
                    {/* {character.series.map(series => <Link to={`/api/series/${series}/${character.name}`}>{series}</Link>)} */}
                    {/* {character.series.map(series => {series})} */}
                    
                  {/* </ListItem> */}
                {/* ))} */}
             
              {/* </List> */}
             {/* // ) : (
            //   <h3>No Results to Display</h3>
            // )} */}
{this.state.character.length ? (
<List onChange={this.loadMyCharacter}>
                {this.state.character.map(character => (
                  <ListItem key={character._id} onChange={this.loadMyCharacter}eachcharacter={character.name} onclick={this.getseriesbyname}>
                    <Link to={"/character/" + character._id}>
                      <strong>
                        {character.name} by {character.info}:
                        {/* <SearchResults onChange={this.runheroinfo(character.name)} results={this.state.results} /> */}

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


