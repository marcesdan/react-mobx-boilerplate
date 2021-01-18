import React from 'react';

import '../assets/sass/app.styles.scss';
import { BrowserRouter } from 'react-router-dom';
import RootContainer from './RootContainer';

// create our store


const App = () => (
    <BrowserRouter>
      <RootContainer />
    </BrowserRouter>
);

// allow reactotron overlay for fast design in dev mode
export default App;
