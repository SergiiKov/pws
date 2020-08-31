import React from 'react';


import Scroll from '../../component/scroll/scroll.component';
import SkillsList from '../../component/skills-list/skills-list.component';
import { skills } from '../../component/data/skills';

import '../resume/resume-skills.styles.scss';



  const ButtonCategory = ({ setCategory, category }) => (  
        <button className={'button-filter button-filter--color'} onClick={() => setCategory(category)}>
         {category}
        </button>
  );
  
  const ButtonCategories = (productCategories, setCategory ) => (
    productCategories.map((category,i) => (
          <ButtonCategory key={category} setCategory={setCategory} category={category} />
        ))
  );

  const UI = ({
    state,
    state: { productCategories },
    setCategory,
    allProducts
  }) => {
    return(
        <div className='cardMargin'>
        
      <h3 className='heading-tertiary'>Skills</h3>
        <div className='buttons-container'>
          {ButtonCategories(productCategories, setCategory )}
        </div>
      <Scroll>
        <SkillsList state={state} />
      </Scroll>
        </div>

    )
  }
   
  class ResumeUI  extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        displayCategory: "All",
        skills: skills,
        productCategories: PRODUCT_CATEGORIES
      };
      this.setCategory = this.setCategory.bind(this);
    }

    setCategory(category) {
      this.setState({
        displayCategory: category
      });
    }

    render() {   
      return (
        <React.Fragment>
            <UI setCategory={this.setCategory} state={this.state} />    
        </React.Fragment>
      )
    }
  }
  
  const uniqueItems = (x, i, a) => a.indexOf(x) === i;
  const PRODUCT_CATEGORIES = skills.map(prod => prod.category).filter(
    uniqueItems
  );
  
  PRODUCT_CATEGORIES.push("All");
  PRODUCT_CATEGORIES.sort();
    
  export default ResumeUI;