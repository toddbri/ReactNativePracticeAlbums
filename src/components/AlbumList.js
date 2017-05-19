import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));

    axios.post('http://et.briley.org/api/expenses', {
          token: 'd033549a-b58c-4625-9d78-61d1b8212145',
          timeFrame: 'prior30days'
        })
    .then(response => console.log('expenses: ', response.data))
    .catch(err => console.log(err.message));
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }

  render() {
      console.log(this.state);
      return (
        <ScrollView>
            {this.renderAlbums()}
        </ScrollView>
      );
  }
}

export default AlbumList;
