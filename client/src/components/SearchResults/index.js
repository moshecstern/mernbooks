import React from "react";
import "./style.css";

function SearchResults(props) {
  return (

    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
<p>hey working {result.name}</p>
          {/* <img alt="Hero" src={result} className="img-fluid" /> */}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
