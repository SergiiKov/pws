import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../component/header/header.component';
import AboutPage from '../pages/about/about-page';
import ResumePage from '../pages/resume/resume-page'; 
import ProjectsPage from '../pages/projects/projects-page'; 
import ContactPage from '../pages/contact/contact-page';
import Footer from '../component/footer/footer.component';

import '../component/sass/main.scss';

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
    <Footer />
  </div>
  );
}

export default App;
