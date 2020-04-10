import React from 'react';

export function Autobind(target: any, methodName: string | symbol | number, descriptor: PropertyDescriptor) {
  // note descriptorl.value is the method reference
  const og = descriptor.value;
  const newDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunction = og.bind(this);
      return boundFunction;
    }
  }
  return newDescriptor;
}

type StateUpdater = (oldState: React.ComponentState) => React.ComponentState;

// this works, but i don't know how to apply it to overriden parent class methods, e.g. setState
// export function Promisify(target: any, methodName: string | symbol | number, descriptor: PropertyDescriptor) {
//   const func = descriptor.value;
//   const newDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       return (...args: any[]) => {
//         return new Promise((resolve, reject) => {
//           func(...args, resolve);
//         })
//       }
//     }
//   }
//   return newDescriptor;
// }