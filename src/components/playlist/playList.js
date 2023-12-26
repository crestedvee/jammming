import React from "react";
import styles from "./playList.module.css";
import Tracklist from "../TrackList/tracklist";

function Playlist(props) {
  function handleNameChange({ target }) {
    props.onNameChange(target.value);
  }
  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} onChange={handleNameChange} />
      {<Tracklist
        userSearchResults={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
  />}
      <button className={styles.PlaylistSave} onClick={props.onSave} >
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;