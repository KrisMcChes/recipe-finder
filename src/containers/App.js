import React from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import { recipes } from '../recipes';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: recipes,
      searchField: ''
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { recipes, searchField } = this.state;
    // console.log(searchField); // Debug: Log the current search field value
    const filterRecipes = recipes.filter(recipe => {
      return recipe.name.toLowerCase().includes(searchField.toLowerCase());
    });
    
    return !recipes.length ?
      <h1>Loading</h1> :
      (
        <div>
          <h1>Recipes</h1>
          <SearchBox searchChange={ this.onSearchChange } />
          <ErrorBoundry>
            <CardList recipes={filterRecipes} />
          </ErrorBoundry>
        </div>
      );
  }
}

export default App;
