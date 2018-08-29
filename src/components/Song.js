import React from 'react';


const Song = function (props) {
  if (!props) return null;
  return (
    <div>
      <h3>{props.position}. Title:{props.title.label}. Artist:{props.artist.label}. Price:{props.price.label}</h3>
    </div>
  );
}




export default Song;
