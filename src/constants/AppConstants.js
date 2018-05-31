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
        LOCAL_HOST: 'http://localhost:8080',
        REMOTE: 'https://summester-webdev.herokuapp.com',
        widgets: {
            LOCAL_HOST: 'http://localhost:8080/api/widget',
            SAVE: 'http://localhost:8080/api/widget/save/TID',
            FIND_UPDATE_DELETE_WIDGET_BY_ID: 'http://localhost:8080/api/widget' + '/WID',
            FIND_ALL_OR_CREATE_BY_TOPIC_ID: 'http://localhost:8080/api/topic/TID/widgets',
            REMOTE_HOST: 'https://summester-webdev.herokuapp.com/api/widget',
            REMOTE_SAVE: 'https://summester-webdev.herokuapp.com/api/widget/save/TID',
            REMOTE_FIND_UPDATE_DELETE_WIDGET_BY_ID: 'https://summester-webdev.herokuapp.com/api/widget' + '/WID',
            REMOTE_FIND_ALL_OR_CREATE_BY_TOPIC_ID: 'https://summester-webdev.herokuapp.com/api/topic/TID/widgets'
        },
        lesson: {
            LOCAL_LESSON_API_URL: 'http://localhost:8080/api/lesson',
            LOCAL_LESSON_API_FIND_ALL_URL: 'http://localhost:8080/api/course/CID/module/MID/lesson',
            REMOTE_LESSON_API_URL: 'https://summester-webdev.herokuapp.com/api/lesson',
            REMOTE_LESSON_API_FIND_ALL_URL: 'https://summester-webdev.herokuapp.com/api/course/CID/module/MID/lesson'
        },
        module: {
            LOCAL_MODULE_API_URL: 'http://localhost:8080/api/course/CID/module',
            LOCAL_MODULE_URL: 'http://localhost:8080/api/module',
            REMOTE_MODULE_API_URL: 'https://summester-webdev.herokuapp.com/api/course/CID/module',
            REMOTE_MODULE_URL: 'https://summester-webdev.herokuapp.com/api/module'
        },
        topic: {
            LOCAL_TOPIC_API_URL: 'http://localhost:8080/api/lesson/LID/topic',
            LOCAL_TOPIC_URL: 'http://localhost:8080/api/topic',
            REMOTE_TOPIC_API_URL: 'https://summester-webdev.herokuapp.com/api/lesson/LID/topic',
            REMOTE_TOPIC_URL: 'https://summester-webdev.herokuapp.com/api/topic'
        },
        course: {
            COURSE_API_URL: 'http://localhost:8080/api/course',
            REMOTE_COURSE_API_URL: 'https://summester-webdev.herokuapp.com/api/course'
        },

    }
};