export type IngredientKey = 'bread-top' | 'bread-bottom' | 'meat' | 'cheese' | 'bacon' | 'salad';

export type AddableIngredientKey = 'meat' | 'cheese' | 'bacon' | 'salad';

export type Ingredient = {
  readonly label: string;
  readonly price: number;
  quantity: number;
}

export type IngredientMap = {
  [T in AddableIngredientKey]: Ingredient;
};
