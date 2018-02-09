import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB9X-anVYscqA-BHcojr9IyaQc1y4sGunI';

// Create a new component that produces some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take the component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
