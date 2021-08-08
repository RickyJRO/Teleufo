import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Iphones from './components/pages/iphones/iphones'
import Smartphones from "./components/pages/smartphones/smartphones";
import Home from './components/Home/Home'
import './App.css'
import Acessorios from "./components/pages/acessorios/acessorios";
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
       <Router>
         <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ReparaçõesIphone">
            <Iphones />
          </Route>
          <Route path="/ReparaçõesSmartphone">
            <Smartphones />
          </Route>
          <Route path="/CapasAcessórios">
            <Acessorios />
          </Route>
        </Switch>
        </ScrollToTop>
    </Router>
    </div>
  );
}

export default App;
