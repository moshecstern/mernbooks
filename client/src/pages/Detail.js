import React, { Component, useState } from "react";
import API from "../utils/API";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import { List, ListItem } from "../components/List";
import {
  Container,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Loading,
  Collapse,
  Paper,
  Typography
} from "@material-ui/core";

import useAxios from "axios-hooks";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import { ObjectId } from "mongoose";
import Modal from "../components/Modals";
import SimpleModal from "../components/Modals";
import SearchResults from "../components/SearchResults";

const Detail = (props) => {
  const [{ data: series, loading }, randomtext] = useAxios(
        // { url: "/api/series/"}
        { url: "/api/series/" + props.match.params.name}
       
  );
  console.log("this is a test");
  console.log(props)
  console.log(props.match.params.name);
  console.log(series)
  // const { location } = props;
  // const { query } = getParams(location);
  const [currentname, setCurrentname] = useState();
  //  {
  //   query: searchParams.get('query') || '',
  // };

  // const searchParams = newURLSearchParams(location.search)
console.log(currentname)
console.log("currentname")
const argvparams = window.location.pathname.split("/").slice(-1)[0];

  const [{ data, loading: dataLoading }, getData] = useAxios(
    { url: "/api/series/" + currentname },
    { manual: true }
 );


  const LoadChosenSeries = (name) => {
    setCurrentname(name)
    console.log(name)
    getData();
    // API.getseriesbyname(argvparams)
    //   .then(
    //     res => setCurrentname(res)
    //   )
    //   .catch(err => console.log(err));
  };
  // const  LoadChosenSeries = () => {
  //   API.getseriesbyname(this.props.match.name)
  //   .then(res => this.setState({ series: res.data })
  //   )
  //   .catch(err => console.log(err));
  // }

  // const serieshandler = name => () => {
  //   setCurrentname(name);
  //   console.log(name);
  //   getData();
  // };

  const getallseriesbycharacterName = () => {
    API.getallseriesbycharacter()
      .then(res => {
        this.setState({ series: res.data });
      })
      .catch(err => console.log(err));
  };

  const getseriesbyid = id => {
    API.getSeriesByid(id)
      .then(res => {
        this.setState({ volumes: res.data });
      })
      .catch(err => console.log(err));
  };

  const loadCharacters = () => {
    API.getCharacters()
      .then(res => {
        //console.log(res);
        this.setState({ characters: res.data, name: "", info: "", link: "" });
      })
      .catch(err => console.log(err));
  };

  const getseriesbyname = name => {
    API.getseriesbyname(name)
      .then(res => {
        // this.setState({ series: res.data });
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  const deleteCharacter = id => {
    API.deleteCharacter(id)
      .then(res => this.loadCharacters())
      .catch(err => console.log(err));
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  const handleFormSubmit = event => {
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
  // const tempCharacter = series.filter(item => item.character === argvparams);

  if (loading) {
    return <></>;
  }



  return (
    <>
      {/* <GridList cols={4}>
        {series.map(item => (
          <GridListTile key={item._id} onClick={getseriesbyname(item.name)}>

                <Link to={`/api/series//${item.name}`}>
                {item.character}
                {item.volumes}
                  </Link>
            <GridListTileBar
         
         
              title={<Link to={"/api/series/" + item.character}>{item.character}</Link>}
              

              classes={
                {
                    root: classes.titleBar,
                    title: classes.title
                }
              }
              actionIcon={
                <IconButton
                  aria-label={`star ${item.character}`}
                  onClick={serieshandler(item.series)}
                >
                  <FindInPageIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList> */}

      {/* working code  */}
      {/* {name   synopsis  volumes  extras} */}
      {/* {console.log(this.process.argv)} */}
{/* {add modal on click of vol. that takes in item.series + item.character+ vol. ... pass through to goodreads api and diplays results} */}
      { console.log( window.location.pathname.split("/").slice(-1)[0])}
      {console.log("current name")}
      {console.log(currentname)}
  {console.log(argvparams)}
  {/* {<div onClick={LoadChosenSeries(series.character)}> CLICK ME!</div>} */}
      {series.map(item => (
        <List key={item._id} >
          {item.character}, {item.name}, {item.synopsis}
          {item.volumes.map(vol => (
            <ListItem key={vol} >{vol}</ListItem>
          ))}
        </List>
      ))}
      {/* working code  */}

      {!currentname ? null : (
        <Paper>
          {series.map(item => (
            <Grid container key={item._id}>
              <Grid item>
                <Typography variant="h3">{}</Typography>
                {console.log(item)}
              </Grid>
              <Grid item>
                <Typography variant="h4"> Name {item.character}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4">series {item.series}</Typography>
              </Grid>
              {/* <Grid item container>
              <Grid item>
                <Typography variant="h4">Series</Typography>
                {characters.series.map(item => (
                  <Grid item>{item}</Grid>
                ))}
              </Grid>
            </Grid> */}
            </Grid>
          ))}
        </Paper>
      )}
    </>
  );
};

export default Detail;

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// // const Jumbotron = React.lazy(() =>
// // import( "../components/Jumbotron"));

// import API from "../utils/API";
// import { List, ListItem } from "../components/List";

// class Detail extends Component {
//   state = {
//     character: [],
//     volumes: [],
//     series: [],
//     singlevolume: [],
//   };
//   // Add code to get the Character with an _id equal to the id in the route param
//   // e.g. http://localhost:3000/Characters/:id
//   // The Character id for this route can be accessed using this.props.match.params.id
//   // componentDidMount() {
//   //   this.loadMyCharacter()
//   //   this.render()
//   //   // this.refresh();
//   // }
//    async componentdidlMount(){
//      // this.loadMyCharacter()
//     // this.loadMySeries();
//     this.getseriesbyname(this.props.match.name);
//     this.LoadChosenSeries();
//     // this.loadCharacters()
//     // this.render()

//   }
//   loadCharacters = () => {
//     if(!this.state.character.length){
// console.log("gettin all characters")
//       API.getCharacters()
//       .then(res => {
//         //console.log(res);
//         this.setState({ characters: res.data, name: "", info: "", link: "" })
//       }
//       )
//       .catch(err => console.log(err));
//     } else{
//       console.log("characters.length has data!")
//       console.log(this.state.character)
//     }
//   };
// //   refresh = () => {
// //     this.setState({state: this.state})
// //     this.forceUpdate();
// // }

//   async loadMyCharacter() {
//    await API.getCharacter(this.props.match.params.id)
//       .then(res => this.setState({ character: res.data })
//       )
//       .catch(err => console.log(err));
//   };
//   loadMySeries = () => {
//     API.findCharacterBySeries(this.props.match.params.charactername, this.props.match.params.seriesname)
//       .then(res => this.setState({ series: res.data })
//       )
//       .catch(err => console.log(err));
//   };
//   LoadChosenSeries = () => {
//     API.getseriesbyname(this.props.match.name)
//     .then(res => this.setState({ series: res.data })
//     )
//     .catch(err => console.log(err));
//   }
//   getseriesbyname = (name) => {
//     API.getseriesbyname(name)
//       .then(res => {
//         this.setState({ series: res.data });
//       })
//       .catch(err => console.log(err));
//   };
//   _renderObject(){
//     const {character} = this.props;
//     return Object.entries(character.series).map(([key, value], i) => {
//         return (
//             <div key={key}>
//                 {this.state.character}
//             </div>
//         )
//     })
// }

//   render() {
//     return (

//       // <React.Suspense fallback={<div>Loading...</div>}>
//       <Container fluid>
//         <Row>
//           <Col size="md-12">
//             <Jumbotron>

//             {/* {this.state.character.length ? ( */}
//               {/* <List> */}

//               { console.log(this.state.series) }
//                 {this.state.series.character},
//                {/* { (this.state.character.series.length){ */}
// {this.state.series.map(series => (
// {series}
// ))}

//                  {/* <List onClick={this.loadMyCharacter}> */}
//                   {/* {console.log(this.state.character)}
//                   {console.log("character")} */}
//                   {/* <List>
//                   {this.state.character.series},
//                   {console.log(this.state.character.series)}
//             {this.state && this.state.character &&

//                     <ListItem>
//                  {this.state.character.series.map(vol => (

//                   {vol}
//                   ))}
//                     </ListItem>
//             }
//                   </List> */}
//               {/* {this.state.character.series} */}
//                 {/* {this._renderObject()} */}
//               {/* {this.state.character.series.map((value, i) =><div class="row" key={i}></div>)} */}

//              {/* // ) : (
//             //   <h3>No Results to Display</h3>
//             // )} */}
// {this.state.character.length ? (
// <List onChange={this.loadMyCharacter}>
//                 {this.state.character.map(character => (
//                   <ListItem key={character._id} onChange={this.loadMyCharacter}eachcharacter={character.name} onclick={this.getseriesbyname}>
//                     <Link to={"/character/" + character._id}>
//                       <strong>
//                         {character.name} by {character.info}:
//                         {/* <SearchResults onChange={this.runheroinfo(character.name)} results={this.state.results} /> */}

//                         {/* <br></br>
//                         {character.series} */}
//                         {console.log(character.series)}
//                       </strong>
//                     </Link>

//                     {/* <DeleteBtn onClick={() => this.deletecharacter(character._id)} /> */}
//                     {/* {character.series.map(series => <Link to={`/api/series/${series}/${character.name}`}> {series}, </Link>)} */}
//                     {/* {character.series.map(series => <Link to={`/api/series/${series.id}`}> {series}, </Link>)} */}
//                     {/* <Link to={"/series/" + series._id}> */}

//                     {character.series.map(series => <Link to={`/api/series/${series}/${character.name}`}> {series}, </Link>)}

//                     {/* {character.series.map(series => {series})} */}

//                   </ListItem>
//                 ))}
//               </List>

//               ) : (
//                 <h3>No Results to Display</h3>
//                )}
//             </Jumbotron>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-10 md-offset-1">
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-2">
//             <Link to="/">← Back to Characters</Link>
//           </Col>
//         </Row>
//       </Container>
//     // </React.Suspense>

//     );
//   }
// }

// export default Detail;
