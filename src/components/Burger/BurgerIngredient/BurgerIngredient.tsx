import React from 'react';

import classes from './BurgerIngredient.module.css';

type IngredientKey = 'bread-bottom' | 'bread-top' | 'meat' | 'cheese' | 'bacon' | 'salad';
export type AddableIngredientKey = 'meat' | 'cheese' | 'bacon' | 'salad';

export type Ingredient = {
  readonly label: string;
  readonly price: number;
  quantity: number;
}

export type IngredientMap = {
  [T in AddableIngredientKey]: Ingredient;
};


// export ?
type IngredientComponent = React.FC<{ type: IngredientKey }>;

const burgerIngredient: IngredientComponent =
  (props) => {
    let ingredient = null;
    switch (props.type) {
      case ('bread-bottom'):
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case ('bread-top'):
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case ('meat'):
        ingredient = <div className={classes.Meat}></div>;
        break;
      case ('cheese'):
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case ('bacon'):
        ingredient = <div className={classes.Bacon}></div>;
        break;
      case ('salad'):
        ingredient = <div className={classes.Salad}></div>;
        break;
      default:
        throw new Error('invalid ingredient');
    }
    return ingredient;
  } 

export default burgerIngredient;