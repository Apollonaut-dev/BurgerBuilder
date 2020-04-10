import React from 'react';

import classes from './Modal.module.css';

type Props = {
  show: boolean;
  children: React.ReactNode; // TypeScript type checker does not resolve this type correctly, thinks React.memo returns a component with no children prop
}

const modal: React.FC<Props> = (props) => (
  <div
    className={[
      classes.Modal,
      (props.show ? '' : classes.hidden)
    ].join(' ')}>
    {props.children}
  </div>
)

// no need to update component if it's not being displayed!
export default React.memo<Props>(modal);

// using react.memo achieves the same thing here as using shouldComponentUpdate on a class component version of this component
// class Modal extends Component<Props> {
//   // there is no need to update this component or its content if it's not being displayed!
//   shouldComponentUpdate(nextProps: Props) {
//     return this.props.show === nextProps.show;
//   }

//   render() {
//     return (
//       <div
//         className={[
//           classes.Modal,
//           (this.props.show ? '' : classes.hidden)
//         ].join(' ')}>
//         {this.props.children}
//       </div>
//     )
//   }
// }