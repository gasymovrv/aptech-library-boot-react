import React from "react";
import getDisplayName from "../helpers/getDisplayName";

export default function withDeleting(deleteEntityById) {
    return function (Component) {
        class Deleting extends React.Component {
            constructor(props){
                super(props);
                let successDelete = undefined;
                let deletedEntity = {};
                if(props.location && props.location.state){
                    successDelete = props.location.state.successDelete;
                    deletedEntity = {...props.location.state.deletedEntity};
                }
                this.state = {
                    successDelete: successDelete,
                    deletedEntity: deletedEntity
                };
            }

            onDelete = (entity) => {
                const {refreshPageAfterDelete, history} = this.props;
                if(deleteEntityById && typeof deleteEntityById === 'function') {
                    deleteEntityById(
                        entity.id,
                        ()=>{
                            if (refreshPageAfterDelete && typeof refreshPageAfterDelete === 'function') {
                                this.handleDeleteFromList(entity, true);
                            } else if(history){
                                this.handleDeleteFromInfo(entity, true);
                            }
                        },
                        () => {
                            if (refreshPageAfterDelete && typeof refreshPageAfterDelete === 'function') {
                                this.handleDeleteFromList(entity, false);
                            } else if(history){
                                this.handleDeleteFromInfo(entity, false);
                            }
                        }
                    );
                } else {
                    throw Error('Argument deleteEntityById is incorrect!')
                }
            };

            handleDeleteFromList = (entity, success)=>{
                const {refreshPageAfterDelete} = this.props;
                refreshPageAfterDelete();
                this.setState({
                    successDelete: success,
                    deletedEntity: entity
                });
                this.startInfoBoxTimeout(10);
            };

            handleDeleteFromInfo = (entity, success)=>{
                if (success) {
                    const {history, match} = this.props;
                    let path;
                    if (match.url.indexOf('authors') !== -1) {
                        path = '/authors'
                    } else if (match.url.indexOf('books') !== -1) {
                        path = '/books'
                    } else {
                        path = '/';
                    }
                    history.push({
                        pathname: path,
                        state: {
                            successDelete: success,
                            deletedEntity: entity
                        }
                    });
                } else {
                    this.setState({
                        successDelete: success,
                        deletedEntity: entity
                    });
                    this.startInfoBoxTimeout(10);
                }
            };

            startInfoBoxTimeout = (timeout) => {
                clearTimeout(this.infoBoxTimeout);
                this.infoBoxTimeout = setTimeout(() => {
                    this.setState({successDelete: undefined});
                }, timeout * 1000);
            };

            componentWillUnmount() {
                clearTimeout(this.infoBoxTimeout);
            }

            componentDidMount() {
                const {successDelete} = this.state;
                if(successDelete!==undefined && successDelete){
                    this.startInfoBoxTimeout(10);
                }
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
        Deleting.displayName = `withDeleting(${getDisplayName(Component)})`;
        return Deleting;
    }
}