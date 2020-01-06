import React, { Component, useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Link,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton
} from "@material-ui/core";
import API from "../../utils/API";
import { FindInPageIcon } from "@material-ui/icons/FindInPage";
import { borders } from "@material-ui/system";

const rp = require("request-promise");
const cheerio = require("cheerio");
const proxyURL = "https://radiant-meadow-37937.herokuapp.com/";
const url = "https://www.cbr.com/category/comics/news/";
const comicUrls = [];
const state = {
  image: "",
  URL2: "",
  key: "",
  match: false,
  matchCount: 0
};
const News = () => {
  const [comicUrls, setComicUrls] = useState([]);

  useEffect(
    () =>
      API.getNews(proxyURL, url)
        .then(function(res) {
          let data = cheerio("div > article", res);
          // console.log(data);
          const $ = cheerio.load(data);
          // console.log(res);
          console.log($("article > a", res).length);

          // console.log($("div > article", res));
          console.log(data);
          for (let i = 0; i < 8; i++) {
            // this.setState({
            //   image: $("article > a", res)[i].attribs.href
            // });
            // console.log(this.state.image);
            const item = {
              link: $("article > a", res)[i].attribs.href,
              image: $("article > a > div > div > picture > source", res)[i]
                .attribs.srcset,
              title: $("article > div > h3 > a", res)[i].attribs.title
              // subtitle: $("article > div > p", res)[i].children()
            };

            setComicUrls(comicUrls => [...comicUrls, item]);
          }
          console.log(comicUrls);
        })
        .catch(err => console.log(err)),
    []
  );
  return (
    <Grid container justify="space-around" alignItems="baseline">
      <Grid item>
        {!comicUrls ? null : (
          <GridList item cols={4}>
            {comicUrls.map(item => (
              <GridListTile key={item.name}>
                <img src={item.image} alt={item.title} />
                {/* {item.subtitle} */}
                <GridListTileBar title={item.title} />
              </GridListTile>
            ))}
          </GridList>
        )}
      </Grid>
      <Grid item>
        {/* <Typography variant="h1">{comicUrls[0].title} </Typography> */}
      </Grid>
      <Grid item>
        <Typography variant="h1">Item two </Typography>
      </Grid>
    </Grid>
  );
};

export default News;
