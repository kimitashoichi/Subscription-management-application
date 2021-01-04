import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';

import './App.css';
import LoginContainer from "./containers/login/LoginContainer";
import SubscriptionCardContainer from "./containers/subscription-card/SubscriptionCardContainer";
import AddSubscriptionCardContainer from "./containers/add-subscription-card/AddSubscriptionCard";

const App: React.FC = () => {
  return (
    <>
      <StylesProvider injectFirst>
        <Router>
          <div className="App">
            <Route exact path="/" component={LoginContainer} />
            <Route path="/top" component={AddSubscriptionCardContainer} />
          </div>
        </Router>
      </StylesProvider>
    </>
  );
}

export default App;
