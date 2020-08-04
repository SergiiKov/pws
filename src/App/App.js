import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../component/header/header-component';
import AboutPage from '../pages/about/about-page';
import ResumePage from '../pages/resume/resume-page';  

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={AboutPage} />
      <Route path='/resume' component={ResumePage} />
    </Switch>
  </div>
  );
}

export default App;
