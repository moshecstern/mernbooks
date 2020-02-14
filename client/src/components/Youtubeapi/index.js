// import React, { useState } from "react";
import React, { useState, useEffect } from 'react';
import SearchBar from './Searchbar';
import YTSearch from 'youtube-api-search';
import VideoList from './Videolist'
import VideoDetail from './videodetail';
import "./style.css"
const API_KEY = 'AIzaSyCyRUzNluvXdWY35tsdEcQ3OdAfGGvruYs';

const Youtubeapi = props => {

const [videos, setvideos] = useState([])
const [selectedVideo, setSelectedVideo] = useState(null)
const [onload, setOnload] = useState(true)

const videoSearch = (searchTerm) => {
 YTSearch({key: API_KEY, term: searchTerm}, (data) => {
   console.log(data);
   setvideos(data)
   setSelectedVideo(data[0])
 });
}
 useEffect(() => {
   videoSearch("comic news")
 }, []);

    return (
      <div class="container-fluid">
      <div className="text-center"><h2>Search youtube for comic realated news, or videos</h2></div>
        <SearchBar onSearchTermChange={searchTerm => videoSearch(searchTerm)} runonload={searchTerm => videoSearch(searchTerm)}/>
        <div className="row">
        {/* <div className="col-md-8"> */}
        <VideoDetail video={selectedVideo}/>
        {/* </div> */}
        {/* <div className="col-md-4"> */}
        <VideoList 
          onVideoSelect={userSelected => setSelectedVideo(userSelected)}
          videos={videos} />
          {/* </div> */}
          </div>
      </div>
    );
}

export default Youtubeapi;