export const AppConstants = {
    actions: {
        widgets: {
            FIND_ALL: 'FIND_ALL',
            SAVE_ALL: 'SAVE_ALL',
            ADD: 'ADD',
            DELETE: 'DELETE',
            SELECT_TYPE: 'SELECT_TYPE',
            FIND_BY_TOPIC: 'FIND_BY_TOPIC',
            HEADING_SIZE: 'HEADING_SIZE',
            HEADING_TEXT: 'HEADING_TEXT',
            CHANGE_WIDGET_NAME: 'CHANGE_WIDGET_NAME',
            CHANGE_PARAGRAPH_TEXT: 'CHANGE_PARAGRAPH_TEXT',
            CHANGE_IMAGE_LINK: 'CHANGE_IMAGE_LINK',
            CHANGE_LIST_TYPE: 'CHANGE_LIST_TYPE',
            CHANGE_LIST_ITEMS: 'CHANGE_LIST_ITEMS',
            CHANGE_LINK_TEXT: 'CHANGE_LINK_TEXT',
            CHANGE_LINK: 'CHANGE_LINK',
            PREVIEW: 'PREVIEW',
            MOVE_UP: 'MOVE_UP',
            MOVE_DOWN: 'MOVE_DOWN'
        }
    },
    uri: {
        widgets: {
            LOCAL_HOST: 'http://localhost:8080/api/widget',
            SAVE: 'http://localhost:8080/api/widget/save/TID',
            FIND_UPDATE_DELETE_WIDGET_BY_ID: 'http://localhost:8080/api/widget' + '/WID',
            FIND_ALL_OR_CREATE_BY_TOPIC_ID: 'http://localhost:8080/api/topic/TID/widgets'

        }
    }
};