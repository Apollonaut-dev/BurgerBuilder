import React, { Component } from 'react';
import { Autobind } from '../../../util/decorators';

import Burger from '../../Burger/Burger';
import BuildControls from '../../Burger/BuildControls/BuildControls';
import { AddableIngredientKey, IngredientMap } from '../../Burger/BurgerIngredient/BurgerIngredient';
import Order from '../../Burger/Order/Order';

import Modal from '../../UI/Modal/Modal';

type Props = {
  showBackdrop: Function;
  hideBackdrop: Function;
};

type State = {
  ingredients: IngredientMap;
  totalPrice: number;
  purchasable: boolean;
  displayOrderSummary: boolean;
};

const FLAT_PRICE = 4;

const INITIAL_STATE: State = {
  ingredients: {
    'salad': { label: 'Salad', price: 0.5, quantity: 0 },
    'bacon': { label: 'Bacon', price: 1.5, quantity: 0 },
    'cheese': { label: 'Cheese', price: 1, quantity: 0 },
    'meat': { label: 'Meat', price: 3, quantity: 0 }
  },
  totalPrice: FLAT_PRICE,
  purchasable: false,
  displayOrderSummary: false
}

class BurgerBuilder extends Component<Props, State> {
  state: State = INITIAL_STATE;

  @Autobind
  addIngredient(type: AddableIngredientKey) {
    this.setState((presentState: State): State => {
      const oldCount = presentState.ingredients[type].quantity;
      const updatedCount = oldCount + 1;
      const updatedState = {
        ...presentState,
        ingredients: {
          ...presentState.ingredients,
          [type]: {
            ...presentState.ingredients[type],
            quantity: updatedCount
          }
        },
      }
      return updatedState;
    }, this.onUpdateIngredients);
  }

  @Autobind
  removeIngredient(type: AddableIngredientKey) {
    if (this.state.ingredients[type].quantity >= 1) {
      this.setState((presentState: State): State => {
        const oldCount = presentState.ingredients[type].quantity;
        const updatedCount = oldCount - 1;
        const updatedState = {
          ...presentState,
          ingredients: {
            ...presentState.ingredients,
            [type]: {
              ...presentState.ingredients[type],
              quantity: updatedCount
            }
          },
        }
        return updatedState;
      }, this.onUpdateIngredients);
    }
  }

  onUpdateIngredients() {
    this.calculatePrice();
    this.updatePurchaseState();
  }

  @Autobind
  calculatePrice() {
    let price = FLAT_PRICE;
    let i: AddableIngredientKey;
    for (i in this.state.ingredients) {
      price += this.state.ingredients[i].quantity * this.state.ingredients[i].price;
    }
    this.setState({ totalPrice: price }, () => {
      console.log(this.state)
    });
  }

  updatePurchaseState() {
    this.setState({
      purchasable: 0 < Object.keys(this.state.ingredients)
        .map(ing => this.state.ingredients[ing as AddableIngredientKey].quantity)
        .reduce((acc, qty) => acc += qty, 0)
    });
  }

  @Autobind
  orderModalShow() {
    this.props.showBackdrop(this.orderModalHide);
    this.setState({ displayOrderSummary: true })
  }

  @Autobind
  orderModalHide() {
    this.props.hideBackdrop();
    this.setState({ displayOrderSummary: false });
  }

  @Autobind
  orderHandler() {
    this.orderModalHide();
    // use setImmediate so alert shows after modal is hidden on re-render (event loop shenanigans ftw)
    setImmediate(() => alert('your order number is: ' + Math.floor(1000 * Math.random())));
  }

  render() {
    return (
      <>
        <Modal show={this.state.displayOrderSummary}>
          <Order
            cancel={this.orderModalHide}
            order={this.orderHandler}
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          subTotal={this.state.totalPrice}
          ingredients={this.state.ingredients}
          purchasable={this.state.purchasable}
          addHandler={this.addIngredient}
          removeHandler={this.removeIngredient}
          orderSummary={this.orderModalShow}
        />
      </>
    );
  }
}

export default BurgerBuilder;