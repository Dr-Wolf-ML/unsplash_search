import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (query: string) => {
      const response = await unsplash.get(
        '/search/photos/',
        { params: {
            query
          }
        });

      this.setState({ images: response.data.results });
      console.log(this.state.images);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }} >
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
