import React from "react";
import getDisplayName from "../helpers/getDisplayName";

export default function withListActions(deleteEntityById) {
    return function (Component) {
        class ListActions extends React.Component {

            state = {
                successDelete: undefined,
                deletedEntity: {}
            };

            onDelete = (entity) => () => {
                if(deleteEntityById && typeof deleteEntityById === 'function') {
                    deleteEntityById(
                        entity.id,
                        () => {
                            this.props.refreshPageAfterDelete();
                            this.setState({
                                successDelete: true,
                                deletedEntity: entity
                            });
                            clearTimeout(this.infoBoxTimeout);
                            this.startInfoBoxTimeout(10);
                        },
                        () => {
                            this.props.refreshPageAfterDelete();
                            this.setState({
                                successDelete: false,
                                deletedEntity: entity
                            });
                            clearTimeout(this.infoBoxTimeout);
                            this.startInfoBoxTimeout(10);
                        }
                    );
                } else {
                    throw Error('Argument deleteEntityById is incorrect!')
                }
            };

            startInfoBoxTimeout = (timeout) => {
                this.infoBoxTimeout = setTimeout(() => {
                    this.setState({successDelete: undefined});
                }, timeout * 1000);
            };

            componentWillUnmount() {
                clearTimeout(this.infoBoxTimeout);
            }

            render() {
                const {deletedEntity, successDelete} = this.state;
                return (
                    <Component
                        {...this.props}
                        onDelete={this.onDelete}
                        deletedEntity={deletedEntity}
                        successDelete={successDelete}
                    />
                )
            }
        }
        ListActions.displayName = `withListActions(${getDisplayName(Component)})`;
        return ListActions;
    }
}