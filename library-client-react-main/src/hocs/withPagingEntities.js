import React, {Fragment} from "react";
import Pagination from "react-js-pagination";

import getDisplayName from '../helpers/getDisplayName';

export default function withPagingEntities(findEntitiesWithPaging, itemsCountPerPage) {
    return function (Component) {
        class PaginationContainer extends React.Component {
            state = {
                entityList: [],
                activePage: 1,
                totalItemsCount: 0,
                itemsCountPerPage: itemsCountPerPage || 6
            };

            handlePageChange = (pageNumber) => {
                this.setState({activePage: pageNumber});
                this.loadEntities(pageNumber, this.state.itemsCountPerPage);
            };

            loadEntities = (activePage, itemsCountPerPage) => {
                if(findEntitiesWithPaging && typeof findEntitiesWithPaging === 'function') {
                    findEntitiesWithPaging(
                        (entities, totalElements) => {
                            this.setState({entityList: entities, totalItemsCount: totalElements})
                        },
                        activePage,
                        itemsCountPerPage
                    );
                } else {
                    throw Error('Argument findEntitiesWithPaging is incorrect!')
                }
            };

            refreshPageAfterDelete = ()=>{
                const {entityList, activePage, itemsCountPerPage} = this.state;
                //переходим на предыдущую страницу, если в момент удаления был только 1 элемент
                if (entityList.length === 1 && activePage > 1) {
                    this.setState((state, props) => {
                        this.loadEntities(state.activePage - 1, itemsCountPerPage);
                        return {activePage: state.activePage - 1}
                    });
                } else {
                    this.loadEntities(activePage, itemsCountPerPage);
                }
            };

            componentDidMount() {
                const {activePage, itemsCountPerPage} = this.state;
                this.loadEntities(activePage, itemsCountPerPage);
            }

            render() {
                const {entityList, activePage, itemsCountPerPage, totalItemsCount} = this.state;
                return (
                    <Fragment>
                        <Component
                            {...this.props}
                            data={entityList}
                            refreshPageAfterDelete={this.refreshPageAfterDelete}
                        />
                        <Pagination
                            activePage={activePage}
                            itemsCountPerPage={itemsCountPerPage}
                            totalItemsCount={totalItemsCount}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange}
                        />
                    </Fragment>
                )
            }
        }
        PaginationContainer.displayName = `withPagingEntities(${getDisplayName(Component)})`;
        return PaginationContainer;
    };
}