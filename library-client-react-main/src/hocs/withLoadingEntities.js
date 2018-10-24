import React from "react";

import getDisplayName from '../helpers/getDisplayName';

export default function withPagingEntities(findEntities) {
    return function (Component) {
        class LoadingEntities extends React.Component {
            state = {
                entityList: []
            };

            loadEntities = () => {
                if(findEntities && typeof findEntities === 'function') {
                    findEntities(
                        (entities) => {
                            this.setState({entityList: entities})
                        }
                    );
                } else {
                    throw Error('Argument findEntities is incorrect!')
                }
            };

            componentDidMount() {
                this.loadEntities();
            }

            render() {
                const {entityList} = this.state;
                return (
                    <Component
                        {...this.props}
                        data={entityList}
                    />
                )
            }
        }
        LoadingEntities.displayName = `withLoadingEntities(${getDisplayName(Component)})`;
        return LoadingEntities;
    };
}