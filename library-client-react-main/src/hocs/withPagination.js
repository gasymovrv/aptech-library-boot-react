import React, {Fragment} from "react";
import Pagination from "react-js-pagination";

import getDisplayName from '../helpers/getDisplayName';

export default function withPagination(Component, findEntitiesWithPaging) {
    class PaginationContainer extends React.Component {
        constructor(props){
            super(props);
            this.state.itemsCountPerPage = props.itemsCountPerPage;
        }

        state = {
            entityList: [],
            activePage: 1,
            totalItemsCount: 0
        };

        handlePageChange = (pageNumber) => {
            this.setState({activePage: pageNumber});
            this.getEntities(pageNumber, this.state.itemsCountPerPage);
        };

        getEntities = (activePage, itemsCountPerPage) => {
            if(findEntitiesWithPaging && typeof findEntitiesWithPaging === 'function') {
                findEntitiesWithPaging(
                    (entities, totalElements) => {
                        this.setState({entityList: entities, totalItemsCount: totalElements})
                    },
                    activePage,
                    itemsCountPerPage
                );
            } else {
                throw Error('findEntitiesWithPaging incorrect!')
            }
        };

        componentDidMount() {
            const {activePage, itemsCountPerPage} = this.state;
            this.getEntities(activePage, itemsCountPerPage);
        }

        render() {
            const {entityList, activePage, itemsCountPerPage, totalItemsCount} = this.state;

            return (
                <Fragment>
                    <Component
                        {...this.props}
                        data={entityList}
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
    PaginationContainer.displayName = `withPagination(${getDisplayName(Component)})`;
    return PaginationContainer;
}