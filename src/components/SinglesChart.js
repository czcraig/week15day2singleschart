import React from 'react';
import Song from './Song.js'

const SinglesChart = (props) => {


  const songsComponents = props.songs.map((song, index) => {
      return (
        <Song position={index + 1} key={index}  title={song["im:name"]} artist={song["im:artist"]} price={song["im:price"]}
        />
      );
    });

  return (
    <div className="singles-chart">
      <ul>
      {songsComponents}
      </ul>
    </div>
  );
}


export default SinglesChart;
