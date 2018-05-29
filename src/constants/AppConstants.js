export const AppConstants = {
    actions: {
        widgets: {
            FIND_ALL: 'FIND_ALL',
            SAVE_ALL: 'SAVE_ALL',
            ADD: 'ADD',
            DELETE: 'DELETE'
        }
    },
    uri: {
        widgets: {
            LOCAL_HOST: 'http://localhost:8080/api/widget',
            SAVE: 'http://localhost:8080/api/widget' + '/save',
            FIND_UPDATE_DELETE_BY_ID: 'http://localhost:8080/api/widget' + '/WID',
            FIND_ALL_OR_CREATE: 'http://localhost:8080/api/topic/TID/widget'

        }
    }
};