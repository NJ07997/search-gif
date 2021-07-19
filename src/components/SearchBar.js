import React from 'react';
import '../App.css';
import './styles/SearchBar.css';

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
        <div className="searchBar">
          <div>
            <input
              type="text"
              placeholder="Search for GIFs as you type..."
              value={this.state.searchTerm}
              onChange={(ev) => this.handleSearchBarChange(ev.target.value)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar
