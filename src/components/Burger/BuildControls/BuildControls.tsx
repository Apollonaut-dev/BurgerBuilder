import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import { AddableIngredientKey, IngredientMap } from '../BurgerIngredient/BurgerIngredient';

type Props = {
  subTotal: number;
  ingredients: IngredientMap;
  purchasable: boolean;
  addHandler: (type: AddableIngredientKey) => void;
  removeHandler: (type: AddableIngredientKey) => void;
  orderSummary: () => void;
}

const buildControls: React.FC<Props> = props => (
  <div className={classes.BuildControls}>
    <p className={classes.Price}>Subtotal: <strong>${props.subTotal.toFixed(2)}</strong></p>
    { 
      Object.keys(props.ingredients).map(
        (i) =>
          <BuildControl
            key={i}
            disabled={props.ingredients[i  as AddableIngredientKey].quantity === 0}
            addHandler={() => props.addHandler(i as AddableIngredientKey)}
            removeHandler={() => props.removeHandler(i as AddableIngredientKey)}
            label={props.ingredients[i as AddableIngredientKey].label}
          />
      )
    }
    <button disabled={!props.purchasable} onClick={props.orderSummary} className={classes.OrderButton}>ORDER</button>
  </div>
);

export default buildControls;