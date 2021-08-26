import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Header} from './components/Header'
import {Home} from "./pages/Home";
import {QuestionOne, ProblemOne} from "./pages/QuestionOne";
import {QuestionTwo, ProblemTwo} from "./pages/QuestionTwo";
import {QuestionThree, ProblemThree} from "./pages/QuestionThree";

function App() {
  return (
      <div className="App" style={{position: 'absolute', height: '100%', width: '100%', display: 'flex', flexDirection: 'column'}}>
        <Router>
          <Header/>
            <div style={{flex: 1, overflow:'auto', height: '100%', display: 'flex', verticalAlign: 'middle', justifyContent: 'center'}}>
                <Switch>
                    <Route path='/questionOne' >
                        <QuestionOne />
                    </Route>
                    <Route path='/problemOne' >
                        <ProblemOne />
                    </Route>
                    <Route path='/questionTwo' >
                        <QuestionTwo />
                    </Route>
                    <Route path='/problemTwo' >
                        <ProblemTwo />
                    </Route>
                    <Route path='/questionThree' >
                        <QuestionThree />
                    </Route>
                    <Route path='/problemThree' >
                        <ProblemThree />
                    </Route>
                  <Route path='/' >
                      <Home/>
                  </Route>
                </Switch>
            </div>
        </Router>
      </div>
  );
}

export default App;
