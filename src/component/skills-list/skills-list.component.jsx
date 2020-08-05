import React from 'react';
import SkillCard from '../skill-card/skill-card.component';

import './skills-list.styles.scss'

const SkillsList = ({ state: { skills, displayCategory } }) => {
  return(
  
        <div className='skills-list'>
     {skills
       .filter(
         ({ category }) =>
           displayCategory === category || displayCategory === "All"
       )
       .map(({ category, name, href, id, percent }) => (
         <SkillCard 
         href={href}
         key={name} 
         id={id} 
         category={category} 
         name={name}
         percent={percent}
        />
     ))}
  </div>
    
  )
}

export default SkillsList;