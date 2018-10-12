import React from 'react';

import getDisplayName from '../helpers/getDisplayName';

export default function withForm(Component) {
  class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = { ...props.initialData };
    }

    onChange = event => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };

    onSubmit = e => {
      e.preventDefault();
      if (this.props.onSubmit) {
        this.props.onSubmit(this.state);
      }
    };

    render() {
      return (
        <Component
          {...this.props}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          data={this.state}
        />
      );
    }
  }

  Form.displayName = `withForm(${getDisplayName(Component)})`;
  return Form;
}
