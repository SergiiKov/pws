import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../component/header/header.component';
import AboutPage from '../pages/about/about-page';
import ResumePage from '../pages/resume/resume-page'; 
import ProjectsPage from '../pages/projects/projects-page'; 
import ContactPage from '../pages/contact/contact-page';
import Footer from '../component/footer/footer.component';
import '../component/sass/main.scss';

// import Contact2 from '../pages/contact/contact-page2';
import Contact3 from '../pages/contact/contact-page3';

const App = () => {
  return (
 <React.Fragment>

       <Header />
        <Switch>
          <Route exact path='/' component={AboutPage} />
          <Route path='/resume' component={ResumePage} />
          <Route path='/projects' component={ProjectsPage} />
          <Route path='/contact' component={Contact3} />
        </Switch>
    <Footer />
    
 </React.Fragment>
  );
}

export default App;


