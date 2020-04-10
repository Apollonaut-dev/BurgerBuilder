import React from 'react';

import classes from './Burger.module.css';

import BurgerIngredient, { AddableIngredientKey, IngredientMap } from './BurgerIngredient/BurgerIngredient';

const burger: React.FC< { ingredients: IngredientMap } > = props => {
  let isLoaded = false;
  
  const preparedIngredients = [];
  let i: AddableIngredientKey;
  for (i in props.ingredients) {
    for (let count = 0; count < props.ingredients[i].quantity; count++) {
      isLoaded = true;
      preparedIngredients.push(<BurgerIngredient type={i} key={i + count} />);
    }
  }
  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {isLoaded ? preparedIngredients : <p>Choose your ingredients!</p>}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;