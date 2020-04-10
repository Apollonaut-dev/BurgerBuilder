import React from 'react';

import { IngredientMap, AddableIngredientKey, Ingredient } from '../BurgerIngredient/BurgerIngredient';
import Button from '../../UI/Button/Button';

type Props = {
  ingredients: IngredientMap;
  price: number;
  cancel: () => void;
  order: () => void;
}

const order: React.FC<Props> = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    const ingredient: Ingredient = props.ingredients[igKey as AddableIngredientKey];
    return <li key={igKey}>{ingredient.label}: {ingredient.quantity}</li>
  });
  return (
    <>
      <h3>Your Order</h3>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button buttonType='Danger' onClick={props.cancel}>Cancel</Button>
      <Button buttonType='Success' onClick={props.order}>Continue</Button>
    </>
  );
};

export default order;