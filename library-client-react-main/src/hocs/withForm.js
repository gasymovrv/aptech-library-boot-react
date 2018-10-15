import React from 'react';

import getDisplayName from '../helpers/getDisplayName';

export default function withForm(Component) {
    class Form extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data:{...props.initialData},
                savedData:{...props.initialData},
                oldData:{...props.initialData},
                successSubmit: undefined
            };
        }

        onChange = event => {
            let changedData = {...this.state.data};
            changedData[event.target.name] = event.target.value;
            this.setState({ data: changedData });
        };

        onChangeDate = (name) => (date) => {
            let changedData = {...this.state.data};
            changedData[name] = date;
            this.setState({ data: changedData });
        };

        onSubmit = e => {
            e.preventDefault();
            if (this.props.onSubmit) {
                this.props.onSubmit(
                    this.state.data,
                    () => {
                        this.setState((state, props) => ({
                            savedData: {...state.data},
                            oldData: {...state.savedData},
                            successSubmit: true
                        }));
                        clearTimeout(this.infoBoxTimeout);
                        this.startInfoBoxTimeout(10);
                    },
                    () => {
                        this.setState({
                            successSubmit: false
                        });
                        clearTimeout(this.infoBoxTimeout);
                        this.startInfoBoxTimeout(10);
                    }
                );
            }
        };

        onReset = e => {
            e.preventDefault();
            this.setState((state, props) => ({data: {...state.savedData}}));
        };

        startInfoBoxTimeout = (timeout)=>{
            this.infoBoxTimeout = setTimeout(() => {
                this.setState({successSubmit: undefined});
            }, timeout*1000);
        };

        componentWillUnmount(){
            clearTimeout(this.infoBoxTimeout);
        }

        render() {
            return (
                <Component
                    {...this.props}
                    successSubmit={this.state.successSubmit}
                    onSubmit={this.onSubmit}
                    onReset={this.onReset}
                    onChange={this.onChange}
                    onChangeDate={this.onChangeDate}
                    data={this.state.data}
                    savedData={this.state.savedData}
                    oldData={this.state.oldData}
                />
            );
        }
    }

    Form.displayName = `withForm(${getDisplayName(Component)})`;
    return Form;
}
