import React, { useState } from "react";

const SearchBar = props => {

  const [term, setTerm] = useState(props.search)

  async function onInputChange(event) {

      setTerm(event.target.value)
      props.onSearchTermChange(event.target.value);
  }
  
      return (
          <div className="search-bar">
              <input                
                  value={term}
                  onChange={onInputChange}
              />               
          </div>
      );        
  

}

export default SearchBar;