import React from 'react';
import { StylesProvider } from '@material-ui/styles';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';

import './App.css';
import LoginContainer from "./containers/login/LoginContainer";
import SubscriptionCardContainer from "./components/subscription-card/TopSubscriptionCardContainer";
import AddSubscriptionCardContainer from "./containers/add-subscription-card/AddSubscriptionCard";
import ShowSubscriptionCard from "./containers/show-subscription-card/ShowSubscriptionCard";

const App: React.FC = () => {
  return (
    <>
      <StylesProvider injectFirst>
        <Router>
          <div className="App">
            <Route exact path="/" component={LoginContainer} />
            <Route path="/top" component={ShowSubscriptionCard} />
          </div>
        </Router>
      </StylesProvider>
    </>
  );
}

export default App;
