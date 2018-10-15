import React from 'react';

import getDisplayName from '../helpers/getDisplayName';

export default function withForm(Component) {
    class Form extends React.Component {
        constructor(props) {
            super(props);
            this.state = {...props.initialData};
        }

        onChange = event => {
            this.setState({
                [event.target.name]: event.target.value,
            });
        };

        onChangeDate = (name) => (date) => {
            this.setState({
                [name]: date,
            });
        };

        onSubmit = e => {
            e.preventDefault();
            if (this.props.onSubmit) {
                this.props.onSubmit(this.state);
            }
        };

        onReset = e => {
            e.preventDefault();
            this.setState((state, props) => ({...props.initialData}));
        };

        render() {
            return (
                <Component
                    {...this.props}
                    onSubmit={this.onSubmit}
                    onReset={this.onReset}
                    onChange={this.onChange}
                    onChangeDate={this.onChangeDate}
                    data={this.state}
                />
            );
        }
    }

    Form.displayName = `withForm(${getDisplayName(Component)})`;
    return Form;
}
