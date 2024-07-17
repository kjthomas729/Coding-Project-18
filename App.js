import React from 'react';
import Toolbar from './Toolbar';
import UploadButton from './UploadButton';
import './Toolbar.css';

const movies = ['Movie 1', 'Movie 2', 'Movie 3'];

function App() {
  return (
    <div className="App">
      <Toolbar movies={movies} />
      <UploadButton />
    </div>
  );
}

export default App;