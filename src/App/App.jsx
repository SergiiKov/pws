import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../component/header/header.component';
import AboutPage from '../pages/about/about-page';
import ResumePage from '../pages/resume/resume-page'; 
import ProjectsPage from '../pages/projects/projects-page'; 
import ContactPage from '../pages/contact/contact-page';
import Footer from '../component/footer/footer.component';
import TestPage from '../pages/test/test-page';
import '../component/sass/main.scss';

const App = () => {
  return (
 <React.Fragment>

       <Header />
        <Switch>
          <Route exact path='/about' component={AboutPage} />
          <Route path='/resume' component={ResumePage} />
          <Route path='/projects' component={ProjectsPage} />
          <Route path='/contact' component={ContactPage} />
          <Route exact path='/test' component={TestPage} />
        </Switch>
    <Footer />
 </React.Fragment>
  );
}

export default App;


