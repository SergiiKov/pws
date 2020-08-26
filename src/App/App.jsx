import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../component/header/header.component';
import LeftArea from '../component/left-area/left-area.component';
import AboutPage from '../pages/about/about-page';
import ResumePage from '../pages/resume/resume-page'; 
import ProjectsPage from '../pages/projects/projects-page'; 
import ContactPage from '../pages/contact/contact-page';

import './App.styles.scss';

function App() {
  return (
  <div>
    <Header />
    <div className='container'>
      <div>
        <Switch>
          <Route exact path='/about' component={AboutPage} />
          <Route path='/resume' component={ResumePage} />
          <Route path='/projects' component={ProjectsPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
      </div>
    </div>
  </div>
  );
}

export default App;
