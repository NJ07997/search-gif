import React from 'react';
import '../App.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
  }

  handleSearchBarChange(searchTerm) {
    this.setState({ searchTerm })
    this.props.onChange(searchTerm)
  }

  render() {
    return (
      <div>
        <div className="header">
          <div>
            <input
              type="text"
              placeholder="Search all the GIFs..."
              value={this.state.searchTerm}
              onChange={(ev) => this.handleSearchBarChange(ev.target.value)}
            />
            <button type="submit">Search</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar
