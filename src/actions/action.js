import React from 'react'
import {AppConstants as Constants} from "../constants/AppConstants";

const validateWidgetNames = (widgets) => {
    var array = widgets.map(widget => widget.name.trim());
    return (new Set(array)).size !== array.length;
};

export const findAllWidgets = dispatch => {
    fetch(Constants.uri.widgets.LOCAL_HOST)
        .then(response => (response.json()))
        .then(widgets => (dispatch({
                type: Constants.actions.widgets.FIND_ALL,
                widgets: widgets
            })
        ))
};

export const findAllWidgetsByTopic = (dispatch, topicId) => (
    fetch(Constants.uri.widgets.REMOTE_FIND_ALL_OR_CREATE_BY_TOPIC_ID.replace('TID', topicId))
        .then(respone => (respone.json()))
        .then(widgets => (dispatch({
            type: Constants.actions.widgets.FIND_BY_TOPIC,
            widgets: widgets
        })))
);

export const saveAllWidgets = (widgets, topicId, dispatch) => {
    let redundant = validateWidgetNames(widgets);
    if (!redundant) {
        return fetch(Constants.uri.widgets.REMOTE_SAVE.replace('TID', topicId), {
            method: 'POST',
            body: JSON.stringify(widgets),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => (response.json()))
            .then(widgets => (dispatch({
                type: Constants.actions.widgets.SAVE_ALL,
                widgets: widgets
            })))
    } else {
        alert("One or more widgets have the same name. Please verify");
        return;
    }
};

export const previewWidgets = dispatch => (
    dispatch({type: Constants.actions.widgets.PREV})
);
export const addWidget = (dispatch) => (
    dispatch({type: Constants.actions.widgets.ADD})
);

export const deleteWidget = (id, dispatch) => (
    dispatch({
        type: Constants.actions.widgets.DELETE,
        id: id
    })
);

export const changeWidget = (id, selectElement, dispatch) => (
    dispatch({
        type: Constants.actions.widgets.SELECT_TYPE,
        id: id,
        widgetType: selectElement.value
    }));

export const changeHeadingSize = (id, value, dispatch) => (
    dispatch({
        type: Constants.actions.widgets.HEADING_SIZE,
        id: id,
        size: value
    })
);
export const changeHeadingText = (id, newText, dispatch) => (
    dispatch({
        type: Constants.actions.widgets.HEADING_TEXT,
        id: id,
        newText: newText
    })
);

export const changeWidgetName = (id, newName, dispatch) => (
    dispatch({
        type: Constants.actions.widgets.CHANGE_WIDGET_NAME,
        id: id,
        name: newName
    })
);

export const changeImageUrl = (id, newLink, dispatch) => (
    dispatch({
        type: Constants.actions.widgets.CHANGE_IMAGE_LINK,
        id: id,
        src: newLink
    })
);
export const changeListItems = (id, items, dispatch) => {
    dispatch({
        type: Constants.actions.widgets.CHANGE_LIST_ITEMS,
        id: id,
        listItems: items
    })
};

export const changeListType = (id, type, dispatch) => {
    dispatch({
        type: Constants.actions.widgets.CHANGE_LIST_TYPE,
        id: id,
        listType: type
    })
};
export const changeParagraphText = (id, text, dispatch) => {
    dispatch({
        type: Constants.actions.widgets.CHANGE_PARAGRAPH_TEXT,
        id: id,
        text: text
    })
};

export const changeLinkUrl = (id, href, dispatch) => {
    dispatch({
        type: Constants.actions.widgets.CHANGE_LINK,
        id: id,
        href: href
    })
};

export const changeLinkText = (id, text, dispatch) => {
    dispatch({
        type: Constants.actions.widgets.CHANGE_LINK_TEXT,
        id: id,
        text: text
    })
};

export const togglePreview = (dispatch) => {
    dispatch({
        type: Constants.actions.widgets.PREVIEW
    })
};

export const moveUp = (id, widget, dispatch) => {
    dispatch({
        type: Constants.actions.widgets.MOVE_UP,
        id: id,
        widget: widget
    })
};

export const moveDown = (id, widget, dispatch) => {
    dispatch({
        type: Constants.actions.widgets.MOVE_DOWN,
        id: id,
        widget: widget
    })
};