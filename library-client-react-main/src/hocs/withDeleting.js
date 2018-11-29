import React from 'react';
import getDisplayName from '../helpers/getDisplayName';
import {consoleLog, consoleLogObject, consoleLogWithContext} from '../helpers/consoleLog';

export default function withDeleting(deleteEntityById) {
    return function (Component) {
        class Deleting extends React.Component {
            constructor(props){
                super(props);
                let successDelete = undefined;
                let deletedEntity = {};
                let showInfo = false;
                if(props.location && props.location.state){
                    successDelete = props.location.state.successDelete;
                    deletedEntity = {...props.location.state.deletedEntity};
                    showInfo = props.location.state.showInfo;
                }
                consoleLogWithContext('successDelete', successDelete, withDeleting);
                consoleLogObject('deletedEntity', deletedEntity, this);
                consoleLogWithContext('showInfo', showInfo, this);
                this.state = {
                    successDelete: successDelete,
                    deletedEntity: deletedEntity,
                    showInfo: showInfo
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
                    deletedEntity: entity,
                    showInfo: true
                });
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
                    history.replace({
                        pathname: path,
                        state: {
                            successDelete: success,
                            deletedEntity: entity,
                            showInfo: true
                        }
                    });
                } else {
                    this.setState({
                        successDelete: success,
                        deletedEntity: entity,
                        showInfo: true
                    });
                }
            };

            callbackStopShow = () => {
                this.setState({showInfo: false})
            };

            render() {
                const {deletedEntity, successDelete, showInfo} = this.state;
                return (
                    <Component
                        {...this.props}
                        onDelete={this.onDelete}
                        deletedEntity={deletedEntity}
                        successDelete={successDelete}
                        showInfo={showInfo}
                        callbackStopShow={this.callbackStopShow}
                    />
                )
            }
        }
        Deleting.displayName = `withDeleting(${getDisplayName(Component)})`;
        return Deleting;
    }
}