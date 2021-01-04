import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';

import './App.css';
import LoginContainer from "./containers/LoginContainer";

const App: React.FC = () => {
  return (
    <>
      <StylesProvider injectFirst>
        <Router>
          <div className="App">
            <Route exact path="/" component={LoginContainer} />
          </div>
        </Router>
      </StylesProvider>
    </>
  );
}

export default App;
