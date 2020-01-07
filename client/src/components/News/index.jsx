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
          let img = $("article > a > div > div > picture", res);
          let img2 = $("picture", res)
            .children()
            .last();
          // for (let i = 0; i < 64; i++) {
          //   const album = { photo: img[i] };
          //   console.log(album);
          //   setPhotoBook(photoBook => [...photoBook, album]);
          //   console.log(album.photo.attribs);
          // }
          for (let i = 0; i < 8; i++) {
            let j = i * 8;
            const item = {
              key: $("article", res)[i].attribs.data,
              link: $("article > a", res)[i].attribs.href,
              image: img[i].children.last.attribs.srcset,
              // image2: $('')
              title: $("article > div > h3 > a", res)[i].attribs.title
            };
            setComicUrls(comicUrls => [...comicUrls, item]);
            console.log(item.image);
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
