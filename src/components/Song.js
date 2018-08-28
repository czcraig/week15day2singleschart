import React from 'react';


const Song = function (props) {
  if (!props) return null;
  return (
    <div>
      <h3>{props.position}. Title:{props.title.label}. Artist:{props.artist.label}. Price:{props.price.lable}</h3>
    </div>
  );
}




export default Song;
