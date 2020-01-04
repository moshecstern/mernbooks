import React, { Component } from "react";
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
  API.getNews(proxyURL, url)
    .then(function(res) {
      let data = cheerio("div > article", res);
      // console.log(data);
      const $ = cheerio.load(data);
      $("article").each(function(i, element) {
        // Save an empty result object
        var result = {};
        // Add the text and href of every link, and save them as properties of the result object
        result.title = $(element)
          .children()
          .children()
          .children("a")
          .text();
        result.link =
          "<a class= button href=https://www.cbr.com" +
          $(element)
            .children()
            .children()
            .children("a")
            .attr("href")
            .trim() +
          ">Read Article</a>";
        result.image =
          "<img class='u-max-full-width' src=" +
          $(element)
            // .children().children().children("a")
            // .text();
            .children("a")
            .children()
            .children()
            .children()
            .children()
            .attr("data-srcset")
            .trim() +
          "></img>";
        // console.log(element);

        // Create a new Article using the `result` object built from scraping
        // db.Article.create(result)
        //   .then(function(dbArticle) {
        //     // View the added result in the console
        //     console.log(dbArticle);
        //   })
        //   .catch(function(err) {
        //     // If an error occurred, log it
        //     console.log(err);
        //   });
        console.log(result);
      });

      // console.log(res);
      console.log($("article > a", res).length);

      // console.log($("div > article", res));
      console.log(data);
      for (let i = 0; i < 36; i++) {
        // this.setState({
        //   image: $("article > a", res)[i].attribs.href
        // });
        // console.log(this.state.image);

        comicUrls.push($("article > a", res)[i].attribs.href);
      }
      console.log(comicUrls);
    })
    .catch(err => console.log(err));

  // below is a working scrape
  // rp(proxyURL + url)
  //   .then(function(html) {
  //     //success!
  //     // console.log(html);
  //     // console.log($("article > a", html).length);
  //     console.log($("article > a", html)[3].attribs.href);
  //     // console.log($("a > div > h3 > a", html));
  //     const comicUrls = [];
  //     for (let i = 0; i < 36; i++) {
  //       comicUrls.push($("article > a", html)[i].attribs.href);
  //     }
  //     console.log(comicUrls);
  //   })
  //   .catch(function(err) {
  //     //handle error
  //   });
  return (
    <Grid container justify="space-around" alignItems="baseline">
      <GridList item cols={4}>
        {comicUrls.map(item => (
          <GridListTile key={item.name}>
            <img src={item.img} alt={item.name} />
            {item.name}
            <GridListTileBar title={"cheese"} />
          </GridListTile>
        ))}
      </GridList>
      {/* <Grid item>
        <Typography variant="h1">Item One </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h1">Item two </Typography>
      </Grid> */}
    </Grid>
  );
};

export default News;
