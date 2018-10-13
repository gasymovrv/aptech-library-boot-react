import React from 'react';

import getDisplayName from '../helpers/getDisplayName';

export default function withHandlers(handlers) {
  return function(Component) {
    class WithHandlers extends React.Component {
      handlers = Object.keys(handlers).reduce((acc, h) => {
        const handler = handlers[h];

        if (typeof handler !== 'function') {
          throw new Error('Handler should be a function');
        }

        acc[h] = handler(this.props);
        return acc;
      }, {});

      render() {
        console.log(this.handlers);
        return <Component {...this.handlers} {...this.props} />;
      }
    }

    WithHandlers.displayName = `withHandlers(${getDisplayName(Component)})`;
    return WithHandlers;
  };
}
