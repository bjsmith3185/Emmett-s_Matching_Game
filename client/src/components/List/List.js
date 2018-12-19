import React from "react";
import "./List.css";

const List = (props) => (

  <ol>
    {props.allAds.map(company => (
      <li className="list-li" key={company.company}>
        <div className="list-company" onClick={() => props.viewAd(company.company)}> {company.company} </div>
      </li>
    ))}
  </ol>
  
);

export default List;

