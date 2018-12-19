import React from "react";
import "./SearchResultsList.css";

const SearchResultsList = (props) => (

  <div>
    <div className="searchresultlist-title text-center">Previous Searches</div>

    <ul>
      {props.previousSearches.map(search => (
        <li className="searchresult-li"
          key={search.search}>
          <div className="searchresult-word"> {search.search} </div>
        </li>
      ))}
    </ul>
    
  </div>

);

export default SearchResultsList;

