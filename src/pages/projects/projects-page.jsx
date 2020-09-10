import React from 'react';

import LeftArea from  '../../component/left-area/left-area.component';

const ProjectPage = () => {

  return (
  <React.Fragment>
    <div className='projects-page'>
    <div className="row-full">

<div className="col-1-of-3">
<LeftArea />
</div>

<div className="col-2-of-3">
<h2 className='heading-secondary u-margin-bottom-small'>MY PROJECTS</h2>
  <div className='projects-block'>
     <div>
     
    <h3 className='heading-tertiary'>Todo List</h3>
    <a className='style-mail__link' href='https://github.com/SergiiKov/My-ToDo-List' target="_blank" rel="noopener noreferrer">
                    <div className='project-card-container'>
                        <img src={require(`../../img/todolist.png`)} alt='todolist' className='img-projects' />
                            <div className='projects-text-container'>
                                <p>
                                  A simple to-do list application built with React
                                </p>
                            </div>   
                    </div>
                </a>
     </div>
   </div>

         <div className='projects-block' >
     <div >
    <h3 className='heading-tertiary'>Robot-page</h3>
    <a className='style-mail__link' href='https://github.com/SergiiKov/cards-friends' target="_blank" rel="noopener noreferrer">
                    <div className='project-card-container'>
                        <img src={require(`../../img/robot-friends.png`)} alt='robot-friends' className='img-projects' />
                            <div className='projects-text-container'>
                                <p   variant='body2'>
                                  React app that searches through an API of random robots
                                  </p>
                            </div>   
                    </div>
                </a>
     </div>
   </div>

   <div className='projects-block' >
     <div>
    <h3 className='heading-tertiary'>VN Create</h3>
    <a className='style-mail__link' href='https://github.com/SergiiKov/vncreate' target="_blank" rel="noopener noreferrer">
                    <div className='project-card-container'>
                        <img src={require(`../../img/vncreate-1.png`)} alt='VN Create' className='img-projects' />
                        <img src={require(`../../img/vncreate-2.png`)} alt='VN Create' className='img-projects' />
                            <div className='projects-text-container'>
                                <p   variant='body2'p>Сайт візитка. Розробка сайтів.</p>
                            </div>   
                    </div>
                </a>
     </div>
   </div>

  <div className='projects-block' >
     <div>
    <h3 className='heading-tertiary'>Smp.vin.ua</h3>
    <a className='style-mail__link' href='http://smp.vin.ua/joomla/' target="_blank" rel="noopener noreferrer">
     <div className='project-card-container'>
                        <img src={require(`../../img/smp.png`)} alt='smp.vin.ua' className='img-projects' />
                            <div className='projects-text-container'>
                                <p>
                                  Офіційний сайт. Соціальна та молодіжна політика на Вінниччині
                                  </p>
                            </div>                       
                    </div>
                    </a>  
     </div>
   </div>

   <div className='projects-block'>
     <div>
    <h3 className='heading-tertiary'>Main-page iac</h3>
    <a className='style-mail__link' href='http://smp.vin.ua/joomla/' target="_blank" rel="noopener noreferrer">
    <div className='project-card-container'>
                        <img src={require(`../../img/main-page.png`)} alt='main-page iac' className='img-projects' />
                            <div className='projects-text-container'>
                                <p >
                                  Головна сторінка для сукупності сайтів соціальної політики Вінниччини. 
                                </p>
                            </div>   
                    </div>
                    </a>        
     </div>
   </div>
   </div>
   </div>
   </div>
  </React.Fragment>
);
}

export default ProjectPage;