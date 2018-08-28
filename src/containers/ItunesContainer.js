import React from 'react';
import Single from '../components/Single.js'
import SinglesChart from '../components/SinglesChart.js'


class ItunesContainer extends React.Component {
constructor(props){
  super(props)
  this.start = {
    songs: []
  };
}

componentDidMount(){
  const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
  fetch(url)
  .then((res)=> {
    return res.json();
  })
  .then((single) => {
    this.setState({ song: single.feed.entry});
    console.log(this.state.song);
  })
  .catch((error)=> {
    console.error(error);
  });
}


  render(){
  return (
    <div>
      <h1>Singles Chart</h1>
      <SinglesChart songs={this.state.songs}/>
    </div>
  );
}
}

export default ItunesContainer;
