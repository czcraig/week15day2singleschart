import React from 'react';
import SinglesChart from '../components/SinglesChart.js';

class ItunesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }


  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((songs) => {
      this.setState({songs: songs.feed.entry})
      console.log(this.state.songs);
    })
  }

  render(){
    return (
      <div>
        <h2>Singles Chart</h2>
        <SinglesChart songs={this.state.songs}/>
      </div>
    );
  }
}

export default ItunesContainer;
