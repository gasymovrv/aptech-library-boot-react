import React from "react";

import getDisplayName from '../helpers/getDisplayName';

export default function withLoadingEntities(findEntities, isPaging) {
    return function (Component) {
        class LoadingEntities extends React.Component {
            constructor(props){
                super(props);
                this.state = {
                    entityList: [],
                    totalItemsCount: 0
                };
            }

            loadEntities = (activePage, itemsCountPerPage) => {
                if(findEntities && typeof findEntities === 'function') {
                    if(activePage && itemsCountPerPage) {
                        findEntities(
                            (entities, totalElements) => {
                                this.setState({entityList: entities, totalItemsCount: totalElements})
                            },
                            activePage,
                            itemsCountPerPage
                        );
                    } else {
                        findEntities(
                            (entities) => {
                                this.setState({entityList: entities})
                            }
                        );
                    }
                } else {
                    throw Error('Argument findEntitiesWithPaging is incorrect!')
                }
            };

            componentDidMount() {
                if(!isPaging) {
                    this.loadEntities();
                }
            }

            render() {
                const {entityList, totalItemsCount} = this.state;
                return (
                    <Component
                        {...this.props}
                        entityList={entityList}
                        totalItemsCount={totalItemsCount}
                        loadEntities={this.loadEntities}
                    />
                )
            }
        }
        LoadingEntities.displayName = `withLoadingEntities(${getDisplayName(Component)})`;
        return LoadingEntities;
    };
}