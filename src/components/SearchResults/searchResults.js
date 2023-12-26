import React from "react";
import styles from "./searcresults.module.css";
import Tracklist from "../TrackList/tracklist";

function SearchResults(props) {
  return (
    <div className={styles.SearchResults}>
       <h2>Results</h2>
      <Tracklist
        userSearchResults={props.userSearchResults}
        isRemoval={false}
        onAdd={props.onAdd}
      />
    </div>
  );
}

export default SearchResults;