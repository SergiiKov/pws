import React from 'react';

const SkillCard = (props) =>{
    const { name, percent, id, href } = props;
    return(
       <a href={href} target="_blank" rel="noopener noreferrer">
            <div className='card-container'>
               <img src={require(`../../img/${id}.svg`)} alt='skill card' className='img-skill' /> 
               <div className='card-text-container'>
                  <h3>{ name }</h3>
                  <p><span className='joke'>1</span>0{percent}</p>
               </div>
            </div>
       </a> 
    )
};

export default SkillCard;