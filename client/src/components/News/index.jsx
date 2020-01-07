import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Link
} from "@material-ui/core";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";

const cheerio = require("cheerio");
const proxyURL = "https://radiant-meadow-37937.herokuapp.com/";
const url = "https://www.cbr.com/category/comics/news/";
const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.primary.light
  }
}));
const Barticle = require("../News/Article.js");
const News = () => {
  const classes = useStyles;
  const [comicUrls, setComicUrls] = useState([]);
  const [photoBook, setPhotoBook] = useState([]);
  useEffect(
    () =>
      API.getNews(proxyURL, url)
        .then(function(res) {
          let data = "div > article";
          const $ = cheerio.load(data);
          // console.log($("article > a", res).length);
          // console.log(data);
          let img = $("article > a > div > div", res);
          // console.log(img);
          let img2 = $("picture", res);
          for (let i = 1; i < 9; i++) {
            // console.log(img[i]);
            const item = {
              // key: $("article", res)[i].attribs.data,
              link: $("article > a", res)[i].attribs.href,
              // image: $("article > a > div > div > picture", res)[i],
              // image2: $('')
              title: $("article > div > h3 > a", res)[i].attribs.title,
              image: $(img[i])
                .children()
                .children()
                .first("source")
                .data("srcset")
            };
            setComicUrls(comicUrls => [...comicUrls, item]);
            // console.log(item.image3);
            Barticle.create(comicUrls)
              .then(function(dbArticle) {
                console.log(dbArticle);
              })
              .catch(function(err) {
                console.log(err);
              });
          }
          // console.log(comicUrls);
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
              <GridListTile key={item.title}>
                <img srcset={item.image} alt={item.title} />
                <GridListTileBar
                  title={
                    <Link href={`https://www.cbr.com${item.link}`}>
                      {item.title}
                    </Link>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        )}
      </Grid>
    </Grid>
  );
};

export default News;
