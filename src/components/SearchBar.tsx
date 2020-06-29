import React, { Component, FormEvent } from 'react';

interface Props { 
  onSubmit: Function,
}

interface State {
  term: string,
}

class SearchBar extends Component<Props, State> {
  state: State = { term: '' };

  onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render () {
    return (
      <div className="ui segment" >
        <form onSubmit={this.onFormSubmit} className="ui form" >
          <label>Image Search</label>
          <div className="field">
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  };
};

export default SearchBar;
